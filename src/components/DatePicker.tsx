import { useState } from 'react';

type Timestamp = {
  hour: number;
  minute: number;
  second: number;
};

const DatePicker = () => {
  const [timestamp, setTimestamp] = useState<Timestamp>({
    hour: 12,
    minute: 0,
    second: 0,
  });

  return (
    <div className="flex flex-col gap-2 max-w-md flex-grow">
      <label htmlFor="date" className="font-bold text-lg">
        Date
      </label>

      <input
        type="date"
        id="date"
        className="px-2 py-1 outline outline-1 outline-gray-900 rounded"
      />

      <section className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Timestamp</h3>

        <TimestampButtons setTimestamp={setTimestamp} />

        <p>Or more specific:</p>

        <SpecificTimestamp timestamp={timestamp} />
      </section>
    </div>
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
          className="px-3 py-2 rounded bg-gray-900 text-gray-100 hover:bg-gray-700 transition-colors font-bold flex-grow"
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
};

const SpecificTimestamp = ({ timestamp }: SpecificTimestampProps) => {
  return (
    <div className="grid grid-cols-[1fr,3fr] gap-2 items-center">
      <label htmlFor="hour" className="font-bold">
        Hour:
      </label>
      <input
        id="hour"
        type="number"
        value={timestamp.hour}
        className="outline outline-1 outline-gray-900 rounded px-2 py-1"
      />

      <label htmlFor="minute" className="font-bold">
        Minute:
      </label>
      <input
        id="minute"
        type="number"
        value={timestamp.minute}
        className="outline outline-1 outline-gray-900 rounded px-2 py-1"
      />

      <label htmlFor="second" className="font-bold">
        Second:
      </label>
      <input
        id="second"
        type="number"
        value={timestamp.second}
        className="outline outline-1 outline-gray-900 rounded px-2 py-1"
      />
    </div>
  );
};

export default DatePicker;
