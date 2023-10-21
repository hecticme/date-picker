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
      <h2 className="mb-2 font-bold text-xl">Epoch to Human-readable format</h2>

      <div className="flex gap-2 items-center">
        <label htmlFor="unix" className="font-bold whitespace-nowrap">
          Unix timestamp:
        </label>
        <input
          id="unix"
          type="number"
          className="px-2 py-1 outline outline-1 outline-gray-900 rounded w-full"
          value={unix}
          onChange={(e) => {
            setUnix(+e.target.value);
          }}
        />
      </div>

      <ShortDivider />

      <ConvertedResult date={date} />
    </section>
  );
}
