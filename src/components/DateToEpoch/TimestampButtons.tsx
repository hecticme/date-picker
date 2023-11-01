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
    <section className="flex gap-1">
      {timestampButtonsList.map((element, index) => (
        <button
          key={index}
          className="px-3 py-2 rounded bg-gray-900 text-gray-100 hover:bg-gray-700 dark:bg-gray-700 text-sm lg:text-base dark:hover:bg-gray-600 transition-colors font-bold flex-grow"
          onClick={() => {
            setTimestamp(element.timestamp);
          }}
        >
          {element.label}
          <div className="font-normal text-xs lg:text-sm xl:text-base font-mono">
            ({element.timestampLabel})
          </div>
        </button>
      ))}
    </section>
  );
};

export default TimestampButtons;
