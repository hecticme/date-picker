import dayjs from 'dayjs';
import ClipboardBtn from '@components/common/ClipboardBtn';

const ConvertedResult = ({ date }: { date: dayjs.Dayjs }) => {
  const humanDate = date.format('DD/MM/YYYY HH:mm:ss');
  const unix = date.unix();
  const unixMilli = date.valueOf();

  return (
    <section className="flex flex-col gap-2">
      <div className="h-1 bg-gray-700 my-2 rounded"></div>

      <div className="flex justify-between gap-2 px-2 py-1 outline outline-1 outline-gray-400 rounded">
        <p>
          <span className="font-bold">Human-readable time:</span> {humanDate}
        </p>

        <ClipboardBtn content={humanDate} />
      </div>

      <div className="flex gap-2 px-2 py-1 outline outline-1 outline-gray-400 rounded">
        <p className="font-bold">Epoch time: </p>

        <div className="flex-grow flex flex-col gap-1">
          <div className="flex justify-between gap-2 items-center">
            <p>
              {unix} <span className="text-sm text-gray-500">(seconds)</span>
            </p>

            <ClipboardBtn content={unix} />
          </div>

          <div className="flex justify-between gap-2 items-center">
            <p>
              {unixMilli}{' '}
              <span className="text-sm text-gray-500">(milliseconds)</span>
            </p>

            <ClipboardBtn content={unixMilli} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvertedResult;
