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
  console.log(chosenDate);

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
          className="px-2 py-1 outline outline-1 outline-gray-900 rounded flex-grow"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>

      <section className="flex flex-col gap-2">
        <h3 className="text-lg">Timestamp:</h3>

        <TimestampButtons setTimestamp={setTimestamp} />

        <p className="text-gray-500">Or more specific:</p>

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
    <div className="flex gap-2 gap-y-2 gap-x-4 items-center mt-2">
      <div className="flex gap-2 flex-grow items-center relative">
        <label
          htmlFor="hour"
          className="absolute bg-gray-900 text-gray-100 rounded-full px-2 text-sm -top-[50%] -left-1"
        >
          Hour:
        </label>
        <input
          id="hour"
          type="number"
          min={0}
          max={23}
          value={timestamp.hour}
          onChange={handleChange}
          className="flex-grow outline outline-1 outline-gray-900 rounded px-2 py-1"
        />
      </div>

      <div className="flex gap-2 flex-grow items-center relative">
        <label
          htmlFor="minute"
          className="absolute bg-gray-900 text-gray-100 rounded-full px-2 text-sm -top-[50%] -left-1"
        >
          Minute:
        </label>
        <input
          id="minute"
          type="number"
          min={0}
          max={60}
          value={timestamp.minute}
          onChange={handleChange}
          className="flex-grow outline outline-1 outline-gray-900 rounded px-2 py-1"
        />
      </div>

      <div className="flex gap-2 flex-grow items-center relative">
        <label
          htmlFor="second"
          className="absolute bg-gray-900 text-gray-100 rounded-full px-2 text-sm -top-[50%] -left-1"
        >
          Second:
        </label>
        <input
          id="second"
          type="number"
          min={0}
          max={60}
          value={timestamp.second}
          onChange={handleChange}
          className="flex-grow outline outline-1 outline-gray-900 rounded px-2 py-1"
        />
      </div>
    </div>
  );
};

export default DateToEpoch;
