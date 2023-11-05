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
        className="group flex w-[5rem] cursor-pointer items-center justify-between gap-1 px-2 py-1 transition-colors hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="overflow-hidden text-ellipsis">
          {timezoneOptions.find((option) => option.value === timezone)?.label}
        </span>

        <span>
          <ChevronDownIcon
            className={`h-5 w-5 rounded-full bg-gray-700 p-1 transition-[colors,transform] group-hover:bg-gray-500 dark:bg-gray-900 dark:group-hover:bg-gray-800 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </span>
      </button>

      <ul
        aria-hidden={!open}
        className={`absolute top-[110%] flex flex-col gap-2 bg-gray-900 px-1 py-2 transition-[top,opacity] dark:bg-gray-700 ${
          open ? 'top-[120%] opacity-100' : 'top-[110%] opacity-0'
        }`}
      >
        {timezoneOptions.map((option, index) => {
          const isActive = option.value === timezone;

          return (
            <li key={index}>
              <button
                value={option.value}
                onClick={handleChangeTimezone}
                className={`w-full px-2 py-1 text-left transition-colors hover:bg-gray-700 dark:hover:bg-gray-500 ${
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
