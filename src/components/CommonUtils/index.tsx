// Components
import CurrentTimmeBtn from './CurrentTimeBtn';
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
        className="group flex gap-2 items-center justify-between font-bold px-3 py-1 bg-gray-900 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-gray-100"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="flex gap-1 items-center">
          Common utilities
          <WrenchScrewdriverIcon className="w-5 h-5" />
        </span>

        <span>
          <ChevronDownIcon
            className={`w-5 h-5 transition-[colors,transform] group-hover:bg-gray-500 bg-gray-700 dark:bg-gray-900 dark:group-hover:bg-gray-800 p-1 rounded-full ${
              open ? 'rotate-180' : ''
            }`}
          />
        </span>
      </button>

      <div
        aria-hidden={!open}
        className={`absolute right-0 flex flex-col gap-1 bg-gray-900 dark:bg-gray-700 transition-[opacity,top] text-gray-100 px-2 py-1 ${
          open ? 'opacity-100 top-[120%]' : 'opacity-0 top-[110%]'
        }`}
      >
        <CurrentTimmeBtn />
      </div>
    </div>
  );
}
