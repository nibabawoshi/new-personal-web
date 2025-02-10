// components/Projects.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const projectsData = [
  {
    title: 'Mutual Fund Distribution Platform',
    description: 'Led the development and maintenance of a customer-facing, large-scale fund brokerage system, serving over 4 million customers and managing assets exceeding 200 billion CAD.',
    tech: ['Java', 'Springboot', 'React',  'Microservices Architecture', 'Service-Oriented Architecture (SOA)', 'DB2', 'Redis','Git'],
    github: '#',
    demo: '#',
    image: '/project-blog.jpg'
  },
  {
    title: 'Personal Pension Wealth Management Project',
    description: 'Architected and developed RRSP-style mutual fund platform integrating 20+ asset managers via file exchange/Rest APIs, enforced regulator compliance through real-time contribution tracking, scaling AUM to CAD$5.2B within 12 months ',
    tech: ['Java', 'Springboot', 'SpringBatch', 'Bash Shell','Linux/Unix','Mysql','Restful API','Git'],
    github: '#',
    demo: '#',
    image: '/project-ecommerce.jpg'
  },
  {
    title: 'Middleware Replacement Project',
    description: 'Led a mission-critical legacy modernization initiative serving 4M+ users, replacing the IBM/Oracle stack with cloud-native solutions: migrated DB2 to MySQL Cluster, IBM MQ to Kafka Streams, and WebSphere to Nginx/Tomcat. Redesigned monolithic on-prem systems into 20+ Spring Cloud microservices on a cloud platform and integrated the application into a CI/CD pipeline for seamless deployment.',
    tech: ['Java', 'Mybatis', 'Kafka', 'Mysql','Linux/Unix','Nginx','Tomcat','Bash Shell','Git', 'Cloud Services'],
    github: '#',
    demo: '#',
    image: '/project-ecommerce.jpg'
  },
  {
    title: 'Personal Website With Ai Agent',
    description: 'A personal website with an interactive Ai-powered assistant. Yes, the one you are seeing right now. Feel Free to ask anything about this project to the ai agent',
    tech: ['React', 'Linux/Unix','LLM','Prompt','Cloud Services'],
    github: '#',
    demo: '#',
    image: '/project-ecommerce.jpg'
  },
  {
    title: 'Go Toy Projects',
    description: 'Some Golang projects for personal learning include: implementing a simple producer-consumer model/ a basic cloud service feature , services registration and watch/ developing a memory cache system',
    tech: ['Golang', 'ETCD','Cloud Services','MQ'],
    github: 'https://github.com/nibabawoshi/producer-consumer',
    demo: '#',
    image: '/project-ecommerce.jpg'
  },
  {
    title: 'ChatGPT-Clone',
    description: 'A toy project cloning ChatGPT, featuring a cloud-based front end and integration with the OpenAI API',
    tech: ['React', 'JavaScript','CSS', 'HTML','Node.js'],
    github: 'https://github.com/Wenkang1/react-chatgpt-clone?tab=readme-ov-file',
    demo: '#',
    image: '/project-ecommerce.jpg'
  },
  // 添加更多项目...
];

export default function Projects() {
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
    <section id="projects" className="projects-section">
      <motion.div 
        className="content-wrapper"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="section-header">
          <h2>Portfolio Highlights</h2>
          <p className="section-subtitle">🚀 Code. Build. Deliver.</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.article 
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card-header">
                <FiFolder className="folder-icon" />
                <div className="project-links">
                  <a href={project.github} aria-label="GitHub仓库">
                    <FiGithub />
                  </a>
                  <a href={project.demo} aria-label="演示地址">
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tech-list">
                  {project.tech.map((tech, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}