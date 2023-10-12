import ThemeButton from './ThemeButton';

const Header = () => {
  return (
    <header className="flex justify-between py-2 items-center">
      <section className="flex gap-5 items-center">
        <h1 className="font-bold text-2xl">Epoch Date Picker</h1>

        <ThemeButton />
      </section>

      <nav>
        <ul className="flex gap-1 items-center">
          <li>hey</li>
          <li>there</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
