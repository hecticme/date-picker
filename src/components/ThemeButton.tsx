import { useState, useEffect, useRef } from 'react';
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
  const [open, setOpen] = useState(false);

  const btnRef = useRef(null);

  useClickOutside(btnRef, () => {
    setOpen(false);
  });

  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
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
  }, [theme]);

  const handleChangeTheme = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    dispatch(changeTheme(e.currentTarget.value));
  };

  return (
    <div className="relative" ref={btnRef}>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="rounded hover:bg-gray-100 bg-gray-200 transition-colors px-2 py-1 flex gap-2 justify-between items-center"
      >
        Theme
        {themeOptions.find((element) => element.value === theme)?.icon}
      </button>

      <ul
        className={`${
          open ? 'block' : 'hidden'
        } absolute top-[115%] flex flex-col gap-1 p-1 bg-gray-100 rounded shadow-lg`}
      >
        {themeOptions.map((themeOption, index) => {
          return (
            <li key={index}>
              <button
                className={`px-2 py-1 w-full hover:bg-gray-200 transition-colors rounded text-left flex gap-2 justify-between items-center ${
                  themeOption.value === theme ? 'bg-gray-300' : ''
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
