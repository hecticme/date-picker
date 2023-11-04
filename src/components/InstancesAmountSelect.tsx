// Utils
import useClickOutside from '@src/utils/useClickOutside';
// Icons
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type InstancesAmountSelectProps = {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
];

export const InstancesAmountSelect = ({
  amount,
  setAmount,
}: InstancesAmountSelectProps) => {
  const { ref, open, setOpen } = useClickOutside();

  const handleChangeInstAmount = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setAmount(+e.currentTarget.value);
  };

  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="date-picker-instances-amount"
        className="text-xl font-bold"
      >
        Converters amount
      </label>

      <div
        ref={ref}
        id="date-picker-instances-amount"
        className="relative bg-gray-900 text-gray-100"
      >
        <button
          className="flex w-12 cursor-pointer items-center justify-between gap-1 px-2 py-1 transition-colors hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="overflow-hidden text-ellipsis">
            {options.find((option) => option.value === amount)?.label}
          </span>

          <span>
            <ChevronDownIcon
              className={`h-3 w-3 ${open ? 'rotate-180' : ''}`}
            />
          </span>
        </button>

        <ul
          aria-hidden={open ? 'false' : 'true'}
          className={`absolute top-[110%] bg-gray-900 px-1 py-2 dark:bg-gray-700 ${
            open ? 'flex flex-col gap-2' : 'hidden'
          }`}
        >
          {options.map((option, index) => {
            const isActive = option.value === amount;

            return (
              <li key={index}>
                <button
                  value={option.value}
                  onClick={handleChangeInstAmount}
                  className={`w-full min-w-[2rem] px-2 py-1 text-left transition-colors hover:bg-gray-700 dark:hover:bg-gray-500 ${
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
    </div>
  );
};

export default InstancesAmountSelect;
