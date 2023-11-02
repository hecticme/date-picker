// Redux
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { changeTheme } from '@store/themeSlice';
// Icons
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
// Utils
import useClickOutside from '@utils/useClickOutside';

const iconClassName = 'h-5 w-5';

const themeOptions = [
  {
    value: 'system',
    label: 'System',
    icon: <ComputerDesktopIcon className={iconClassName} />,
  },
  {
    value: 'light',
    label: 'Light',
    icon: <SunIcon className={iconClassName} />,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: <MoonIcon className={iconClassName} />,
  },
];

export default function ThemeButton() {
  const { ref, open, setOpen } = useClickOutside();

  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  switch (theme) {
    case 'dark': {
      document.body.classList.add('dark');
      break;
    }
    case 'light': {
      document.body.classList.remove('dark');
      break;
    }
    default: {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }

  const handleChangeTheme = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    dispatch(changeTheme(e.currentTarget.value));
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="flex items-center justify-between gap-2 rounded bg-gray-200 px-2 py-1 text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
      >
        Theme
        {themeOptions.find((element) => element.value === theme)?.icon}
      </button>

      <ul
        aria-hidden={open ? 'false' : 'true'}
        className={`${
          open ? 'block' : 'hidden'
        } absolute top-[115%] flex flex-col gap-1 rounded bg-gray-100 p-1 shadow-lg dark:bg-gray-700`}
      >
        {themeOptions.map((themeOption, index) => {
          return (
            <li key={index}>
              <button
                className={`flex w-full items-center justify-between gap-2 rounded px-2 py-1 text-left text-gray-900 transition-colors hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 ${
                  themeOption.value === theme
                    ? 'pointer-events-none bg-gray-300 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-900'
                    : ''
                }`}
                value={themeOption.value}
                onClick={handleChangeTheme}
              >
                {themeOption.label}
                {themeOption.icon}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
