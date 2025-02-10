// components/Skills.jsx
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiTool, FiAward,FiBookOpen } from 'react-icons/fi';

const skillsData = [
  {
    category: 'Front-End',
    icon: <FiCode />,
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Nginx','IBM WebSphere'],
    color: '#6c5ce7'
  },
  {
    category: 'Back-End',
    icon: <FiDatabase />,
    items: ['Java', 'SpringMVC','Spring Boot', 'Spring Batch','Microservices','SOA','REST','SOAP','MySQL','Redis','DB2','Kafka'],
    color: '#00b894'
  },
  {
    category: 'DevOps',
    icon: <FiCloud />,
    items: ['AWS', 'CI/CD', 'Python', 'Bash Shell','Git','Jenkins','Control-M'],
    color: '#0984e3'
  },
  {
    category: 'Project Management',
    icon: <FiTool />,
    items: ['Git','Agile','SDLC','Confluence'],
    color: '#d63031'
  },
  {
    category: 'Certifications',
    icon: <FiAward />,
    items: ['AWS Certified Developer','Professional Scrum Master'],
    color: '#31d6d6'
  },
  {
    category: 'Misc',
    icon: <FiBookOpen />,
    items: ['Data Analysis','Data Modelling','Python','R'],
    color: '#2d3436'
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="skills-section">
      <motion.div 
        className="content-wrapper"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="section-header">
          <h2>Technical Arsenal</h2>
          <p className="section-subtitle">⚙️ Modern Application Development Expertise</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card-header" style={{ backgroundColor: skill.color }}>
                {skill.icon}
                <h3>{skill.category}</h3>
              </div>
              <ul className="skill-items">
                {skill.items.map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}