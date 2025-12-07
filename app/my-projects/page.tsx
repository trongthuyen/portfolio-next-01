import { Projects } from "@/(lib)/constants";
import ProjectCard from "@/components/ProjectCard";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: `url(/Mountains.jpg)` }}
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[90%] max-h-[80%] overflow-auto no-scrollbar">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.src}
            title={project.title}
            text={project.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
