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
      className={`flex items-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:after:bg-gray-700 bg-gray-700 text-gray-100 hover:bg-gray-500 transition-colors p-1 after:bg-gray-700 after:absolute relative after:text-gray-100 after:opacity-0 rounded-sm after:transition-[opacity,left] after:text-sm after:px-2 after:py-1 after:-translate-x-1 after:content-['Copied!'] ${
        isHidden ? 'after:left-[110%]' : 'after:opacity-100 after:left-[130%]'
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
