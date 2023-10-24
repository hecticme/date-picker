import dayjs from 'dayjs';
import ClipboardBtn from '@components/common/ClipboardBtn';

const ConvertedResult = ({ chosenDate }: { chosenDate: dayjs.Dayjs }) => {
  const date = chosenDate.local();

  const [humanDate, unix, unixMilli] = [
    date.format('dddd, MMMM DD, YYYY HH:mm:ss [GMT]Z'),
    date.unix(),
    date.valueOf(),
  ];

  const utcHumanDate = date.utc().format('dddd, MMMM DD, YYYY HH:mm:ss');

  return (
    <section className="flex flex-col gap-2">
      <h3 className="font-bold text-sm md:text-base">Human-readable format:</h3>

      <h4 className="text-sm md:text-base">UTC:</h4>

      <div className="flex justify-between gap-2 px-2 py-1 outline outline-1 outline-gray-400 rounded">
        <p>{utcHumanDate}</p>

        <ClipboardBtn content={utcHumanDate} />
      </div>

      <h4 className="text-sm md:text-base">Your local time:</h4>

      <div className="flex justify-between gap-2 px-2 py-1 outline outline-1 outline-gray-400 rounded">
        <p>{humanDate}</p>

        <ClipboardBtn content={humanDate} />
      </div>

      <h3 className="font-bold text-sm md:text-base">Epoch: </h3>

      <div className="flex flex-col gap-1 px-2 py-1 outline outline-1 outline-gray-400 rounded">
        <div className="flex justify-between gap-2 items-center">
          <p>
            {unix}{' '}
            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
              (seconds)
            </span>
          </p>

          <ClipboardBtn content={unix} />
        </div>

        <div className="flex justify-between gap-2 items-center">
          <p>
            {unixMilli}{' '}
            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
              (milliseconds)
            </span>
          </p>

          <ClipboardBtn content={unixMilli} />
        </div>
      </div>
    </section>
  );
};

export default ConvertedResult;
