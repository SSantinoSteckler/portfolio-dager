interface InterfaceEducation {
  img: string;
  title: string;
  subtitle: string;
}

const Education = ({ img, title, subtitle }: InterfaceEducation) => {
  return (
    <div className='flex flex-row gap-2 items-center mt-5'>
      <img className='w-[60px] h-[60px]' src={img} alt={title} />
      <div className='flex flex-col gap-1'>
        <h4 className='text-[13px]'>{title}</h4>
        <p className='text-[9px] text-gray-500'>{subtitle}</p>
      </div>
    </div>
  );
};

export default Education;
