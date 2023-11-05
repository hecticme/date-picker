import { useState } from 'react';
// Components
import Header from '@components/Header';
import DatePicker from '@components/DatePicker';
import InstancesAmountSelect from '@components/InstancesAmountSelect';
import CommonUtils from '@src/components/CommonUtils';

function App() {
  const [instancesAmount, setInstancesAmount] = useState(1);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-[90rem] px-2 pt-12 md:px-4">
        <section className="mb-4 flex flex-col justify-between gap-3 sm:mb-8 sm:flex-row sm:items-center">
          <InstancesAmountSelect
            amount={instancesAmount}
            setAmount={setInstancesAmount}
          />

          <CommonUtils />
        </section>

        <section className="grid grid-cols-1 justify-center gap-10 md:grid-cols-2">
          {[...Array(instancesAmount).keys()].map((instance) => (
            <DatePicker key={instance} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
