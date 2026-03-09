export function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-100/70 via-white to-blue-300/70 dark:from-blue-950 dark:via-dark-bg dark:to-blue-900" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-1/4 top-1/4 h-[60vw] w-[60vw] rounded-full bg-blue-200/50 blur-[120px] dark:bg-blue-800/30" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-[50vw] w-[50vw] rounded-full bg-blue-300/50 blur-[120px] dark:bg-blue-900/20" aria-hidden="true" />
    </>
  );
}