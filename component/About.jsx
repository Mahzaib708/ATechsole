import React, { useEffect, useState, useRef } from 'react'
import './About.css'
import logo from '../assets/atechsole-new-logo.png'
import Footer from './Footer'

const About = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [isBlackAgain, setIsBlackAgain] = useState(false);
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const approachRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

      if (contentRef.current) {
        const contentRect = contentRef.current.getBoundingClientRect();

        if (contentRect.top <= window.innerHeight + 100) {
          setIsScrolledPast(true);
        } else {
          setIsScrolledPast(false);
        }
      }

      if (teamRef.current) {
        const teamRect = teamRef.current.getBoundingClientRect();
        if (teamRect.bottom <= 0) {
          setIsBlackAgain(true);
        } else {
          setIsBlackAgain(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBackgroundClass = () => {
    if (isBlackAgain) return 'black-bg';
    if (isScrolledPast) return 'white-bg';
    return 'black-bg';
  };

  return (
    <>
      <div className={`about-container ${getBackgroundClass()}`}>
        <div className="about-hero">
          <h1 className="about-title">ABOUT ATECHSOLE</h1>
          <p className="about-description">
            <b>12+ Years Experience</b><br /><br />
            ATechSole is a global platform dedicated to empowering businesses with cutting-edge technology solutions.
            Founded with the vision of bridging the gap between digital potential and market leadership,
            ATechSole serves as a transformative partner where innovation meets execution.
          </p>
          <div className="scroll-indicator">
            <span>scroll</span>
            <div className="scroll-line"></div>
          </div>
        </div>

        <div className="about-logo-section" ref={logoRef}>
          <img src={logo} alt="ATechSole Logo" className="about-logo" />
        </div>

        <div className="about-content" ref={contentRef}>
          <div className='content-row1'>
            <h1 className='content-header1'>OUR STORY</h1>
            <p>Founded in 2012, ATechSole began as a small team of passionate developers with a vision to transform businesses through technology.
              Over the past 12 years, we have grown into a leading technology solutions provider, serving clients across the globe.
              Our journey has been marked by continuous learning, adaptation to emerging technologies, and an unwavering commitment to client success.
              From our first web development project to implementing complex AI solutions, we have consistently pushed boundaries and delivered exceptional results.
              Today, ATechSole stands as a trusted partner for businesses seeking digital transformation.
              Our team of 50+ experts specializes in various domains, ensuring we can tackle any technological challenge our clients face.
            </p>
          </div>
          <div className="content-row">
            <div className="content-header">
              <span className="section-number">01</span>
              <h2>Our Mission</h2>
            </div>
            <div className="content-text">
              <p>To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.</p>
            </div>
          </div>

          {/* Mission Section - White Background (after transition) */}
          <div className="content-row">
            <div className="content-header">
              <span className="section-number">02</span>
              <h2>Our Vision</h2>
            </div>
            <div className="content-text">
              <p>To be the global leader in providing transformative technology solutions that shape the future of business and society.</p>
            </div>
          </div>

        
          <div className="content-row" ref={approachRef}>
            <div className="content-header">
              <span className="section-number">03</span>
              <h2>Our Approach</h2>
            </div>
            <div className="content-text">
              <p>We believe in a collaborative approach where we work closely with our clients to understand their unique challenges and objectives. Our agile methodology ensures flexibility and rapid delivery while maintaining the highest quality standards.</p>
            </div>
          </div>

          <section className="team-section" ref={teamRef}>
            <div className="team-header">
              <h2>Meet Our Team</h2>
              <p>ATechSole has a team of 50+ experts who are passionate about technology and dedicated to delivering exceptional results. Meet our talented team members:</p>
            </div>
            <div className="team-grid">
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://media.licdn.com/dms/image/v2/D4E03AQGZ99xq3YK_Ow/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707551277294?e=2147483647&v=beta&t=Hb2_OxGyAJ7xw0g9GykFsOhgczPd0f7NcmaMLUXKbDU" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Mustansar Riaz</h3>
                  <span className="team-role">Founder & CEO</span>
                </div>
              </div>
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://media.licdn.com/dms/image/v2/D4D03AQGK16RQ5_0PJg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730090791286?e=1769040000&v=beta&t=NPhh_DSrPr6iUCPtUpr5yo10S-oqzDEpeIqZ9VbsxBQ" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Fatima Chaudhary</h3>
                  <span className="team-role">Artificial Intelligence Engineer| Machine Learning</span>
                </div>
              </div>
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://media.licdn.com/dms/image/v2/D4D35AQEouTR60CWZyA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1721999959982?e=1768222800&v=beta&t=lDpV31moHeESL_k-KA2FEe9qXAEH7aJ6jd0TyXnEQo0" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Muhib-ur-Rahman</h3>
                  <span className="team-role">Creative Video Editor & Graphic Designer</span>
                </div>
              </div>
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://media.licdn.com/dms/image/v2/D5603AQFYAk3DBf-6gg/profile-displayphoto-scale_100_100/B56ZjnICgtHMAc-/0/1756224303731?e=1769040000&v=beta&t=rk6HmmCQHB63sTQVNSYceeUWJA1bO0yMFX0ybpwZKng" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Mehak Shafiq</h3>
                  <span className="team-role">AI Engineer | Computer Vision | Agentic AI | Expert in Custom Bot</span>
                </div>
              </div>
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://media.licdn.com/dms/image/v2/D4D03AQHk4oqIuavOXw/profile-displayphoto-shrink_100_100/B4DZWWe33UH4Ac-/0/1741986439410?e=1769040000&v=beta&t=hcirJVpLboHGonGZiKFXZoHGZ4pOsZceOE1Ojvfumhg" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Zain Irshad
                  </h3>
                  <span className="team-role">Attended The Superior University</span>
                </div>
              </div>
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://media.licdn.com/dms/image/v2/D4E03AQGF9ct-ZDoXLA/profile-displayphoto-scale_100_100/B4EZs1GsQZIUAg-/0/1766122508162?e=1769040000&v=beta&t=RZJ9FBa8KbcxyUNKBg06cZbT-QnrzryKOC3OJHX6bt8" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Aiman Naseer</h3>
                  <span className="team-role">Graphic Designer</span>
                </div>
              </div>
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://media.licdn.com/dms/image/v2/D4E35AQF-QWng2GC0Sg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1737546737136?e=1768222800&v=beta&t=NkKtd7GeYW5aTQuEYRUVYmEpHmv_8JtpTZc8fQ5kLx0" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Allah Rakha</h3>
                  <span className="team-role">Database Administrator | MSSQL Server | Database Development</span>
                </div>
              </div>
               <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://media.licdn.com/dms/image/v2/D4E03AQHle0oRqVfvQA/profile-displayphoto-scale_100_100/B4EZkJgYC2GUAg-/0/1756801106830?e=1769040000&v=beta&t=oH6NxJDs53ySyh4vIwRpYUwIu_ZazCe6Nryvm8E3bhU" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Farukh Amir</h3>
                  <span className="team-role">Senior Accountant</span>
                </div>
              </div>
               <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://media.licdn.com/dms/image/v2/D4D03AQGMBd2aE00v3A/profile-displayphoto-scale_100_100/B4DZrduGC6JEAc-/0/1764656440314?e=1769040000&v=beta&t=dvs-VwlZU5mwWrHLH_aJVfVK8ACmAbdKCfMUCQRflww" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Hira Ahmed</h3>
                  <span className="team-role">Artificial Intelligence Engineer at Your AI Builder</span>
                </div>
              </div>
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://media.licdn.com/dms/image/v2/D4D03AQGwfuQkJU9D2A/profile-displayphoto-scale_100_100/B4DZkEE.hBH4Ac-/0/1756710039120?e=1769040000&v=beta&t=OXNUrdGH2gJbOY_TBfegE4gt3epnY2v28lGlVx80Qxw" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Muhammad Abdullah</h3>
                  <span className="team-role">Cyber Security Engineer</span>
                </div>
              </div>
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://d2gjqh9j26unp0.cloudfront.net/profilepic/e42a8720ef3c7164471168707ea2b2d9" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>M-ullah</h3>
                  <span className="team-role">Marketing Intern</span>
                </div>
              </div>
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?semt=ais_hybrid&w=740&q=80" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Javeria Javed</h3>
                  <span className="team-role">Full stack Web-Developer</span>
                </div>
              </div>
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://st2.depositphotos.com/1007566/11574/v/450/depositphotos_115748332-stock-illustration-young-executive-woman-profile-icon.jpg" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Mahzaib Nisar</h3>
                  <span className="team-role">Full stack Web-Developer</span>
                </div>
              </div>
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGdDGXfTUnXcXjTqWU7TPuUw7V_GLEji7Mw&s" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Meshal Khan</h3>
                  <span className="team-role">Full stack Developer</span>
                </div>
              </div>
              
              <div className="team-card">
                <div className="accent-shape"></div>
                <div className="team-photo-wrap">
                  <img src="https://s3.amazonaws.com/media.mixrank.com/profilepic/16b8fdb589c61a66e5c116e323b3c695" alt="Team Member" className="team-photo" />
                </div>
                <div className="team-info">
                  <h3>Mariyam Mumtaz</h3>
                  <span className="team-role">Business Development Manager</span>
                </div>
              </div>
                
            </div>
          </section>
          

          {/* We Believe Section - Black Background */}
          <div className="we-believe-section">
            <div className="believe-icon">

              <img src={logo} alt="Global Unity Icon" className="believe-img" />
            </div>
            <div className="believe-content">
              <h3>WE BELIEVE</h3>
              <p>
                that businesses are not just economic entities — they are the architects of the future.
                Through immersive digital strategies, robust software engineering, and global technological integration,
                ATechSole equips enterprises with essential tools in innovation, scalability, market leadership, and digital resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
