import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div
      className='projects-center md:projects-start mx-auto flex max-w-sm flex-col md:justify-center'
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target='_blank'
        className={`relative w-full rounded-xl border border-fun-gray p-2 transition hover:-translate-y-2 hover:border-fun-pink`}
      >
        <img className='w-full rounded-md transition hover:opacity-75' src={project.img} />
      </a>
      <div className='mt-5 w-full'>
        <div className='projects-center flex justify-between'>
          <h3 className='text-lg font-bold'>{project.title}</h3>
          <div className='space-x-2'>
            {project.link && (
              <a href={project.link} target='_blank' rel='noreferrer'>
                <Image src='/images/icons/external-link.svg' width={16} height={16} alt='Link Icon' />
              </a>
            )}
            {project.github && (
              <a href={project.github} target='_blank' rel='noreferrer'>
                <Image src='/images/icons/github.svg' width={16} height={16} alt='Github Icon' />
              </a>
            )}
          </div>
        </div>
        <p className='text-left text-sm text-fun-gray'>{project.desc}</p>
        <ul className='mt-2 -ml-2 flex list-none flex-wrap items-center'>
          {project.tags.map((tag) => {
            return (
              <li key={tag}>
                <div className='m-1 cursor-pointer rounded-lg bg-fun-pink py-1 px-2 text-sm text-white hover:opacity-75'>
                  {tag}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
