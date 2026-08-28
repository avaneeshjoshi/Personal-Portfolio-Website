import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface SubSectionProps {
  title: string;
  linkText?: string;
  linkHref?: string;
  children: ReactNode;
}

/** Quiet heading for a subsection inside a SectionHeader section (no icon). */
const SubSection = ({ title, linkText, linkHref, children }: SubSectionProps) => (
  <div className="mt-8">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      {linkText && linkHref && (
        <a href={linkHref} target="_blank" rel="noopener noreferrer" className="link section-link flex items-center gap-1 text-xs">
          {linkText}
          <ArrowUpRight className="w-3 h-3" />
        </a>
      )}
    </div>
    {children}
  </div>
);

export default SubSection;
