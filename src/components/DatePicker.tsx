// import { useState } from 'react';

const DatePicker = () => {
  // const [timestamp, setTimestamp] = useState({
  //   hour: 12,
  //   minute: 0,
  //   second: 0,
  // });

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

        <TimestampButtons />

        <p>Or more specific:</p>

        <SpecificTimestamp />
      </section>
    </div>
  );
};

const TimestampButtons = () => {
  return (
    <section className="flex gap-1">
      <button className="px-3 py-2 rounded bg-gray-900 text-gray-100 hover:bg-gray-700 transition-colors font-bold flex-grow">
        Start of day
        <div className="font-normal">(00:00)</div>
      </button>

      <button className="px-3 py-2 rounded bg-gray-900 text-gray-100 hover:bg-gray-700 transition-colors font-bold flex-grow">
        Midday
        <div className="font-normal">(12:00)</div>
      </button>

      <button className="px-3 py-2 rounded bg-gray-900 text-gray-100 hover:bg-gray-700 transition-colors font-bold flex-grow">
        End of day
        <div className="font-normal">(23:59)</div>
      </button>
    </section>
  );
};

const SpecificTimestamp = () => {
  return (
    <div className="grid grid-cols-[1fr,3fr] gap-2 items-center">
      <label htmlFor="hour" className="font-bold">
        Hour:
      </label>
      <input
        id="hour"
        type="number"
        className="outline outline-1 outline-gray-900 rounded px-2 py-1"
      />

      <label htmlFor="minute" className="font-bold">
        Minute:
      </label>
      <input
        id="minute"
        type="number"
        className="outline outline-1 outline-gray-900 rounded px-2 py-1"
      />

      <label htmlFor="second" className="font-bold">
        Second:
      </label>
      <input
        id="second"
        type="number"
        className="outline outline-1 outline-gray-900 rounded px-2 py-1"
      />
    </div>
  );
};

export default DatePicker;
