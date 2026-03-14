import React from 'react';
import { Instagram, MessageCircle, Send, Code, Terminal, Cpu, User, CheckCircle } from 'lucide-react';

export default function App() {
  const cyan = "#00e5ff";
  const instaID = "@ITSPRADEEP7364"; 

  return (
    <div style={{ 
      width: '100%',
      minHeight: '100vh', 
      backgroundColor: '#020617', 
      color: '#f8fafc', 
      fontFamily: 'sans-serif',
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'relative'
    }}>
      
    
      <header style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', color: 'white', margin: '0', fontWeight: '900', letterSpacing: '2px' }}>
          PRADEEP <span style={{ color: cyan }}>CHOUDHARY</span>
        </h1>
        <p style={{ letterSpacing: '3px', color: '#94a3b8', marginTop: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>
          FULL STACK DEVELOPER & AUTOMATION SPECIALIST
        </p>
      </header>

      <div style={{ maxWidth: '750px', margin: '0 auto', padding: '0 20px 100px 20px' }}>
        
        
        <section style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '35px', borderRadius: '30px', marginBottom: '30px', border: '1px solid #1e293b' }}>
          <h2 style={{ color: cyan, fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <User size={24}/> About Me
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#cbd5e1', textAlign: 'justify', margin: 0 }}>
            Hi, I’m <b>Pradeep Choudhary</b> from Sikar, Rajasthan. I am a <b>Full Stack Developer</b> who loves to automate boring tasks. 
            <br /><br />
            I don't just learn programming; I build things with it. Currently, I’m specializing in <b>Python Automation</b> and <b>Web Scraping</b>. I’ve already built tools like <b>Instagram Engagement Bots</b> and high-speed data scrapers that solve real business problems. 
            <br /><br />
            For me, coding is about finding a problem and building a smart solution for it. I am always open to learning new technologies and taking on exciting freelance projects.
          </p>
        </section>

        
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: cyan, marginBottom: '20px', fontSize: '1.4rem' }}>
            <Code size={22} style={{verticalAlign: 'middle', marginRight: '10px'}}/> Core Skills
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {['Python', 'JavaScript', 'React.js', 'Node.js', 'Selenium', 'Web Scraping', 'Automation', 'MANGODB'].map(skill => (
              <div key={skill} style={{ background: '#1e293b', padding: '12px 20px', borderRadius: '12px', border: '1px solid #334155', fontWeight: 'bold', color: cyan, fontSize: '0.9rem' }}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: cyan, marginBottom: '20px', fontSize: '1.4rem' }}>
            <Cpu size={22} style={{verticalAlign: 'middle', marginRight: '10px'}}/> Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#0f172a', padding: '25px', borderRadius: '20px', borderLeft: `5px solid ${cyan}` }}>
              <h3 style={{ margin: '0 0 10px 0', color: 'white' }}>Instagram Automation</h3>
              <p style={{ color: '#94a3b8', margin: '0', fontSize: '0.95rem' }}>Custom bots for engagement and growth tracking.</p>
            </div>
            <div style={{ background: '#0f172a', padding: '25px', borderRadius: '20px', borderLeft: `5px solid ${cyan}` }}>
              <h3 style={{ margin: '0 0 10px 0', color: 'white' }}>Web Scraping</h3>
              <p style={{ color: '#94a3b8', margin: '0', fontSize: '0.95rem' }}>Industrial-grade data extraction from complex sites.</p>
            </div>
          </div>
        </section>

        
        <footer style={{ background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)', padding: '50px 20px', borderRadius: '40px', border: '1px solid #00e5ff33', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '10px' }}>Let's Build Together</h2>
          <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Available for projects and collaborations.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            
            <a href="https://wa.me/916377546238" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              <MessageCircle color="#25D366" size={40}/><br/><span style={{ fontSize: '0.8rem', marginTop: '8px', display: 'block' }}>WhatsApp</span>
            </a>

            
            <a href={`https://www.instagram.com/direct/t/${instaID}`} target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              <Instagram color="#E1306C" size={40}/><br/><span style={{ fontSize: '0.8rem', marginTop: '8px', display: 'block' }}>Direct DM</span>
            </a>

            
            <a href="mailto:pradeepjakhar0901@gmail.com" style={{ color: 'white', textDecoration: 'none', textAlign: 'center' }}>
              <Send color={cyan} size={40}/><br/><span style={{ fontSize: '0.8rem', marginTop: '8px', display: 'block' }}>Email</span>
            </a>
          </div>

          <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #1e293b', fontSize: '0.8rem', color: '#475569' }}>
             © 2026 PRADEEP 
          </div>
        </footer>

      </div>
    </div>
  );
}