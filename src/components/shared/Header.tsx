export default function Header({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${className}`}
    >
            <h1 className="max-w-lg sm:text-[3rem] text-[1.9rem] leading-tight font-bold tracking-tight mb-5 text-zinc-800 [text-shadow:0_2px_4px_rgba(0,0,0,0.2)]">
        {title}
      </h1>
      {description && (
        <p className="lg:max-w-lg max-w-sm md:text-lg text-sm mb-6 text-zinc-600">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
