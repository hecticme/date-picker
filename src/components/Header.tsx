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
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          isIntersecting === false &&
          'bg-gray-900/80 text-gray-100 before:absolute before:inset-0 before:-z-10 before:backdrop-blur-sm'
        }`}
      >
        <div
          className={`mx-auto flex max-w-[90rem] items-center justify-between px-2 py-2 md:px-4`}
        >
          <section className="flex items-center gap-2">
            <h1
              className={`text-2xl font-bold ${
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
