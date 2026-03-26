import { useState, useEffect } from "react";
import { FaDownload, FaCertificate, FaCheck, FaTimes } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  const resumeDownloadUrl = '/tanya resume.pdf';
  const resumeViewUrl = 'https://drive.google.com/file/d/1E8LByQkYFzMe4KrQtiS_vHjo8GMm9i70/view?usp=share_link';

  const codeLines = [
    "// Software Developer",
    "const expertise = {",
    "  frontend: ['React', 'JavaScript', 'CSS3'],",
    "  backend: ['Node.js', 'Python', 'Express'],",
    "  databases: ['MongoDB', 'PostgreSQL'],",
    "  tools: ['Git', 'Docker', 'AWS']",
    "};",
    "",
    "const achievements = {",
    "  leetcode: '100+ Problems',",
    "  streak: '25+ Days',",
    "  projects: 'Modern Web Apps'",
    "};",
    "",
    "function create() {",
    "  return 'Building innovative solutions';",
    "}",
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const currentText = codeLines[currentLine];
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + "\n");
          setCurrentLine((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentLine(0);
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, charIndex]);

  const simulateDownloadProgress = () => {
    setIsDownloading(true);
    setDownloadComplete(false);
    setDownloadError(false);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 70 ? Math.random() * 15 + 5 : Math.random() * 5 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return interval;
  };

  const handleResumeAction = async () => {
    window.open(resumeViewUrl, "_blank", "noopener,noreferrer");

    const progressInterval = simulateDownloadProgress();

    try {
      const link = document.createElement("a");
      link.href = resumeDownloadUrl;
      link.download = "Tanya_Singh_Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        clearInterval(progressInterval);
        setDownloadProgress(100);
        setDownloadComplete(true);
        setIsDownloading(false);

        setTimeout(() => {
          setDownloadComplete(false);
          setDownloadProgress(0);
        }, 3000);
      }, 2500);
    } catch (error) {
      clearInterval(progressInterval);
      setDownloadError(true);
      setIsDownloading(false);

      setTimeout(() => {
        setDownloadError(false);
        setDownloadProgress(0);
      }, 3000);
    }
  };

  const getButtonContent = () => {
    if (downloadComplete) {
      return (
        <>
          <FaCheck className="btn-icon" />
          Download Complete!
        </>
      );
    }
    if (downloadError) {
      return (
        <>
          <FaTimes className="btn-icon" />
          Download Failed - Try Again
        </>
      );
    }
    if (isDownloading) {
      return (
        <>
          <div className="download-spinner"></div>
          Downloading... {Math.round(downloadProgress)}%
        </>
      );
    }
    return (
      <>
        <FaDownload className="btn-icon" />
        Download Resume
      </>
    );
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Designing <span className="gradient-text">Digital Experiences</span>
            </h1>
            <p className="hero-subtitle">
              Creative Developer & Technical Problem Solver
            </p>
            <p className="hero-description">
              Transforming complex challenges into elegant, scalable solutions
              through modern technology and innovative development approaches.
            </p>
            <div className="hero-actions-left">
              <a href="#certificates" className="btn btn-secondary">
                <FaCertificate className="btn-icon" />
                View Certificates
              </a>
              <button
                onClick={handleResumeAction}
                className={`btn btn-secondary download-btn ${
                  isDownloading ? "downloading" : ""
                } ${downloadComplete ? "complete" : ""} ${
                  downloadError ? "error" : ""
                }`}
                disabled={isDownloading}
              >
                {getButtonContent()}
              </button>
              {(isDownloading || downloadComplete) && (
                <div className="download-progress-container">
                  <div
                    className="download-progress-bar"
                    style={{ width: `${downloadProgress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>
          <div className="hero-right-section">
            <div className="code-window-container">
              <div className="code-window">
                <div className="code-header">
                  <div className="window-controls">
                    <div className="control close"></div>
                    <div className="control minimize"></div>
                    <div className="control maximize"></div>
                  </div>
                  <div className="file-name">developer.js</div>
                  <div className="code-language">JavaScript</div>
                </div>
                <div className="code-body">
                  <div className="line-numbers">
                    {Array.from({ length: 16 }, (_, i) => (
                      <div key={i} className="line-number">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <pre className="code-content">
                    <code>
                      {displayedText}
                      <span className="cursor">|</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;