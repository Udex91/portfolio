import { SiExpress, SiJavascript, SiMongodb, SiPostman } from "react-icons/si";
import { FaCss3, FaHtml5, FaLess, FaNodeJs, FaReact } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Techblog from "../Assets/techblog.png";
import Helpdesk from "../Assets/helpdesk.png";
import Instanote from "../Assets/instanote.png";
import Sicalculator from "../Assets/sicalculator.png";

// All available projects to be displayed using map.
const projects = [
  {
    image: Techblog,
    name: "TechBlog",
    link: "https://techblog-xaeg.onrender.com/",
    description: "An awesome blog app that enables you to blog on the go!",
    tools: [
      <FaCss3 />,
      " ",
      <FaNodeJs />,
      " ",
      <SiExpress />,
      " ",
      <SiMongodb />,
    ],
  },
  {
    image: Helpdesk,
    name: "Studenthelpdesk",
    link: "https://studentshelpdesk.netlify.app/",
    description:
      "Help Desk application that helps students get information from their school or solve issues.",
    tools: [<FaHtml5 />, " ", <FaCss3 />, " ", <SiJavascript />],
  },
  {
    image: Instanote,
    name: "InstaNote",
    link: "https://instanote.onrender.com/",
    description:
      "Instant note app that helps you write and store your notes in one place.",
    tools: [
      <FaHtml5 />,
      " ",
      <FaCss3 />,
      " ",
      <SiJavascript />,
      " ",
      <FaReact />,
      " ",
      <FaNodeJs />,
      " ",
      <SiExpress />,
      " ",
      <SiMongodb />,
      " ",
      <SiPostman />,
      " ",
    ],
  },
  {
    image: Sicalculator,
    name: "SICalculator",
    link: "https://sicsolver.netlify.app/",
    description:
      "Simple interest calculator that helps in calculating the interest, principal, rate, and time of money.",
    tools: [
      <FaHtml5 />,
      " ",
      <FaCss3 />,
      " ",
      <FaLess />,
      " ",
      <SiJavascript />,
    ],
  },
];

function Project() {
  return (
    <div className="container">
      <div id="project" className="project">
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
                          alt="chukwu godgive project sample"
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
