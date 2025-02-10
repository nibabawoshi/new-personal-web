// components/About.jsx
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiAward } from 'react-icons/fi';

export default function About() {
  const experiences = [
    {
        year: "2021-2024",
        title: "Programmer Analyst",
        company: "Bank of Communications",
        description: "Participated in every phase of the Software Development Life Cycle (SDLC) for a customer-facing, large-scale fund brokerage system supporting over 4 million customers and managing assets exceeding 200 billion CAD.\n Designed and implemented new full-stack features using React and Java Spring Framework, consistently delivering high-quality results on schedule.\n Developed RESTful APIs within a microservices architecture and SOAP APIs leveraging Service-Oriented Architecture (SOA), deployed on cloud infrastructure to support high transaction volumes."
    },
    {
        year: "2018-2020",
        title: "Master of Data Science",
        company: "The University of Melbourne",
        description: "Computer Science + Statitics. Research: Structural analysis of granular materials through the combined lens of network science and topology. structure simulation and visualization using Python and R"
    },
    {
        year: "2017-2018",
        title: "Account Manager",
        company: "MKMK Risk Management",
        description: "Maintained a strong focus on customer relationship management by providing expert general insurance consultancy to existing clients, achieving an nearly 100% satisfaction rate."
      },
    {
      year: "2012-2016",
      title: "Bachelor's Degree",
      company: "University of Alberta",
      description: "Petroleum Engineering"
    },
  ];

  const skills = [
    { name: "Back-End Development", level: 95, icon: <FiCode /> },
    { name: "DevOps", level: 85, icon: <FiAward /> },
    { name: "Front-End Development", level: 75, icon: <FiSmartphone /> }
    
  ];

  return (
    <section className="about-section">
      <motion.div 
        className="content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* 标题部分 */}
        <div className="section-header">
          <h2>About Me</h2>
          <p className="section-subtitle">👨‍💻 Innovating with passion, engineering impact through code</p>
        </div>

        {/* 主要内容容器 */}
        <div className="about-content">
          {/* 个人介绍文本 */}
          <motion.div 
            className="bio-text"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h3>Full-Stack Developer & Programmer Analyst</h3>
            <p>
            To leverage my expertise in full-stack development, software architecture, and data analysis to build
            innovative and scalable IT solutions across various industry. I am passionate about driving digital
            transformation and contributing to customer-centric applications that make a meaningful impact.
            </p>
            <p>
              Tech Stack：Java，Spring FrameWork, React, AWS,
              Microservices design and implementations, Operations,
              I prefer I BUILD, I MAINTAIN.
            </p>
          </motion.div>

          {/* 技能进度条 */}
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="skill-header">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* 时间轴经历 */}
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h4>{exp.title}</h4>
                  <p className="company">{exp.company}</p>
                  {exp.description.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}