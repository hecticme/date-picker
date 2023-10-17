import { useState } from 'react';
import Header from '@components/Header';
import DatePicker from '@components/DatePicker';
import InstancesAmountSelect from '@components/InstancesAmountSelect';

function App() {
  const [instancesAmount, setInstancesAmount] = useState(1);

  return (
    <>
      <Header />

      <main className="pt-12">
        <InstancesAmountSelect setValue={setInstancesAmount} />

        <section className="flex flex-wrap gap-10 justify-center">
          {[...Array(instancesAmount).keys()].map((instance) => (
            <DatePicker key={instance} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
