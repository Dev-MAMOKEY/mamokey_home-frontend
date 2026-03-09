interface NewsCardProps {
  imageSrc: string;
  alt?: string;
}

export function NewsCard({ imageSrc, alt = "" }: NewsCardProps) {
  return (
    <div className="group w-64 shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-900 sm:w-72 md:w-80 lg:w-96">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={alt}
          width={400}
          height={400}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}