import { useState } from 'react';
import dayjs from 'dayjs';

export default function CurrentTimeBtn() {
  const [timestamp, setTimestamp] = useState(dayjs().unix());

  return (
    <div className="flex flex-col gap-2">
      <button
        className="whitespace-nowrap bg-gray-900 px-3 py-2 font-bold text-gray-100 transition-colors hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
        onClick={() => {
          setTimestamp(dayjs().unix());
        }}
      >
        Get current unix timestamp
      </button>

      <p className="flex justify-center overflow-hidden text-ellipsis border-2 border-solid border-gray-900 px-2 py-1 font-mono dark:border-gray-200">
        {timestamp}
      </p>
    </div>
  );
}
