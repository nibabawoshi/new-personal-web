// components/Hero.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Chatbox from "./MyChatbox";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <section className="hero">
      <div className="content-wrapper">
        {/* 社交链接 */}
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a href="https://github.com/nibabawoshi" target="_blank" rel="noopener noreferrer">
            <FiGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/wenkang1" target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={24} />
          </a>
          <a href="mailto:wenkang6224@gmail.com">
            <FiMail size={24} />
          </a>
        </motion.div>

        {/* 主要内容 */}
        <div className="main-content">
          <motion.div
            className="text-content"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.h6 variants={textVariants}>Full-Stack Developer</motion.h6>
            <motion.h1 variants={textVariants}>
                Craft Digital Experiences
              <span className="highlight">创造数字体验</span>
            </motion.h1>
            <motion.p variants={textVariants}>
            Full-Stack Developer Specializing in Modern Enterprise Solutions | Driving Digital Transformation Through Code Innovation
            </motion.p>
          </motion.div>
            <Chatbox />
        </div>

      </div>
    </section>
  );
}