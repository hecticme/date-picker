import { useState } from 'react';
// Components
import Header from '@components/Header';
import DatePicker from '@components/DatePicker';
import InstancesAmountSelect from '@components/InstancesAmountSelect';

function App() {
  const [instancesAmount, setInstancesAmount] = useState(1);

  return (
    <>
      <Header />

      <main className="pt-12 max-w-[90rem] md:px-4 px-2 mx-auto">
        <InstancesAmountSelect setValue={setInstancesAmount} />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {[...Array(instancesAmount).keys()].map((instance) => (
            <DatePicker key={instance} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
