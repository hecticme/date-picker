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
        className="px-2 py-1 outline outline-2 outline-gray-900 flex-grow dark:bg-gray-500 dark:outline-gray-200"
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
        className="px-2 cursor-pointer py-1 transition-colors bg-gray-900 text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-600 dark:bg-gray-700"
      >
        <option value="utc">UTC</option>
        <option value="local">Local</option>
      </select>
    </div>
  );
}
