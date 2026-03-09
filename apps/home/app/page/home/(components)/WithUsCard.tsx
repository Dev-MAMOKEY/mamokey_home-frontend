interface WithUsCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export function WithUsCard({ imageSrc, title, description }: WithUsCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-900">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          width={600}
          height={338}
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-2 p-5 md:p-6">
        <h3 className="font-title-4 text-black dark:text-white">{title}</h3>
        <p className="font-body-2 text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
