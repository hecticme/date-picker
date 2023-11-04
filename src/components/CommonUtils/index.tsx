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
      <button className="flex gap-2 items-center justify-between font-bold px-3 py-1 bg-gray-900 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-gray-100">
        <span className="flex gap-1 items-center">
          Common utilities
          <WrenchScrewdriverIcon className="w-5 h-5" />
        </span>

        <span>
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </button>

      <div className="absolute top-[120%] right-0 flex flex-col gap-1 bg-gray-900 dark:bg-gray-700 text-gray-100 px-2 py-1">
        <CurrentTimmeBtn />
      </div>
    </div>
  );
}
