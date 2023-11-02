import DateToEpoch from './DateToEpoch';
import EpochToDate from './EpochToDate';

export default function DatePicker() {
  return (
    <div className="flex flex-grow flex-col gap-4 p-4 outline outline-2 outline-gray-900 dark:outline-gray-200">
      <DateToEpoch />

      <div className="h-1 rounded bg-gray-900"></div>

      <EpochToDate />
    </div>
  );
}
