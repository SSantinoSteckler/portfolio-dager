interface Props {
  children: React.ReactNode;
  className?: string;
}

export const DesktopView = ({ children, className }: Props) => {
  return (
    <section
      id='desktop-view '
      className={`bg-[#d9d9d9] p-8 outline-4 outline outline-[#9d8ca7] relative w-full h-full press flex justify-between ${className}`}
    >
      {children}
    </section>
  );
};
