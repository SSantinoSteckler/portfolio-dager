interface Props {
  img: string;
  name: string;
  onClick: () => void;
}

export const DesktopIcon = ({ img, name, onClick }: Props) => {
  return (
    <section
      className='w-[150px] flex flex-col g-2 overflow-hidden justify-center items-center pt-2 pb-2 hover:bg-[#7d767621] hover:outline-[2px_solid_#ffffff55] hover:cursor-pointer'
      onDoubleClick={() => onClick()}
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={`size-[100px]  bg-center bg-cover bg-no-repeat`}
      ></div>
      <span className='text-[1.1rem] text-[#826293] break-words'>{name}</span>
    </section>
  );
};
