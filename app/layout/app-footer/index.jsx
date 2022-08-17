import Link from "next/link";
import { footerRoutes } from "../../../public/data/global";

const AppFooter = () => {
  return (
    <footer className='z-5 bg-bg flex w-screen flex-col border-t border-fun-pink-darker px-5 py-10'>
      <div className='m-auto grid w-full max-w-4xl grid-cols-1 items-start justify-between sm:grid-cols-3'>
        {footerRoutes.columns.map((item, index) => {
          return (
            <div key={index} className='mb-5 text-left sm:mb-0'>
              <h4 className='text-sm font-bold uppercase text-fun-gray'>{item.title}</h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className='my-4'>
                      {item.leavesWebsite ? (
                        <a href={item.link} target='_blank'>
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className='text-left'>
          <h4 className='text-sm font-bold uppercase text-fun-gray'>Support My Work</h4>
          <div className='mt-4 space-y-2'>
            {footerRoutes.support.buyMeACoffee !== "" && (
              <a href='#' target='_blank'>
                <img
                  src='/images/buy-me-a-coffee.svg'
                  className='mt-2 h-12 opacity-100 transition-opacity hover:opacity-80'
                />
              </a>
            )}
            {footerRoutes.support.payoneer !== "" && (
              <a href='#' target='_blank'>
                <img
                  src='/images/payoneer.svg'
                  className='mt-2 h-12 opacity-100 transition-opacity hover:opacity-80'
                />
              </a>
            )}
            <p className='mt-2 text-xs text-fun-gray'>{footerRoutes.support.message}</p>
          </div>
        </div>
      </div>
      {/* <div className='m-auto mt-8 w-full max-w-4xl border-t border-fun-pink-dark pt-8 text-center text-fun-gray sm:mt-4 sm:pt-4'>
        <div className='flex flex-col items-center justify-center '>
          <div className='inline-flex items-center text-xs font-bold uppercase tracking-widest'>
            Made with{" "}
            <div className='-mt-1 ml-3 inline-flex items-center space-x-2'>
              <span>
                <img
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                  width='26'
                  title='React'
                />
                <span className='sr-only'>React</span>
              </span>
              <span>
                <img
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
                  width='40'
                  title='NextJS'
                />
                <span className='sr-only'>NextJS</span>
              </span>
              <span>
                <img
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
                  width='26'
                  title='TailwindCSS'
                />
                <span className='sr-only'>TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className='mt-2 text-xs '>
            Made by{" "}
            <a href='mailto:contact@braydentw.io' className='font-medium text-fun-gray-light'>
              Arslan Ali
            </a>
            . All rights reserved.
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default AppFooter;
