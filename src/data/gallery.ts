/**
 * Art and photos for the reel on /v3. Drop image files into `public/gallery/`
 * and list them here. Keep files ≲ 500 KB each (resize to ~1200px on the long edge).
 * `caption` is optional and shows on hover.
 */
export interface GalleryItem {
  /** Path under public/, e.g. "/gallery/half-dome.jpg" */
  src: string;
  caption?: string;
  kind: "art" | "photo";
}

export const gallery: GalleryItem[] = [
  { src: "/gallery/IMG_7124-d0918689.PNG", kind: "art" },
  { src: "/gallery/IMG_7126-2446b796.JPG", kind: "art" },
  { src: "/gallery/IMG_7127-37ce779c.JPG", kind: "art" },
  { src: "/gallery/IMG_7128-c029b271.JPG", kind: "art" },
  { src: "/gallery/IMG_7129-61ecf461.JPG", kind: "art" },
  { src: "/gallery/IMG_7130-0195eac7.JPG", kind: "art" },
  { src: "/gallery/IMG_7131-9d75b74e.JPG", kind: "art" },
  { src: "/gallery/IMG_7132-f3226834.JPG", kind: "art" },
  { src: "/gallery/IMG_7133-6fc235bd.JPG", kind: "art" },
  { src: "/gallery/IMG_7138-791ab2a9.JPG", kind: "art" },
  { src: "/gallery/IMG_7139-8bad305a.JPG", kind: "art" },
  { src: "/gallery/IMG_7140-749bf242.JPG", kind: "art" },
  { src: "/gallery/IMG_7141-3b913f89.JPG", kind: "art" },
  { src: "/gallery/IMG_7142-62437556.JPG", kind: "art" },
  { src: "/gallery/IMG_7143-90f4f7a5.JPG", kind: "art" },
  { src: "/gallery/IMG_7144-94a1f8f7.JPG", kind: "art" },
  { src: "/gallery/IMG_7145-b527aaf4.JPG", kind: "art" },
  { src: "/gallery/IMG_7146-436aada7.JPG", kind: "art" },
  { src: "/gallery/IMG_7152-b1dd2f54.JPG", kind: "art" },
];
