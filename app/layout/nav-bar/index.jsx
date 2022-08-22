import Link from "next/link";
import { useRouter } from "next/router";
import { routesName } from "../../../public/data/global";

const AppNavbar = () => {
  const router = useRouter();
  const handleSlash = (argu) => {
    let route = "";
    if (argu.split("/")[1] === "") {
      route = "home";
    } else route = argu.split("/")[1];
    return route;
  };

  return (
    <nav className='flex items-center justify-between'>
      <li className='cursor-pointer list-none text-lg font-bold'>
        <Link href='/'>
          <span className='flex items-center text-xl font-black'>
            <img
              className='App-logo mr-2 transform transition-transform duration-500 hover:scale-75'
              src='/images/react-logo.png'
              width='60'
            />
            {/* {"TechnoStates".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className='hover:text-fun-pink click:goodbyeLetterAnim transition-all duration-500 hover:-mt-2 hover:duration-100'
                >
                  {letter}
                </span>
              );
            })} */}
          </span>
        </Link>
      </li>
      <ul className='flex items-center space-x-10'>
        {routesName.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none capitalize text-black ${
                handleSlash(router.pathname) === item.title
                  ? "opacity-100"
                  : "opacity-40 transition-opacity hover:opacity-100"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AppNavbar;
