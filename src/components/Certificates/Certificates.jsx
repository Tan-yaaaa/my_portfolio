import { FaExternalLinkAlt, FaDownload, FaAward } from "react-icons/fa";
import "./Certificates.css";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: " Cloud Foundation and Architecting on AWS ",
      issuer: "Amazon Web Services (AWS)",
      date: "July 2025",
      description: "A hands-on course that teaches how to design, deploy, and optimize scalable, secure, and cost-effective cloud solutions using AWS services.",
       credentialId: "https://www.credly.com/go/8lBGn9lZ",
      link: "https://drive.google.com/file/d/1vFWCvaNTsU-tJJBzPAWjwnA6W60WPsL4/view?usp=share_link",
      image: "https://www.encodedots.com/blog/wp-content/uploads/2025/02/AWS-Cloud-Computing.png"
    },
    {
      id: 2,
      title: "Artificial Intelligence in Industrial and Management",
      issuer: "NPTEL",
      date: "October 2025",
      description: "Earned Elite Certificate in Artificial Intelligence in Industrial and Management Engineering with a score of 73.25/100.",
      credentialId: "NPTEL-AI-IM-2025-002",
      image: "https://imagedelivery.net/slEV02cu56sqP7CUSp-2KQ/fb0e71c6-ec27-44ab-ae25-a230ab1b6300/550x580"
    },
    {
      id: 3,
      title: "Certification of Android Training ",
      issuer: "Externship",
      date: "February 2025",
      description: "Gained practical experience in building Android applications using Java/Kotlin, Android Studio, and core SDK components.",
      credentialId: "EXTERN-AND-2025-003",
      link: "https://drive.google.com/file/d/1tfHqPmuY93AxwbARBecmwATMXvSaEuyR/view?usp=share_link",
      image: "https://lh3.googleusercontent.com/proxy/HohyO3ucdZCdfLZjFjxsq-UgqpqgoXCizzdsIPIWmM6R5J3se9vAR6FPVqOf3Hiak6UR7ykJ305JaiZ_HXZocbY7c35oRwgmtTSYbt6Y"
    },
    {
      id: 4,
      title: "Certifcation in Python Essentials",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      description: "Foundational AWS cloud services and architectural best practices",
      credentialId: "https://www.credly.com/badges/1270f337-5c2b-4d09-be94-f660c5b04cc5",
      link: "https://www.credly.com/badges/1270f337-5c2b-4d09-be94-f660c5b04cc5",
      image: "https://www.echeverrimontes.com/hubfs/python%20en%20arquitectura.jpg"
    },
   /* {
      id: 5,
      title: "Python for Data Science",
      issuer: "Google",
      date: "February 2024",
      description: "Data analysis, visualization, and machine learning with Python",
      credentialId: "GOOGLE-PYTHON-2024-005",
      link: "https://grow.google/certificates/data-analytics/",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "UI/UX Design Specialization",
      issuer: "California Institute of the Arts",
      date: "January 2024",
      description: "User research, wireframing, prototyping, and usability testing",
      credentialId: "CALARTS-UIUX-2024-006",
      link: "https://www.coursera.org/specializations/ui-ux-design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }*/
  ];

  const handleViewCertificate = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Certifications & Achievements
          </h2>
          <p className="section-subtitle">
            Professional certifications and learning achievements that validate my technical expertise
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="certificate-image"
                  loading="lazy"
                />
                <div className="certificate-overlay">
                  <div className="issuer-badge">{cert.issuer}</div>
                </div>
              </div>
              
              <div className="certificate-content">
                <div className="certificate-header">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <span className="certificate-date">{cert.date}</span>
                </div>
                
                <p className="certificate-description">{cert.description}</p>
                
                <div className="certificate-meta">
                  <div className="credential-id">
                    <span className="meta-label">Credential ID:</span>
                    <code className="id-code">{cert.credentialId}</code>
                  </div>
                </div>
                
                <div className="certificate-actions">
                  <button 
                    onClick={() => handleViewCertificate(cert.link)}
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt className="btn-icon" />
                    View Credential
                  </button>
                  <button className="btn btn-secondary">
                    <FaDownload className="btn-icon" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Certificates;