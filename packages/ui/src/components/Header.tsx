import { cn } from "@mamokey/utils";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  items?: NavItem[];
  className?: string;
}

export function Header({ items = [], className }: HeaderProps) {
  return (
    <nav className={cn("flex h-20 items-center justify-between px-11", className)}>
      <span className="text-[30px] font-medium leading-10 text-black">
        LIKELION SHINHAN
      </span>
      {items.length > 0 && (
        <div className="flex gap-5">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex h-10 items-center justify-center px-5 text-button-1 text-black"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
