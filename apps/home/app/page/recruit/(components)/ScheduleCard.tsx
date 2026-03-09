interface ScheduleCardProps {
  step: string;
  title: string;
  date: string;
}

export function ScheduleCard({ step, title, date }: ScheduleCardProps) {
  return (
    <div className="flex flex-1 flex-col gap-10 rounded-lg border border-gray-200 p-6 dark:border-gray-900 md:gap-14 md:p-8">
      <span className="text-4xl font-bold tabular-nums text-blue-200 dark:text-blue-800 md:text-5xl">{step}</span>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-title-4 text-black dark:text-white">{title}</h3>
        <p className="font-body-2 text-gray-500 dark:text-gray-400">{date}</p>
      </div>
    </div>
  );
}