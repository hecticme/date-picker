import { useState } from 'react';
// Utils
import dayjs from 'dayjs';
// Components
import ConvertedResult from '@components/ConvertedResult';
import { ShortDivider } from '@components/common/Divider';

export default function EpochToDate() {
  const [unix, setUnix] = useState(dayjs().unix());

  const date = dayjs.unix(unix);

  return (
    <section className="flex flex-col gap-2">
      <h2 className="mb-2 text-lg font-bold lg:text-xl">
        Epoch to Human-readable format
      </h2>

      <div className="flex items-center gap-2">
        <label htmlFor="unix" className="whitespace-nowrap font-bold">
          Unix timestamp:
        </label>
        <input
          id="unix"
          type="number"
          className="w-full px-2 py-1 outline outline-2 outline-gray-900 dark:bg-gray-500 dark:outline-gray-200"
          value={unix}
          onChange={(e) => {
            setUnix(+e.target.value);
          }}
        />
      </div>

      <ShortDivider />

      <ConvertedResult chosenDate={date} />
    </section>
  );
}
