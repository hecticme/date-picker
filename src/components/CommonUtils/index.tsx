// Components
import CurrentTimeBtn from './CurrentTimeBtn';
// Icons
import {
  WrenchScrewdriverIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
// Utils
import useClickOutside from '@utils/useClickOutside';

export default function CommonUtils() {
  const { ref, open, setOpen } = useClickOutside();

  return (
    <div ref={ref} className="relative">
      <button
        className="group flex items-center justify-between gap-2 bg-gray-900 px-3 py-2 font-bold text-gray-100 transition-colors hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="flex items-center gap-1">
          Common utilities
          <WrenchScrewdriverIcon className="h-5 w-5" />
        </span>

        <span>
          <ChevronDownIcon
            className={`h-5 w-5 rounded-full bg-gray-700 p-1 transition-[colors,transform] group-hover:bg-gray-500 dark:bg-gray-900 dark:group-hover:bg-gray-800 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </span>
      </button>

      <div
        aria-hidden={!open}
        className={`absolute left-0 z-10 flex max-w-[280px] flex-col gap-1 bg-gray-100 px-6 py-4 shadow-md outline outline-2 outline-gray-900 transition-[opacity,top] dark:bg-gray-900 dark:outline-gray-200 sm:left-[auto] sm:right-0 ${
          open
            ? 'top-[120%] opacity-100'
            : 'pointer-events-none top-[110%] opacity-0'
        }`}
      >
        <CurrentTimeBtn isVisible={open} />
      </div>
    </div>
  );
}
