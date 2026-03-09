interface PartCardProps {
  title: string;
  subtitle: string;
}

export function PartCard({ title, subtitle }: PartCardProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 overflow-hidden rounded-lg bg-blue-700 p-10 md:p-14">
      <h3 className="font-title-3 text-pure-white">{title}</h3>
      <p className="font-body-2 text-blue-200">{subtitle}</p>
    </div>
  );
}