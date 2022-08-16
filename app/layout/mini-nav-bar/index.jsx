import Link from "next/link";
import { useEffect, useState } from "react";
import useDelayedRender from "use-delayed-render";
import { routesName } from "../../../public/data/global";

const AppMiniNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(isMenuOpen, {
    enterDelay: 20,
    exitDelay: 300,
  });

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <nav>
      <div
        className={`flex w-full items-center justify-between ${isMenuRendered && "bg-[#000a1f]"} p-5`}
        style={{ zIndex: 101 }}
      >
        <li className='list-none text-lg font-bold'>
          <Link href='/'>
            <img className='mr-3' src='/images/react-logo.png' width='60' />
          </Link>
        </li>
        <button
          className='burger visible md:hidden'
          aria-label='Toggle menu'
          type='button'
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>
      {isMenuMounted && (
        <ul
          className={`menu absolute flex flex-col bg-[#000a1f]
            ${isMenuRendered && "menuRendered"}`}
        >
          {routesName.map((item, index) => {
            return (
              <li
                className='border-b border-gray-900 text-sm font-semibold text-gray-100'
                style={{ transitionDelay: `${150 + index * 25}ms` }}
              >
                <Link href={item.path}>
                  <a className='flex w-auto pb-4'>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};
function MenuIcon(props) {
  return (
    <svg
      className='absolute h-5 w-5 text-gray-100'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
    >
      <path
        d='M2.5 7.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 12.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className='absolute h-5 w-5 text-gray-100'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}
    >
      <path d='M18 6L6 18' />
      <path d='M6 6l12 12' />
    </svg>
  );
}

export default AppMiniNavbar;
