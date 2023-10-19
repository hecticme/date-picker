import DateToEpoch from './DateToEpoch';
import EpochToDate from './EpochToDate';

export default function DatePicker() {
  return (
    <div className="max-w-md flex-grow flex flex-col gap-4">
      <DateToEpoch />

      <div className="h-1 rounded bg-gray-900"></div>

      <EpochToDate />
    </div>
  );
}
