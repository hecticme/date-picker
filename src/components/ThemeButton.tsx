import { useState } from 'react';
import { useAppDispatch } from '@store/hooks';

const themeOptions = [
  {
    value: 'default',
    label: 'System',
  },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

export default function ThemeButton() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleChangeTheme = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log(e);
  };

  return (
    <div className="relative" onBlur={() => {}}>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="rounded hover:bg-slate-200 px-2 py-1"
      >
        Theme
      </button>

      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute flex flex-col gap-1 p-1`}
      >
        {themeOptions.map((themeOption, index) => {
          return (
            <button
              key={index}
              className="px-2 py-1 hover:bg-slate-200 rounded text-left"
              data-value={themeOption.value}
              onClick={handleChangeTheme}
            >
              {themeOption.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
