import { FaCss3, FaHtml5,FaNodeJs, FaReact, FaNpm, FaJs } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Instanote from "../Assets/instanote.png";
import Chisco from "../Assets/Chisco.png";
import Dabbl from "../Assets/Dabbl.png";
import Justfones from "../Assets/Justfones.png"

// All available projects to be displayed using map.
const projects = [
  {
    id: 0,
    image: Chisco,
    name: "Chisco",
    link: "https://www.chiscotransport.com.ng/",
    description: "Chisco Transport Group of Company",
    tools: [
      <FaHtml5 />," ", <FaCss3 />," ",<FaReact />," ",<FaNodeJs />, " ", <FaNpm/>, " ",
      <FaJs/>
    ],
  },
  {
    id: 1,
    image: Dabbl,
    name: "Foshan Dabbl",
    link: "https://www.dabbl.de/",
    description:
      "Suppliers of Shower Cubicles and Enclosures.",
    tools: [<FaHtml5 />, " ", <FaCss3 />," ", <FaJs/> ],
  },
  {
    id: 2,
    image: Instanote,
    name: "InstaNote",
    link: "https://instanote.onrender.com/",
    description:
      "Instant note app that helps you write and save your notes.",
    tools: [
      <FaHtml5 />," ", <FaCss3 />," ",<FaReact />," ",<FaNodeJs />, " ", <FaNpm/>, " ",
      <FaJs/>
      
      
    ],
  },
  {
    id: 3,
    image: Justfones,
    name: "Just Fones",
    link: "https://www.justfones.ng/",
    description:
      "E-Commerce store for elctronics and gadgets.",
    tools: [
      <FaHtml5 />,
      " ",
      <FaCss3 />, " ", <FaJs/>
      
    ],
  },
];

function Project() {
  return (
    <div id="project" className="container">
      <div className="project">
        <h3 className="project-title">RECENT PROJECTS</h3>

        {/* maps out the projects  */}
        <div className="flex-project">
          {projects
            ? projects.map((project, idx) => {
                return (
                  <div className="sub-project" key={idx}>
                    <div className="project-pic">
                      <Link to={project.link} target="_blank">
                        <img
                          src={project.image}
                          alt="Bede Ogbonna's projects"
                        />
                        <div className="overlay">
                          <p className="overlay-item">
                            <MdOpenInNew />
                            <span>{project.name}</span>
                          </p>
                        </div>
                      </Link>
                    </div>

                    <p className="project-desc">{project.description}</p>
                    <p className="tools">{project.tools}</p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Project;
