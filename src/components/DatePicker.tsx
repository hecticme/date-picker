import DateToEpoch from './DateToEpoch';
import EpochToDate from './EpochToDate';

export default function DatePicker() {
  return (
    <div className="max-w-md flex-grow">
      <DateToEpoch />

      <EpochToDate />
    </div>
  );
}
