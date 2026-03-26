import { useState } from 'react'
import './Contact.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_mp4kqgm',
    NOTIFICATION_TEMPLATE_ID: 'template_mu04xkd',
    AUTO_REPLY_TEMPLATE_ID: 'template_ic8t427',
    PUBLIC_KEY: 'WmRWLRsLvo1VubDX1'
  }

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/Tan-yaaaa",
      color: "#FFFFFF"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/tanya-singh-chauhan/",
      color: "#0A66C2"
    },
    {
      icon: <SiLeetcode />,
      name: "LeetCode",
      link: "https://leetcode.com/u/tanya_singh_chauhan/",
      color: "#FFA116"
    }
  ]

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email Address",
      value: "sakshisinghchauhan01@gmail.com",
      link: "mailto:sakshisinghchauhan01@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "India",
      link: null
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')
    setErrorMessage('')

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('Please fill in all fields')
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      }

      console.log('Attempting to send emails...', templateParams)

      // Send notification email
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.NOTIFICATION_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      // Send auto-reply email
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('Full EmailJS Error:', error)
      setErrorMessage(`Failed to send message. Error: ${error.text || 'Please try again later.'}`)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">
        {/* Left Side */}
        <div className="contact-left">
          <div className="contact-content-left">
            <div className="contact-header">
              <h1 className="contact-title">
                <span>Let's</span>
                <span className="gradient-text">Connect</span>
              </h1>
              <p className="contact-subtitle">
                Ready to bring your ideas to life? I'm always open to discussing 
                innovative projects, creative ideas, and opportunities to be part of your vision.
              </p>
            </div>

            <div className="contact-info-section">
              <div className="section-header">
                <h3 className="info-title">
                  Direct Contact
                </h3>
              </div>
              
              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-detail">
                    <div className="detail-icon" style={{ color: '#6366f1' }}>
                      {item.icon}
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} className="detail-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="detail-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Section Moved to Left Side */}
            <div className="social-section-left">
              <h4 className="social-title-left">
                Follow My Journey
              </h4>
              <p className="social-subtitle-left">Let's connect and build amazing things together</p>
              <div className="social-icons-left">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="social-icon-left"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form Only */}
        <div className="contact-right">
          <div className="contact-content-right">
            <div className="form-container">
              <div className="form-header">
                <h3 className="form-title">
                  Send Me a Message
                </h3>
                <p className="form-subtitle">
                  Let's discuss how we can create something amazing together. 
                  I'll get back to you within 24 hours.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your Email Address"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Project Subject or Inquiry"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="form-textarea"
                    placeholder="Tell me about your project, ideas, or how we can collaborate..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-status success">
                    <FaCheck className="status-icon" />
                    <div className="status-content">
                      <strong>Message Sent Successfully</strong>
                      <p>Thank you for reaching out! I've received your message and will get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-status error">
                    <FaTimes className="status-icon" />
                    <div className="status-content">
                      <strong>Something Went Wrong</strong>
                      <p>{errorMessage || 'Please try again or contact me directly at sakshisinghchauhan01@gmail.com'}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Contact