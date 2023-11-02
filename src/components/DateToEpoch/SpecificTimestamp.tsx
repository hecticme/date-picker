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
    <div className="mt-3 flex items-center gap-2 gap-x-4 gap-y-2">
      {[
        { id: 'hour', min: 0, max: 23, value: timestamp.hour },
        { id: 'minute', min: 0, max: 59, value: timestamp.minute },
        { id: 'second', min: 0, max: 59, value: timestamp.second },
      ].map((element) => {
        const isInvalidValue =
          element.value > element.max || element.value < element.min;

        return (
          <div
            className="relative flex flex-grow items-center gap-2"
            key={element.id}
          >
            <label
              htmlFor={element.id}
              className="absolute -left-1 -top-[50%] bg-gray-900 px-2 text-sm capitalize text-gray-100 dark:bg-gray-700"
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
              className={`flex-grow px-2 py-1 outline outline-2 outline-gray-900 dark:bg-gray-500 dark:outline-gray-200 ${
                isInvalidValue
                  ? 'outline-2 outline-red-500 dark:outline-red-500'
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
