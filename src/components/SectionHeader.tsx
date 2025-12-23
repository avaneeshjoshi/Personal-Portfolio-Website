import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
  linkText?: string;
  linkHref?: string;
}

const SectionHeader = ({ icon, title, linkText, linkHref }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <h2 className="section-title">
        {icon}
        {title}
      </h2>
      {linkText && linkHref && (
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="link section-link flex items-center gap-1"
        >
          {linkText}
          <ArrowUpRight className="w-3 h-3" />
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
