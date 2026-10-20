import React, { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Menu,
  Moon,
  MousePointer2,
  Palette,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Sunday Supply',
    category: 'E-commerce',
    type: 'web',
    description: 'A sun-soaked storefront for the little things that make a home.',
    tags: ['React', 'E-commerce', 'Interaction'],
    className: 'sunday',
    visual: (
      <div className="sunday-art">
        <div className="sunny-orb" />
        <div className="sunny-copy"><span>OBJECTS FOR</span><strong>slow<br />living.</strong></div>
        <div className="sunny-bottle bottle-one" /><div className="sunny-bottle bottle-two" />
        <span className="sunny-label">SUNDAY<br />SUPPLY CO.</span>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Form & Function',
    category: 'Creative direction',
    type: 'design',
    description: 'A bold digital home for a studio building brands with a point of view.',
    tags: ['Art direction', 'Responsive', 'Motion'],
    className: 'form',
    visual: (
      <div className="form-art">
        <div className="form-topline"><span>INDEPENDENT DESIGN STUDIO</span><span>EST. 2024</span></div>
        <strong>FORM<br /><span>&</span> FUNCTION</strong>
        <div className="form-stamp">GOOD<br />THINGS<br />TAKE<br />SHAPE ↗</div>
        <div className="form-bottomline"><span>STRATEGY / IDENTITY / DIGITAL</span><span>01—24</span></div>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Daybreak',
    category: 'Product concept',
    type: 'web',
    description: 'A calmer way to see the day ahead, designed around the morning ritual.',
    tags: ['Product UI', 'Dashboard', 'Accessibility'],
    className: 'daybreak',
    visual: (
      <div className="daybreak-art">
        <div className="daybreak-card">
          <div className="daybreak-nav"><span className="daybreak-mark">d.</span><span>YOUR MORNING</span><span>☼ 08:42</span></div>
          <div className="daybreak-greeting">MONDAY, OCT 20 <span>↗ BROOKLYN, NY</span></div>
          <div className="daybreak-time">Good<br />morning<span>.</span></div>
          <div className="daybreak-bottom"><span>A fresh start, at your own pace.</span><span>☀ &nbsp; 18° &nbsp; CLEAR</span></div>
        </div>
      </div>
    ),
  },
];

const skillGroups = [
  { icon: Code2, title: 'Development', skills: 'React, JavaScript, HTML & CSS, responsive UI' },
  { icon: Palette, title: 'Design', skills: 'Interface design, visual systems, prototyping' },
  { icon: Layers3, title: 'Toolkit', skills: 'Vite, Git, Figma, modern browser APIs' },
];

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All work');
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const visibleProjects = projects.filter((project) => filter === 'All work' || (filter === 'Websites' ? project.type === 'web' : project.type === 'design'));

  useEffect(() => {
    const sections = ['home', 'work', 'about', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@sushantvaidya.dev');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      window.location.href = 'mailto:hello@sushantvaidya.dev';
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Sushant Vaidya, home">sv<span>.</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {[['home', 'Home'], ['work', 'Work'], ['about', 'About'], ['contact', 'Contact']].map(([id, label]) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} onClick={closeMenu}>{label}</a>
          ))}
          <button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}>
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="availability-dot" /> AVAILABLE FOR SELECT PROJECTS <span className="eyebrow-year">— 2026</span></div>
            <h1>Making the<br />web feel <span className="italic-word">more</span><br /><span className="human-word">human<span className="period">.</span></span></h1>
            <div className="hero-bottom">
              <p>Hey, I’m Sushant — a frontend developer turning thoughtful design into digital experiences that feel as good as they work.</p>
              <a className="round-link" href="#work" aria-label="Scroll to selected work"><ArrowDown size={20} /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of a person working on a creative project">
            <div className="art-meta art-meta-top"><span>INDEPENDENT<br />DEVELOPER</span><span>BASED IN<br />INDIA · 19°N</span></div>
            <div className="art-sun" />
            <div className="art-grid" />
            <div className="art-loop loop-one" /><div className="art-loop loop-two" />
            <div className="art-person"><div className="person-hair" /><div className="person-head" /><div className="person-neck" /><div className="person-body" /><div className="person-arm" /><div className="person-laptop"><span>sv.</span></div></div>
            <div className="art-sparkle"><Sparkles size={19} strokeWidth={1.4} /></div>
            <div className="art-meta art-meta-bottom"><span>DESIGN-MINDED<br />DEVELOPER</span><span>SCROLL TO<br />EXPLORE ↓</span></div>
          </div>
          <div className="hero-side-note"><span>GOOD WORK, GOOD PEOPLE</span><span>✳</span></div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><span className="section-kicker">01 / A FEW GOOD THINGS</span><h2>Selected <span>work</span></h2></div>
            <p>A handful of ideas, made<br />real with intention.</p>
          </div>
          <div className="work-toolbar">
            <span className="project-count">{String(visibleProjects.length).padStart(2, '0')} PROJECT{visibleProjects.length === 1 ? '' : 'S'}</span>
            <div className="filter-group" aria-label="Filter projects">
              {['All work', 'Websites', 'Design'].map((label) => <button key={label} className={filter === label ? 'selected' : ''} onClick={() => setFilter(label)} type="button">{label}</button>)}
            </div>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.number}>
                <a className="project-visual" href="#contact" aria-label={`Discuss a project like ${project.title}`}>
                  {project.visual}
                  <span className="project-open"><ArrowUpRight size={20} /></span>
                </a>
                <div className="project-info">
                  <div className="project-title"><span className="project-number">{project.number}</span><h3>{project.title}</h3><span className="project-category">{project.category}</span></div>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="work-note"><MousePointer2 size={15} /><span>Thoughtful details make all the difference.</span></div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-intro">
            <div><span className="section-kicker">02 / A LITTLE ABOUT ME</span><h2>Curious by<br />nature. <span>Careful</span><br />by design.</h2></div>
            <div className="about-description"><span className="asterisk">✳</span><p>I care about the small stuff: the way a page breathes, how a button responds, whether something is a joy to use. I bring design and development together to make the internet a little more considered.</p><p>Currently building my practice, collecting inspiration, and looking for good people to make good things with.</p><a href="#contact" className="text-link">A bit more about me <ArrowDownRight size={17} /></a></div>
          </div>
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, skills }, index) => <div className="skill-item" key={title}><span className="skill-index">0{index + 1}</span><Icon size={20} strokeWidth={1.5} /><h3>{title}</h3><p>{skills}</p></div>)}
          </div>
          <div className="about-quote"><span>“</span><p>Make it useful. Make it lovely.<br />Make it feel like someone cared.</p><span className="quote-credit">A NOTE TO SELF &nbsp; ✳</span></div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-top"><span className="section-kicker">03 / YOUR TURN</span><span className="contact-sticker">GOOD THINGS<br />START WITH<br />A HELLO <ArrowDownRight size={17} /></span></div>
          <h2>Have a good<br />one in <span>mind?</span></h2>
          <div className="contact-bottom"><p>Have a project, a question, or just want to say hello? My inbox is open.</p><button type="button" onClick={copyEmail} className={`email-link ${copied ? 'copied' : ''}`}>{copied ? <><Check size={18} /> Copied to clipboard</> : <>hello@sushantvaidya.dev <ArrowUpRight size={18} /></>}</button></div>
          <a className="contact-arrow" href="mailto:hello@sushantvaidya.dev" aria-label="Email Sushant"><ArrowRight size={31} /></a>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-mark" href="#home">sv<span>.</span></a>
        <span>DESIGNED & BUILT WITH CARE · 2026</span>
        <div className="social-links"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={12} /></a><a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={12} /></a><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </div>
  );
}

export default App;
