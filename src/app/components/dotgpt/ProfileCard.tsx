interface ProfileCardProps {
  content: string;
}

export const ProfileCard = ({ content }: ProfileCardProps) => {
  return (
    <div className='flex justify-start p-4 w-[400px] min-h-[120px] rounded-lg'>
      <div className='flex-shrink-0'>
        <img
          src={'/dotgpt-avatar.png'}
          alt={`DotGpt avatar`}
          className='w-[50px] h-[50px] rounded-full'
        />
      </div>

      <div className='ml-4 text-left '>
        <h3 className='text-purple-400 text-[0.7rem] font-bold'>DotGPT</h3>
        <div className='mt-2 p-[0.7rem_1rem] bg-gray-400 rounded-sm w-[300px] max-h[400px] overflow-hidden'>
          <p className='text-black text-[0.6rem] text-wrap leading-relaxed'>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
