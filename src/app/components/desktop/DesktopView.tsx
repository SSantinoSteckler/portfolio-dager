interface Props {
  children: React.ReactNode;
}

export const DesktopView = ({ children }: Props) => {
  return (
    <section
      id='desktop-view'
      className='bg-[#d9d9d9] p-8 outline-[4px_solid_#9d8ca7]'
    >
      {children}
    </section>
  );
};
