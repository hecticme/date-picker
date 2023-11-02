// Icons
import GithubIcon from '@assets/github-mark.svg?react';

const NavLinks = () => {
  return (
    <nav>
      <ul className="flex items-center gap-1">
        <li className="rounded-full p-1 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-100">
          <a
            href="https://github.com/hecticme/date-picker"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon
              width={18}
              className="transition-transform hover:scale-110"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
