import { Link } from "react-router";

import { cn } from "@mamokey/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t border-gray-200 bg-gray-950 dark:border-gray-900", className)}>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-12 md:py-16 lg:px-24">
        <div className="flex flex-col gap-4">
          <p className="font-label-1 text-pure-white">
            LIKELION
            <br />
            SHINHAN
          </p>
          <div className="font-label-2 flex flex-col gap-1 text-gray-400">
            <p>Designed &amp; Developed by MAMOKEY</p>
            <p>Privacy Policy &amp; Terms of Use. All rights reserved.</p>
            <p>18-35 Mangwol-ro, Uijeongbu-si, Gyeonggi-do</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-3">
            <Link
              to="https://www.instagram.com/likelion_shinhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-lg text-gray-400 transition-colors duration-150 hover:text-pure-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"/>
              </svg>
            </Link>
            <Link
              to="https://github.com/Dev-MAMOKEY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-10 items-center justify-center rounded-lg text-gray-400 transition-colors duration-150 hover:text-pure-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.521 21.278 9.521 21.017C9.521 20.782 9.513 20.14 9.508 19.288C6.726 19.893 6.139 17.905 6.139 17.905C5.685 16.748 5.029 16.446 5.029 16.446C4.121 15.828 5.098 15.841 5.098 15.841C6.101 15.911 6.629 16.862 6.629 16.862C7.521 18.367 8.97 17.922 9.539 17.669C9.631 17.018 9.889 16.574 10.175 16.419C7.954 16.262 5.62 15.388 5.62 11.547C5.62 10.451 6.01 9.561 6.649 8.862C6.546 8.605 6.203 7.596 6.747 6.228C6.747 6.228 7.587 5.955 9.497 7.237C10.295 7.013 11.15 6.9 12 6.897C12.85 6.9 13.705 7.013 14.505 7.237C16.413 5.955 17.251 6.228 17.251 6.228C17.797 7.596 17.453 8.605 17.351 8.862C17.991 9.561 18.378 10.451 18.378 11.547C18.378 15.398 16.04 16.259 13.813 16.412C14.172 16.722 14.492 17.334 14.492 18.264C14.492 19.597 14.48 20.672 14.48 21.017C14.48 21.28 14.659 21.586 15.167 21.488C19.138 20.163 22 16.417 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
              </svg>
            </Link>
          </div>
          <Link
            to="mailto:shinhan.univ@likelion.org"
            className="font-label-2 text-gray-400 transition-colors duration-150 hover:text-pure-white"
          >
            shinhan.univ@likelion.org
          </Link>
        </div>
      </div>
    </footer>
  );
}