// Icons
import GithubIcon from '@assets/github-mark.svg?react';

const NavLinks = () => {
  return (
    <nav>
      <ul className="flex gap-1 items-center">
        <li className="dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-1 transition-colors hover:text-gray-700 dark:hover:text-gray-100">
          <a
            href="https://github.com/hecticme/date-picker"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon
              width={18}
              className="hover:scale-110 transition-transform"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
