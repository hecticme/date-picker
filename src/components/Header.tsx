// Components
import ThemeButton from './ThemeButton';
import NavLinks from '@components/NavLinks';
// Utils
import useIntersectionObserver from '@utils/useIntersectionObserver';

const Header = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    rootMargin: '30px',
  });

  return (
    <>
      {/* Empty div for intersection observer */}
      <div ref={ref}></div>
      <header
        className={`sticky top-0 z-10 transition-colors duration-300 ${
          isIntersecting === false &&
          'bg-gray-900/80 before:backdrop-blur-sm before:absolute before:inset-0 before:-z-10 text-gray-100'
        }`}
      >
        <div
          className={`flex justify-between py-2 items-center max-w-[90rem] md:px-4 px-2 mx-auto`}
        >
          <section className="flex gap-2 items-center">
            <h1
              className={`font-bold text-2xl ${
                isIntersecting === false && 'text-gray-100'
              }`}
            >
              Epoch Date Picker
            </h1>

            <ThemeButton />
          </section>

          <NavLinks />
        </div>
      </header>
    </>
  );
};

export default Header;
