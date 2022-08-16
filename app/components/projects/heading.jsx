const Heading = ({ tag }) => {
  return (
    <div className={`${tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"} relative w-full text-center`}>
      {tag ? (
        <>
          <h1 className='relative mx-auto mb-8 inline-block w-auto text-3xl sm:text-4xl'>
            Projects built with <b>{tag}</b>
            <img
              className='sqD absolute -top-6 -right-2 w-8 sm:-right-8 sm:-top-8 sm:w-10'
              src='/images/code.svg'
            />
          </h1>
        </>
      ) : (
        <h1 className='relative mx-auto mb-8 inline-block w-auto text-4xl sm:text-6xl'>
          Projects
          <img className='sqD absolute -top-8 -right-8 w-10' src='/images/code.svg' />
        </h1>
      )}
      {!tag && (
        <p className='m-auto max-w-3xl text-xl text-fun-gray sm:text-2xl'>
          I've built cool apps and websites using anything from HTML to React (and even PHP!). Here are some
          of my favorite projects over the course of my journey.
        </p>
      )}
    </div>
  );
};

export default Heading;
