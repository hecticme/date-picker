import { useState } from 'react';
// Utilities
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
// Components
import ConvertedResult from '@components/ConvertedResult';
import { ShortDivider } from '@components/common/Divider';
import SpecificTimestamp from './SpecificTimestamp';
import TimestampButtons from './TimestampButtons';
import DateSelect from './DateSelect';
// Types
import type { Timestamp } from '@src/types/timestamp';

const DateToEpoch = () => {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [timestamp, setTimestamp] = useState<Timestamp>({
    hour: 12,
    minute: 0,
    second: 0,
  });

  const [timezone, setTimezone] = useState('utc');

  const chosenDate = dayjs(date)
    .hour(timestamp.hour)
    .minute(timestamp.minute)
    .second(timestamp.second)
    .utc(timezone === 'utc' || false);

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-bold text-lg lg:text-xl">
        Human-readable format to Epoch
      </h2>

      <DateSelect
        date={date}
        setDate={setDate}
        timezone={timezone}
        setTimezone={setTimezone}
      />

      <section className="flex flex-col gap-2">
        <h3 className="text-base md:text-lg">Timestamp:</h3>

        <TimestampButtons setTimestamp={setTimestamp} />

        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
          Or more specific:
        </p>

        <SpecificTimestamp timestamp={timestamp} setTimestamp={setTimestamp} />

        <ShortDivider />

        <ConvertedResult chosenDate={chosenDate} />
      </section>
    </section>
  );
};

export default DateToEpoch;
