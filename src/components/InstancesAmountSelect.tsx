type InstancesAmountSelectProps = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
];

export const InstancesAmountSelect = ({
  setValue,
}: InstancesAmountSelectProps) => {
  return (
    <div className="flex gap-3 mb-8 items-center">
      <label
        htmlFor="date-picker-instances-amount"
        className="font-bold text-xl"
      >
        Converters amount
      </label>
      <select
        name="date-picker-instances-amount"
        id="date-picker-instances-amount"
        className="px-2 py-1 bg-gray-200 rounded cursor-pointer dark:bg-gray-500"
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      >
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InstancesAmountSelect;
