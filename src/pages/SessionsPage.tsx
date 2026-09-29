import { ArrowUpRight, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { upcomingSessions, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../data';

export default function SessionsPage() {
  return (
    <main className="page-shell">
      <section className="page-hero sessions-hero">
        <div className="page-hero-glow" />
        <div className="container page-hero-grid">
          <div className="reveal">
            <div className="eyebrow light-eyebrow">
              <span className="eyebrow-line" /> Upcoming sessions
            </div>
            <h1>
              Show up.
              <br />
              Level <em>up.</em>
            </h1>
            <p className="page-lede">
              Free and low-barrier programmes for curious minds—book clubs, exam bootcamps, mentorship circles, and
              community learning days. Pick a date. Bring a friend. Rise with us.
            </p>
            <div className="hero-actions">
              <a className="button button-yellow" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Reserve a seat on WhatsApp <ArrowUpRight size={18} />
              </a>
              <Link className="text-link light-link" to="/partners">
                Sponsor a session <span>→</span>
              </Link>
            </div>
          </div>
          <div className="page-hero-aside reveal reveal-delay">
            <div className="pulse-badge">
              <Sparkles size={18} />
              <span>Next sessions live · WhatsApp to join</span>
            </div>
            <p>
              Questions? Chat us on <strong>{WHATSAPP_DISPLAY}</strong>—we reply with Meet links, reminders, and good
              vibes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding sessions-list-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="section-label">
                <span>01</span>
                <span className="label-rule" /> On the calendar
              </div>
              <h2>
                What’s <span>next.</span>
              </h2>
            </div>
            <p className="heading-aside">Tap WhatsApp to confirm your spot—spaces fill fast when word spreads.</p>
          </div>

          <div className="sessions-list">
            {upcomingSessions.map((session, index) => (
              <article
                className="session-card reveal"
                key={session.title}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="session-card-top">
                  <span className="session-badge">{session.badge}</span>
                  <span className="session-number">0{index + 1}</span>
                </div>
                <h3>{session.title}</h3>
                <p className="session-tagline">{session.tagline}</p>
                <p>{session.description}</p>
                <ul className="session-meta">
                  <li>
                    <Calendar size={16} /> {session.date}
                  </li>
                  <li>
                    <Clock size={16} /> {session.time}
                  </li>
                  <li>
                    <MapPin size={16} /> {session.venue}
                  </li>
                </ul>
                <div className="session-card-footer">
                  <span className="session-spots">{session.spots}</span>
                  <a className="button button-purple" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Join via WhatsApp <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="session-cta-band">
        <div className="container session-cta-inner">
          <div>
            <h2>Got an idea for the next session?</h2>
            <p>Suggest a book, a topic, or a guest. We love building programmes with our community.</p>
          </div>
          <a className="button button-yellow" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Pitch us on WhatsApp <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
