interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

// Componente de botão com aparência estilizada e funcionalidade de link

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border cursor-pointer ${className}`}
    >
      <span className="relative z-10 text-blue">{text}</span>
    </a>
  );
};
