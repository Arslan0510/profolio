import Head from "next/head";
import AppFooter from "./app-footer";
import AppMiniNavbar from "./mini-nav-bar";
import AppNavbar from "./nav-bar";

const AppLayout = ({ children }) => {
  return (
    <div
      className='opening-box-animate-padding m-auto flex min-h-screen w-full flex-col items-center justify-center overflow-hidden md:overflow-visible'
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className='w-full flex-1 p-5 text-center'>
        <div className='z-100 hidden sm:block'>
          <AppNavbar currentPage='Home' />
        </div>
        <div className='z-100 -m-5 block sm:hidden'>
          <AppMiniNavbar />
        </div>
        {children}
      </main>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
