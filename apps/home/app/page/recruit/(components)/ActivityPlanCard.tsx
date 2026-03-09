import { cn } from "@mamokey/utils";

interface ActivityPlanCardProps {
  label: string;
  variant: "header" | "primary" | "secondary";
}

export function ActivityPlanCard({ label, variant }: ActivityPlanCardProps) {
  const styles = {
    header: "bg-blue-700 text-pure-white font-semibold",
    primary: "text-blue-700 dark:text-blue-300 font-medium bg-blue-50 dark:bg-blue-900/30",
    secondary: "text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900",
  };

  return (
    <div className={cn("flex flex-1 items-center justify-center overflow-hidden border-b border-gray-200 px-6 py-5 dark:border-gray-800 md:px-10 md:py-6", styles[variant])}>
      <span className="font-body-2">{label}</span>
    </div>
  );
}