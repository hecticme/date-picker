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
    <div className="flex gap-3 mb-8 items-center">
      <label
        htmlFor="date-picker-instances-amount"
        className="font-bold text-xl"
      >
        Converters amount
      </label>

      <div
        ref={ref}
        id="date-picker-instances-amount"
        className="relative bg-gray-900 text-gray-100"
      >
        <button
          className="px-2 cursor-pointer py-1 transition-colors w-12 hover:bg-gray-700 dark:hover:bg-gray-600 dark:bg-gray-700 flex gap-1 items-center justify-between"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="overflow-hidden text-ellipsis">
            {options.find((option) => option.value === amount)?.label}
          </span>

          <span>
            <ChevronDownIcon
              className={`w-3 h-3 ${open ? 'rotate-180' : ''}`}
            />
          </span>
        </button>

        <ul
          aria-hidden={open ? 'false' : 'true'}
          className={`absolute bg-gray-900 dark:bg-gray-700 px-1 py-2 top-[110%] ${
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
                  className={`px-2 py-1 text-left transition-colors min-w-[2rem] hover:bg-gray-700 dark:hover:bg-gray-500 w-full ${
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
