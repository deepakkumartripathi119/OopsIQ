type ContainerType = {
  className?: string;
  children?: React.ReactNode;
  hasBackground?: boolean;
};

export default function Container({ className, children, hasBackground = true }: ContainerType) {
  const backgroundClasses = hasBackground ? 'bg-white rounded-lg shadow-lg' : '';
  return (
    <section
      className={`max-w-7xl mx-auto flex flex-col items-center lg:p-8 p-6 mb-16 ${backgroundClasses} ${className}`}
    >
      {children}
    </section>
  );
}
