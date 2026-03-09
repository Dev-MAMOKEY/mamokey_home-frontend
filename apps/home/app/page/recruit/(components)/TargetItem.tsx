interface TargetItemProps {
  step: string;
  title: string;
  description: string;
}

export function TargetItem({ step, title, description }: TargetItemProps) {
  return (
    <div className="flex w-full items-start gap-5 rounded-lg border border-gray-200 p-6 dark:border-gray-900 md:items-center md:gap-8 md:p-8">
      <span className="shrink-0 text-2xl font-bold text-blue-500/40 md:text-3xl">{step}</span>
      <div className="flex flex-col gap-1.5 md:flex-row md:items-center md:gap-6">
        <h3 className="font-title-4 shrink-0 text-black dark:text-white">{title}</h3>
        <p className="font-body-2 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}