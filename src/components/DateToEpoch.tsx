import { useState } from 'react';
// Utilities
import dayjs from 'dayjs';
// Components
import ConvertedResult from '@components/ConvertedResult';

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
  console.log(chosenDate);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="date" className="font-bold text-lg">
        Date
      </label>

      <input
        type="date"
        id="date"
        className="px-2 py-1 outline outline-1 outline-gray-900 rounded"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />

      <section className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">Timestamp</h3>

        <TimestampButtons setTimestamp={setTimestamp} />

        <p>Or more specific:</p>

        <SpecificTimestamp timestamp={timestamp} setTimestamp={setTimestamp} />

        <ConvertedResult date={chosenDate} />
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
      [id]: Number(value),
    }));
  };

  return (
    <div className="grid grid-cols-[1fr,3fr] gap-2 items-center">
      <label htmlFor="hour" className="font-bold">
        Hour:
      </label>
      <input
        id="hour"
        type="number"
        min={0}
        max={23}
        value={timestamp.hour}
        onChange={handleChange}
        className="outline outline-1 outline-gray-900 rounded px-2 py-1"
      />

      <label htmlFor="minute" className="font-bold">
        Minute:
      </label>
      <input
        id="minute"
        type="number"
        min={0}
        max={60}
        value={timestamp.minute}
        onChange={handleChange}
        className="outline outline-1 outline-gray-900 rounded px-2 py-1"
      />

      <label htmlFor="second" className="font-bold">
        Second:
      </label>
      <input
        id="second"
        type="number"
        min={0}
        max={60}
        value={timestamp.second}
        onChange={handleChange}
        className="outline outline-1 outline-gray-900 rounded px-2 py-1"
      />
    </div>
  );
};

export default DateToEpoch;
