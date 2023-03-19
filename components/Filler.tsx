

export interface TFillerProps {
  iconClass?: string;
  title?: string;
  subTitle?: string;
  onClick: () => void
  buttonTitle: string
}

export function Filler(props: TFillerProps) {
  let { iconClass, title, subTitle, onClick, buttonTitle } = props;
  iconClass = iconClass || 'ri-list-check-2';
  title = title || 'No data found';
  return (
    <div className="w-full py-20 flex overflow-visible relative flex-col justify-center items-stretch p-4 mx-0 mt-4 mb-0 text-base leading-5 bg-gray-100 rounded border border-solid border-neutral-200 text-neutral-800">
      <div className="flex flex-col items-center w-full space-y-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
</svg>

        <div className="block font-sans text-xl font-bold leading-5 text-center normal-case text-neutral-800">{title}</div>
        {subTitle && (
          <div className="block font-sans text-lg font-normal leading-5 text-center normal-case text-neutral-800">{subTitle}</div>
        )}
       
          <button className="bg-indigo-500 flex items-center justify-center px-4 py-2 text-white rounded-md mt-4" onClick={onClick}>
            {buttonTitle}
        </button>
        
      </div>
    </div>
  );
}
