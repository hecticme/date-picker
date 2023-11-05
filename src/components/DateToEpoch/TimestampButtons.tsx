// Types
import type { Timestamp } from '@src/types/timestamp';

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
    <section className="flex gap-2">
      {timestampButtonsList.map((element, index) => (
        <button
          key={index}
          className="hocus:bg-gray-900 hocus:text-gray-100 dark:hocus:bg-gray-700 flex-grow px-3 py-2 text-sm font-bold outline outline-2 outline-gray-900 transition-colors dark:outline-gray-200 lg:text-base"
          onClick={() => {
            setTimestamp(element.timestamp);
          }}
        >
          {element.label}
          <div className="font-mono text-xs font-normal lg:text-sm xl:text-base">
            ({element.timestampLabel})
          </div>
        </button>
      ))}
    </section>
  );
};

export default TimestampButtons;
