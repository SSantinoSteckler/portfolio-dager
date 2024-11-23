import { Window } from '../Window';

interface Props {
  img: string;
  name: string;
  onClick: () => void;
  isOpen?: boolean;
  minWidth?: number;
  minHeight?: number;
  children?: React.ReactNode;
}

export const DesktopIcon = ({
  img,
  name,
  onClick,
  isOpen = false,
  children,
  minWidth,
  minHeight,
}: Props) => {
  return (
    <>
      <section
        className='w-[150px] flex flex-col  g-2 overflow-hidden gap-2 justify-center items-center pt-2 pb-2 hover:bg-[#7d767621] hover:outline-[2px_solid_#ffffff55] hover:cursor-pointer'
        onClick={() => onClick()}
      >
        <div
          style={{ backgroundImage: `url(${img})` }}
          className={`size-[100px]  bg-center bg-cover bg-no-repeat rounded-lg`}
        ></div>
        <span className='text-[0.79rem] text-[#826293] break-words text-center '>
          {name}
        </span>
      </section>
      {isOpen && (
        <Window
          name={name}
          onClick={onClick}
          minHeight={minHeight}
          minWidth={minWidth}
        >
          {children}
        </Window>
      )}
    </>
  );
};
