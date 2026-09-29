import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleDollarSign,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Recycle,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import {
  audiences,
  EMAIL,
  FOUNDER_SRC,
  impactStats,
  modelSteps,
  PHONE_PRIMARY,
  projects,
  values,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../data';

const heroImage =
  'https://images.pexels.com/photos/37898351/pexels-photo-37898351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const valueIcons = [BookOpen, Sparkles, Users, Target];
const modelIcons = [Recycle, Sparkles, BookOpen, Leaf];

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1400;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * value));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div className="stat-item reveal">
      <div className="stat-value">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main id="top">
      <section className="hero-section">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="connection-lines" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
          <i />
          <i />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow light-eyebrow">
              <span className="eyebrow-line" /> Education in action
            </div>
            <h1>
              Rising beyond <em>boundaries.</em>
            </h1>
            <p className="hero-lede">
              Igniting the potential of youth through academic excellence, leadership, and innovation.
            </p>
            <div className="hero-actions">
              <a className="button button-yellow" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Link up on WhatsApp <ArrowUpRight size={18} />
              </a>
              <Link className="text-link light-link" to="/sessions">
                Upcoming sessions <span>→</span>
              </Link>
            </div>
            <div className="hero-note">
              <span className="note-dot" /> Creating possibility in Funsi, Upper West Region
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="photo-frame">
              <img src={heroImage} alt="Students learning together in a classroom" />
              <div className="photo-wash" />
            </div>
            <div className="floating-card top-card float-soft">
              <span className="floating-icon">
                <Sparkles size={17} />
              </span>
              <span>
                <strong>Potential, ignited.</strong>
                <small>One young person at a time.</small>
              </span>
            </div>
            <div className="floating-card bottom-card float-soft-delay">
              <strong>01</strong>
              <span>
                Education
                <br />
                that moves
              </span>
              <ArrowUpRight size={18} />
            </div>
            <div className="yellow-diamond" />
          </div>
        </div>
        <a className="scroll-cue" href="#about">
          <span>Scroll to explore</span>
          <ChevronDown size={17} />
        </a>
      </section>

      <section className="intro-section section-padding" id="about">
        <div className="container intro-grid">
          <div className="section-label">
            <span>01</span>
            <span className="label-rule" /> Who we are
          </div>
          <div className="intro-content">
            <h2>
              Education is the <span>ignition</span> of potential.
            </h2>
            <p className="intro-lede">
              Elevate Hub is an educational social enterprise founded by Amos Sampuo Awuro to empower rural youth
              through education, leadership development, and environmental innovation.
            </p>
            <p>
              We believe the brightest futures can begin anywhere. By connecting young people to the confidence, tools,
              and community they need, we are helping them shape a better tomorrow—right where they are. Our work
              focuses on the Wa East District and Funsi, transforming the academic landscape of the Upper West Region.
            </p>
            <Link className="text-link dark-link" to="/partners">
              Partner with us <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="projects-section section-padding" id="projects">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="section-label">
                <span>02</span>
                <span className="label-rule" /> Projects done
              </div>
              <h2>
                Impact you can <span>see.</span>
              </h2>
            </div>
            <p className="heading-aside">
              From classrooms to community clean-ups—real programmes that lift students and places together.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card reveal" style={{ animationDelay: `${index * 0.08}s` }} key={project.title}>
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-index">0{index + 1}</span>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="project-location">{project.location}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section section-padding">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> Our philosophy
              </div>
              <h2>
                Small sparks.
                <br />
                <span>Lasting change.</span>
              </h2>
            </div>
            <p className="heading-aside">Every programme starts with a young person and grows into a stronger community.</p>
          </div>
          <div className="values-grid">
            {values.map(({ title, text }, index) => {
              const Icon = valueIcons[index];
              return (
                <article className="value-card" key={title}>
                  <div className="card-number">0{index + 1}</div>
                  <Icon className="value-icon" size={25} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="card-arrow">↗</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="model-section section-padding" id="model">
        <div className="container">
          <div className="model-heading">
            <div className="section-label light-label">
              <span>03</span>
              <span className="label-rule" /> From waste to worth
            </div>
            <h2>
              Trash to <span>treasure.</span>
            </h2>
            <p>
              The Trash to Treasure Model transforms local plastic waste into useful products like school bags and
              aprons while creating environmental awareness and opportunities for rural youth.
            </p>
          </div>
          <div className="model-steps">
            {modelSteps.map(({ number, title, text }, index) => {
              const Icon = modelIcons[index];
              return (
                <article className="model-step" key={number}>
                  <div className="step-top">
                    <span>{number}</span>
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="step-line" />
                </article>
              );
            })}
          </div>
          <div className="model-bottom">
            <span>
              <CircleDollarSign size={18} /> Circular thinking, community powered
            </span>
            <Link to="/partners" className="text-link light-link">
              Support the initiative <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="impact-section section-padding" id="impact">
        <div className="container">
          <div className="section-label">
            <span>04</span>
            <span className="label-rule" /> Our impact
          </div>
          <div className="impact-heading">
            <h2>
              Progress you can <span>feel.</span>
            </h2>
            <p>When a young person believes they can, a whole community begins to move.</p>
          </div>
          <div className="stats-grid">
            {impactStats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="audience-section section-padding">
        <div className="container audience-grid">
          <div className="audience-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> Who we serve
            </div>
            <h2>
              Built for the
              <br />
              <span>bold & curious.</span>
            </h2>
            <p>
              We create spaces where learners, leaders, and change-makers can meet their potential and take it further.
            </p>
          </div>
          <div className="audience-list">
            {audiences.map((audience, index) => (
              <div className="audience-row" key={audience}>
                <span>0{index + 1}</span>
                <strong>{audience}</strong>
                <ArrowUpRight size={19} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section section-padding" id="founder">
        <div className="container founder-grid">
          <div className="founder-art">
            <div className="portrait-frame">
              <img src={FOUNDER_SRC} alt="Amos Sampuo Awuro, Founder and Executive Director of Elevate Hub" />
            </div>
            <div className="portrait-stamp">
              E
              <br />
              <span>H</span>
            </div>
          </div>
          <div className="founder-copy">
            <div className="section-label light-label">
              <span>05</span>
              <span className="label-rule" /> The person behind the vision
            </div>
            <h2>
              “Leadership is not
              <br />
              a position. It is a
              <br />
              <span>responsibility.</span>”
            </h2>
            <div className="founder-name">
              <strong>Amos Sampuo Awuro</strong>
              <span>Founder & Executive Director</span>
            </div>
            <p>
              Amos believes that when rural youth are given the right opportunities, they do not just change their own
              lives—they become the architects of change in their communities. A KNUST Agribusiness student and Wa Senior
              High alumnus, he continues to spark potential across Funsi and the Wa East District.
            </p>
            <a className="text-link light-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Say hello on WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section section-padding" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> Start a conversation
            </div>
            <h2>
              Let’s raise
              <br />
              <span>the ceiling.</span>
            </h2>
            <p>
              Whether you want to partner, volunteer, support our work, or simply learn more—we would love to hear from
              you. The fastest way is WhatsApp.
            </p>
            <div className="contact-details">
              <a href={`mailto:${EMAIL}`}>
                <Mail size={18} /> {EMAIL}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Phone size={18} /> WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, '')}`}>
                <Phone size={18} /> {PHONE_PRIMARY}
              </a>
              <span>
                <MapPin size={18} /> Funsi, Wa East District, Upper West Region, Ghana
              </span>
            </div>
          </div>
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-message">
                <span>
                  <Check size={25} />
                </span>
                <h3>Message received.</h3>
                <p>Thank you for reaching out. The Elevate Hub team will be in touch soon.</p>
                <button className="text-link dark-link" onClick={() => setSubmitted(false)}>
                  Send another message <ArrowUpRight size={16} />
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Your name
                    <input type="text" placeholder="e.g. Ama Mensah" required />
                  </label>
                  <label>
                    Email address
                    <input type="email" placeholder="you@example.com" required />
                  </label>
                </div>
                <label>
                  How can we help?
                  <select defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Partner with Elevate Hub</option>
                    <option>Support / fundraise</option>
                    <option>Join a session</option>
                    <option>Volunteer</option>
                    <option>Learn more</option>
                  </select>
                </label>
                <label>
                  Your message
                  <textarea rows={4} placeholder="Tell us a little more..." required />
                </label>
                <div className="form-actions">
                  <button className="button button-purple" type="submit">
                    Send your message <ArrowUpRight size={17} />
                  </button>
                  <a className="button button-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Prefer WhatsApp? <ArrowUpRight size={17} />
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
