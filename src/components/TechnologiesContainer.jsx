import '../styles/components/technologiescontainer.sass'

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiBootstrap,
  DiSass,
  DiJqueryLogo,
  DiMysql, 
} from 'react-icons/di'

import {
  FaGit,
  FaVuejs, 
  FaFigma 
} from 'react-icons/fa'

import { SiRedux, SiTypescript, SiStyledcomponents   } from "react-icons/si";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
  { id: "jquery", name: "JQuery", icon: <DiJqueryLogo /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "redux", name: "Redux", icon: <SiRedux /> },
  { id: "typescript", name: "TypeScript", icon: <SiTypescript /> },
  { id: "vue", name: "Vue", icon: <FaVuejs /> },
  { id: "styled-components", name: "StyledComponents", icon: <SiStyledcomponents /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "git", name: "Git", icon: <FaGit /> },
  { id: "figma", name: "Figma", icon: <FaFigma /> },
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni, libero dolor</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


export default TechnologiesContainer