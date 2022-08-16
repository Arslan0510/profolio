import { skills } from "/public/data/skills";

function Skills() {
  return (
    <div className='relative flex flex-col justify-between md:flex-row'>
      <h2 className='relative mb-10 mr-0 w-full text-center text-3xl font-bold md:mr-10 md:mb-0 md:w-max md:max-w-lg md:text-left '>
        I got the experience.
        <br />
        Here is my toolbelt for success.
        {/* <img
          className='bottom-[-80px] left-[-50px] z-[-10] scale-[0.8] lg:bottom-[-50px] lg:left-[-35px] lg:scale-100'
          src='/images/skills/laptop.svg'
        />
        <img
          className='top-[140px] right-0 hidden scale-[0.8] md:block lg:top-[105px] lg:scale-100'
          src='/images/skills/coding.svg'
        />
        <img
          className='top-[200px] right-[50px]  hidden scale-[0.8] md:block lg:top-[170px] lg:right-[50px] lg:scale-100'
          src='/images/skills/youtube.svg'
        />
        <img
          className='top-[-15px] right-[-15px] scale-[0.8] lg:scale-100'
          src='/images/skills/fillStar.svg'
        /> */}
      </h2>
      <div className='md:mx-none relative mx-auto grid w-full max-w-lg grid-cols-3 place-content-center items-center gap-x-8 gap-y-12 sm:grid-cols-6 sm:gap-8 md:gap-12'>
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className='mx-auto flex w-10 flex-col items-center justify-center'
            >
              <img src={item.icon} style={item.style} />
              <p className='mt-3 text-xs font-bold text-fun-gray opacity-80'>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
