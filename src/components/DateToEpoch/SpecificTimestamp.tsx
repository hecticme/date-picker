// Types
import type { Timestamp } from '@src/types/timestamp';

type SpecificTimestampProps = {
  timestamp: Timestamp;
  setTimestamp: React.Dispatch<React.SetStateAction<Timestamp>>;
};

const SpecificTimestamp = ({
  timestamp,
  setTimestamp,
}: SpecificTimestampProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [id, value] = [e.target.id, e.target.value];

    setTimestamp((prev) => ({
      ...prev,
      [id]: value ? Number(value) : null,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const [id, value] = [e.target.id, e.target.value];

    if (value == '') {
      setTimestamp((prev) => ({
        ...prev,
        [id]: 0,
      }));
    }
  };

  return (
    <div className="flex gap-2 gap-y-2 gap-x-4 items-center mt-3">
      {[
        { id: 'hour', min: 0, max: 23, value: timestamp.hour },
        { id: 'minute', min: 0, max: 59, value: timestamp.minute },
        { id: 'second', min: 0, max: 59, value: timestamp.second },
      ].map((element) => {
        const isInvalidValue =
          element.value > element.max || element.value < element.min;

        return (
          <div
            className="flex gap-2 flex-grow items-center relative"
            key={element.id}
          >
            <label
              htmlFor={element.id}
              className="absolute bg-gray-900 text-gray-100 dark:bg-gray-700 rounded-full px-2 text-sm -top-[50%] -left-1 capitalize"
            >
              {element.id}:
            </label>
            <input
              id={element.id}
              type="number"
              min={element.min}
              max={element.max}
              value={element.value ?? ''}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`flex-grow outline outline-1 outline-gray-900 dark:bg-gray-500 dark:outline-gray-200 rounded px-2 py-1 ${
                isInvalidValue
                  ? 'outline-red-500 outline-2 dark:outline-red-500'
                  : ''
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SpecificTimestamp;
