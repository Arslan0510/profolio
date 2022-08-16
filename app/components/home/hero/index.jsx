import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div
        className='heroElem z-1 relative m-auto flex w-full flex-col items-center justify-center py-20 text-center'
        style={{ maxWidth: "1200px" }}
      >
        <p className='mb-5 flex cursor-default text-xl '>
          Hey, I'm
          <span className='ml-1 flex items-center text-xl font-black'>
            {"ArslanAli".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className='click:goodbyeLetterAnim transition-all duration-500 hover:-mt-2 hover:text-fun-pink hover:duration-100'
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </p>

        <h1 className='heroTitle heroShinyBg relative mb-10  inline-block w-auto max-w-2xl text-5xl font-bold tracking-tighter md:text-6xl lg:max-w-4xl lg:text-7xl'>
          I enjoy <span className='heroShiny1 text-fun-pink'>building</span> and{" "}
          <span className='heroShiny2 text-fun-pink'>designing</span> for the web.
        </h1>
        <ScrollLink activeClass='active' to='learnmore' spy={true} offset={-30} smooth={true} duration={500}>
          <div className='cursor-pointer whitespace-nowrap rounded-full border-2 border-black px-10 py-4 text-xl font-bold text-black transition-colors hover:border-fun-pink hover:bg-black hover:text-white'>
            Tell me more
          </div>
        </ScrollLink>
      </div>
    </>
  );
};

export default Hero;
