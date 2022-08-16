import projects from "../../../public/data/projects";
import ProjectCard from "../home/projects/project-card";

const MainProject = ({ overwriteProjects }) => {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  return (
    <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-3'>
      {projectsList.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
};

export default MainProject;
