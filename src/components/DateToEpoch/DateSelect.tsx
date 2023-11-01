type DateSelectProps = {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  timezone: string;
  setTimezone: React.Dispatch<React.SetStateAction<string>>;
};

export default function DateSelect({
  date,
  setDate,
  timezone,
  setTimezone,
}: DateSelectProps) {
  return (
    <div className="flex gap-3 items-center">
      <label htmlFor="date" className="text-base md:text-lg">
        Date:
      </label>

      <input
        type="date"
        id="date"
        className="px-2 py-1 outline outline-1 outline-gray-900 rounded flex-grow dark:bg-gray-500 dark:outline-gray-200"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />

      <select
        name="timezone"
        id="timezone"
        value={timezone}
        onChange={(e) => {
          setTimezone(e.target.value);
        }}
        className="px-2 cursor-pointer py-1 bg-gray-200 rounded dark:bg-gray-700"
      >
        <option value="utc">UTC</option>
        <option value="local">Local</option>
      </select>
    </div>
  );
}
