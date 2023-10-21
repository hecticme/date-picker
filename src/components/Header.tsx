// Components
import ThemeButton from './ThemeButton';
// Utils
import useIntersectionObserver from '@utils/useIntersectionObserver';

const Header = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <>
      {/* Empty div for intersection observer */}
      <div ref={ref}></div>
      <header
        className={`sticky top-0 z-10 transition-colors duration-300 ${
          isIntersecting
            ? 'bg-gray-900/80 before:backdrop-blur-sm before:absolute before:inset-0 before:-z-10'
            : ''
        }`}
      >
        <div
          className={`flex justify-between py-2 items-center max-w-[90rem] md:px-4 px-2 mx-auto`}
        >
          <section className="flex gap-5 items-center">
            <h1
              className={`font-bold text-2xl ${
                isIntersecting ? 'text-gray-100' : ''
              }`}
            >
              Epoch Date Picker
            </h1>

            <ThemeButton />
          </section>

          <nav>
            <ul className="flex gap-1 items-center">
              <li>hey</li>
              <li>there</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
