

export interface TFillerProps {
  iconClass?: string;
  title?: string;
  subTitle?: string;
  onClick: () => void
}

export function Filler(props: TFillerProps) {
  let { iconClass, title, subTitle, onClick } = props;
  iconClass = iconClass || 'ri-list-check-2';
  title = title || 'No data found';
  return (
    <div className="w-full py-20 flex overflow-visible relative flex-col justify-center items-stretch p-4 mx-0 mt-4 mb-0 text-base leading-5 bg-gray-100 rounded border border-solid border-neutral-200 text-neutral-800">
      <div className="flex flex-col items-center w-full space-y-4">
        <i className={`${iconClass} text-7xl`}></i>
        <div className="block font-sans text-xl font-bold leading-5 text-center normal-case text-neutral-800">{title}</div>
        {subTitle && (
          <div className="block font-sans text-lg font-normal leading-5 text-center normal-case text-neutral-800">{subTitle}</div>
        )}
       
          <button className="bg-indigo-500 flex items-center justify-center px-4 py-2 text-white rounded-md mt-4" onClick={onClick}>
            Add Your Name
        </button>
        
      </div>
    </div>
  );
}
