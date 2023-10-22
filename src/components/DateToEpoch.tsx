import { useState } from 'react';
// Utilities
import dayjs from 'dayjs';
// Components
import ConvertedResult from '@components/ConvertedResult';
import { ShortDivider } from '@components/common/Divider';

type Timestamp = {
  hour: number;
  minute: number;
  second: number;
};

const DateToEpoch = () => {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [timestamp, setTimestamp] = useState<Timestamp>({
    hour: 12,
    minute: 0,
    second: 0,
  });

  const chosenDate = dayjs(date)
    .hour(timestamp.hour)
    .minute(timestamp.minute)
    .second(timestamp.second);

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-bold text-xl">Human-readable format to Epoch</h2>

      <div className="flex gap-3 items-center">
        <label htmlFor="date" className="text-lg">
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
      </div>

      <section className="flex flex-col gap-2">
        <h3 className="text-lg">Timestamp:</h3>

        <TimestampButtons setTimestamp={setTimestamp} />

        <p className="text-gray-500 dark:text-gray-400">Or more specific:</p>

        <SpecificTimestamp timestamp={timestamp} setTimestamp={setTimestamp} />

        <ShortDivider />

        <ConvertedResult date={chosenDate} />
      </section>
    </section>
  );
};

type TimestampButtonsProps = {
  setTimestamp: React.Dispatch<React.SetStateAction<Timestamp>>;
};

const timestampButtonsList = [
  {
    timestamp: {
      hour: 0,
      minute: 0,
      second: 0,
    },
    label: 'Start of day',
    timestampLabel: '00:00:00',
  },
  {
    timestamp: {
      hour: 12,
      minute: 0,
      second: 0,
    },
    label: 'Midday',
    timestampLabel: '12:00:00',
  },
  {
    timestamp: {
      hour: 23,
      minute: 59,
      second: 59,
    },
    label: 'End of day',
    timestampLabel: '23:59:59',
  },
];

const TimestampButtons = ({ setTimestamp }: TimestampButtonsProps) => {
  return (
    <section className="flex gap-1">
      {timestampButtonsList.map((element, index) => (
        <button
          key={index}
          className="px-3 py-2 rounded bg-gray-900 text-gray-100 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors font-bold flex-grow"
          onClick={() => {
            setTimestamp(element.timestamp);
          }}
        >
          {element.label}
          <div className="font-normal">({element.timestampLabel})</div>
        </button>
      ))}
    </section>
  );
};

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
    <div className="flex gap-2 gap-y-2 gap-x-4 items-center mt-2">
      {[
        { id: 'hour', min: 0, max: 23, value: timestamp.hour },
        { id: 'minute', min: 0, max: 59, value: timestamp.minute },
        { id: 'second', min: 0, max: 59, value: timestamp.second },
      ].map((element) => {
        const isInvalidValue =
          element.value > element.max || element.value < element.min;

        return (
          <div className="flex gap-2 flex-grow items-center relative">
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

export default DateToEpoch;
