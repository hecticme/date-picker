// Components
import TimezoneSelect from './TimezoneSelect';

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
    <div className="flex items-center gap-3">
      <label htmlFor="date" className="text-base md:text-lg">
        Date:
      </label>

      <input
        type="date"
        id="date"
        className="flex-grow px-2 py-1 outline outline-2 outline-gray-900 dark:bg-gray-500 dark:outline-gray-200"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />

      <TimezoneSelect timezone={timezone} setTimezone={setTimezone} />
    </div>
  );
}
