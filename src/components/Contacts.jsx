// components/Contact.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiMapPin, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Incorrect e-mail format';
    if (formData.message.length < 10) newErrors.message = 'Minimum 10 characters required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setStatus('loading');
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <h2>Contact me</h2>
          <p className="section-subtitle">🤝 Looking forward to collaborating with you</p>
        </div>

        <div className="contact-content">
          {/* 联系方式卡片 */}
          <motion.div 
            className="contact-info"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className="info-card">
              <FiMapPin className="info-icon" />
              <h3>Address</h3>
              <p>3438 Sawmill Cres, Vancouver, Canada</p>
            </div>
            
            <div className="info-card">
              <FiMail className="info-icon" />
              <h3>E-mail</h3>
              <a href="mailto:contact@example.com">wenkang6224@gmail.com</a>
            </div>

            <div className="info-card">
              <FiPhone className="info-icon" />
              <h3>Phone Number</h3>
              <a href="tel:+8613812345678">+1 778 892 5215</a>
            </div>

            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener">
                <FiLinkedin />
              </a>
            </div>
          </motion.div>

          {/* 联系表单 */}
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className="form-group">
              <FiUser className="input-icon" />
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <FiMail className="input-icon" />
              <input
                type="email"
                placeholder="Your E-mail Here"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <FiMessageSquare className="input-icon" />
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={errors.message ? 'error' : ''}
                rows="5"
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send a message'}
              <FiSend className="button-icon" />
            </motion.button>

            {status === 'success' && (
              <div className="success-message">✓ Message sent successfully</div>
            )}
            {status === 'error' && (
              <div className="error-message">⚠️ Sending failed. Please try again later</div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}