import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b border-gray-200/60 bg-pure-white/80 backdrop-blur-lg dark:border-gray-800/60 dark:bg-dark-bg/80",
        className,
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-12 lg:px-24">
        <a href="/" className="text-xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
          LIKELION SHINHAN
        </a>

        {/* Desktop nav */}
        {items.length > 0 && (
          <div className="hidden items-center gap-1 md:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 font-body-2 text-gray-600 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-gray-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Mobile hamburger */}
        {items.length > 0 && (
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex size-10 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800/50 md:hidden"
            aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {isOpen ? (
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      {isOpen && items.length > 0 && (
        <div className="border-t border-gray-200/60 bg-pure-white/95 px-5 pb-4 backdrop-blur-lg dark:border-gray-800/60 dark:bg-dark-bg/95 md:hidden">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 font-body-2 text-gray-600 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-gray-50"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
