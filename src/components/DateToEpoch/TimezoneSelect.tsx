// Utils
import useClickOutside from '@src/utils/useClickOutside';
// Icons
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const timezoneOptions = [
  { value: 'utc', label: 'UTC' },
  { value: 'local', label: 'Local' },
];

type TimezoneSelectProps = {
  timezone: string;
  setTimezone: React.Dispatch<React.SetStateAction<string>>;
};

export default function TimezoneSelect({
  timezone,
  setTimezone,
}: TimezoneSelectProps) {
  const { ref, open, setOpen } = useClickOutside();

  const handleChangeTimezone = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setTimezone(e.currentTarget.value);
  };

  return (
    <div ref={ref} className="relative bg-gray-900 text-gray-100">
      <button
        className="px-2 cursor-pointer py-1 transition-colors w-[4.4rem] hover:bg-gray-700 dark:hover:bg-gray-600 dark:bg-gray-700 flex gap-1 items-center justify-between"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="overflow-hidden text-ellipsis">
          {timezoneOptions.find((option) => option.value === timezone)?.label}
        </span>

        <span>
          <ChevronDownIcon className={`w-3 h-3 ${open ? 'rotate-180' : ''}`} />
        </span>
      </button>

      <ul
        aria-hidden={open ? 'false' : 'true'}
        className={`absolute bg-gray-900 dark:bg-gray-700 px-1 py-2 top-[110%] ${
          open ? 'flex flex-col gap-2' : 'hidden'
        }`}
      >
        {timezoneOptions.map((option, index) => {
          const isActive = option.value === timezone;

          return (
            <li key={index}>
              <button
                value={option.value}
                onClick={handleChangeTimezone}
                className={`px-2 py-1 text-left transition-colors hover:bg-gray-700 dark:hover:bg-gray-500 w-full ${
                  isActive ? 'bg-gray-700 dark:bg-gray-500' : ''
                }`}
                disabled={isActive}
              >
                {option.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
