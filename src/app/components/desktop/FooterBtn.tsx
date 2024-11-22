interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const FooterBtn = ({ children, className }: Props) => {
  return (
    <button
      className={`flex w-[50px] p-3 h-[45px] justify-center items-center bg-[#A4A4A4] outline outline-4 outline-[#D9D9D9] ${className}`}
    >
      {children}
    </button>
  );
};
