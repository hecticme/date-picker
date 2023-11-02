import { useState, useEffect } from 'react';
import { ClipboardIcon } from '@heroicons/react/24/outline';

type ClipboardBtnProps = {
  content: NonNullable<unknown>;
};

export default function ClipboardBtn({ content }: ClipboardBtnProps) {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    let timeout: number;

    if (!isHidden) {
      timeout = setTimeout(() => {
        setIsHidden(true);
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  });

  const copyContent = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button
      className={`relative flex items-center rounded-sm bg-gray-700 p-1 text-gray-100 transition-colors after:absolute after:-translate-x-1 after:bg-gray-700 after:px-2 after:py-1 after:text-sm after:text-gray-100 after:opacity-0 after:transition-[opacity,left] after:content-['Copied!'] hover:bg-gray-500 dark:bg-gray-700 dark:after:bg-gray-700 dark:hover:bg-gray-600 ${
        isHidden ? 'after:left-[110%]' : 'after:left-[130%] after:opacity-100'
      }`}
      onClick={() => {
        setIsHidden(false);
        copyContent(String(content));
      }}
    >
      <ClipboardIcon className="h-5 w-5" />
    </button>
  );
}
