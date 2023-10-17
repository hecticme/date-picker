type InstancesAmountSelectProps = {
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export const InstancesAmountSelect = ({
  setValue,
}: InstancesAmountSelectProps) => {
  return (
    <div className="flex flex-col gap-2 mb-8 items-center justify-center">
      <label
        htmlFor="date-picker-instances-amount"
        className="font-bold text-xl"
      >
        Instances Amount
      </label>
      <select
        name="date-picker-instances-amount"
        id="date-picker-instances-amount"
        className="px-2 py-1 outline outline-1 outlint-gray-900 rounded cursor-pointer"
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
};

export default InstancesAmountSelect;
