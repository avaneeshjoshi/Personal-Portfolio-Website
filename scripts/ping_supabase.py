#!/usr/bin/env python3
"""
Manual test for Supabase keep-alive. Pings the same endpoint used by the GitHub Action.

Usage (from project root):
  python3 scripts/ping_supabase.py

Loads VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY from .env in the project root.
You can also set them in the environment or pass as args: python scripts/ping_supabase.py <URL> <KEY>
"""

import os
import sys
import urllib.request
import urllib.error


def load_dotenv() -> None:
    """Load .env from project root (parent of scripts/)."""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    root = os.path.dirname(script_dir)
    env_path = os.path.join(root, ".env")
    if not os.path.isfile(env_path):
        return
    with open(env_path) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            key, value = key.strip(), value.strip().strip("'\"")
            if key in ("VITE_SUPABASE_URL", "VITE_SUPABASE_ANON_KEY", "SUPABASE_URL", "SUPABASE_ANON_KEY"):
                os.environ.setdefault(key, value)


def main() -> None:
    load_dotenv()

    url = os.environ.get("VITE_SUPABASE_URL") or os.environ.get("SUPABASE_URL")
    key = os.environ.get("VITE_SUPABASE_ANON_KEY") or os.environ.get("SUPABASE_ANON_KEY")

    if len(sys.argv) >= 3:
        url, key = sys.argv[1], sys.argv[2]

    if not url or not key:
        print("Missing Supabase URL or anon key.")
        print("Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env, or run:")
        print("  python3 scripts/ping_supabase.py <SUPABASE_URL> <ANON_KEY>")
        sys.exit(1)

    url = url.rstrip("/")
    endpoint = f"{url}/rest/v1/_keepalive?select=id&limit=1"

    req = urllib.request.Request(
        endpoint,
        headers={
            "apikey": key,
            "Authorization": f"Bearer {key}",
            "Accept": "application/json",
        },
        method="GET",
    )

    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            code = resp.getcode()
            body = resp.read().decode()
            print(f"OK (HTTP {code})")
            if body:
                print(f"Response: {body}")
    except urllib.error.HTTPError as e:
        print(f"HTTP error: {e.code} {e.reason}")
        if e.fp:
            print(e.fp.read().decode())
        sys.exit(1)
    except urllib.error.URLError as e:
        print(f"Request failed: {e.reason}")
        sys.exit(1)


if __name__ == "__main__":
    main()
