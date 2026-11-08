"use client";

export const BaseTemplateLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      {children}
    </div>
  );
};
