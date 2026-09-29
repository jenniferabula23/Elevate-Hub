import { ArrowUpRight, HeartHandshake, MessageCircle, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collaborateWays, partnerTiers, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../data';

export default function PartnersPage() {
  return (
    <main className="page-shell">
      <section className="page-hero partners-hero">
        <div className="page-hero-glow partners-glow" />
        <div className="container page-hero-grid">
          <div className="reveal">
            <div className="eyebrow light-eyebrow">
              <span className="eyebrow-line" /> Partners & fundraising
            </div>
            <h1>
              Let’s build
              <br />
              the <em>next win</em> together.
            </h1>
            <p className="page-lede">
              Elevate Hub grows when collaborators show up—funders, mentors, brands, churches, alumni, and friends who
              believe rural youth deserve a fair shot. If that sounds like you, let’s link up.
            </p>
            <div className="hero-actions">
              <a className="button button-yellow" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
              <a className="text-link light-link" href="#ways">
                See how you can help <span>→</span>
              </a>
            </div>
          </div>
          <aside className="partner-chat-card reveal reveal-delay float-soft">
            <div className="partner-chat-header">
              <span className="partner-chat-avatar">EH</span>
              <div>
                <strong>Elevate Hub</strong>
                <small>Usually replies same day</small>
              </div>
            </div>
            <p className="partner-chat-bubble">
              “Ready to sponsor notebooks, co-host a session, or just say hi? Drop us a WhatsApp—we’ll take it from
              there.”
            </p>
            <a className="button button-whatsapp full-width" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp {WHATSAPP_DISPLAY} <ArrowUpRight size={17} />
            </a>
          </aside>
        </div>
      </section>

      <section className="section-padding" id="ways">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="section-label">
                <span>01</span>
                <span className="label-rule" /> Ways to collaborate
              </div>
              <h2>
                Pick your <span>lane.</span>
              </h2>
            </div>
            <p className="heading-aside">Money, skills, networks, or time—every kind of support moves a student forward.</p>
          </div>
          <div className="ways-grid">
            {collaborateWays.map((way, index) => (
              <article className="way-card reveal" key={way.title} style={{ animationDelay: `${index * 0.08}s` }}>
                <span className="way-index">0{index + 1}</span>
                <h3>{way.title}</h3>
                <p>{way.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tiers-section section-padding">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> Fundraising pathways
              </div>
              <h2>
                Give at a level
                <br />
                that <span>fits.</span>
              </h2>
            </div>
            <p className="heading-aside">Flexible gifts welcome—these tiers simply show how far your support can travel.</p>
          </div>
          <div className="tiers-grid">
            {partnerTiers.map((tier, index) => (
              <article
                className={`tier-card reveal ${index === 1 ? 'tier-featured' : ''}`}
                key={tier.name}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {index === 1 && <span className="tier-popular">Most popular</span>}
                <h3>{tier.name}</h3>
                <div className="tier-amount">{tier.amount}</div>
                <ul>
                  {tier.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <a className="button button-purple" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Start on WhatsApp <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-partner-section section-padding">
        <div className="container why-partner-grid">
          <div>
            <div className="section-label light-label">
              <span>02</span>
              <span className="label-rule" /> Why partners choose us
            </div>
            <h2>
              Transparent. Local.
              <br />
              <span>Youth-first.</span>
            </h2>
            <p>
              Your support lands where it counts—exercise books in students’ hands, mentors on Google Meet, and clean-ups
              that leave Funsi proud. We share updates, photos, and stories so you can see the difference you help make.
            </p>
          </div>
          <div className="why-points">
            <div className="why-point">
              <Users size={22} />
              <div>
                <strong>Rooted in Wa East & Funsi</strong>
                <span>Programmes designed with the community, not for a distant audience.</span>
              </div>
            </div>
            <div className="why-point">
              <HeartHandshake size={22} />
              <div>
                <strong>Collaboration, not just donation</strong>
                <span>Co-create sessions, brand moments, and long-term pipelines together.</span>
              </div>
            </div>
            <div className="why-point">
              <Sparkles size={22} />
              <div>
                <strong>Momentum you can feel</strong>
                <span>From Booklogue to clean-ups—partners join a movement already in motion.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-final-cta">
        <div className="container partner-final-inner">
          <h2>Ready to link up?</h2>
          <p>
            Message us on WhatsApp at <strong>{WHATSAPP_DISPLAY}</strong>. Tell us who you are, what you care about, and
            we’ll sketch the next step—same day when we can.
          </p>
          <div className="hero-actions">
            <a className="button button-yellow" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Open WhatsApp chat
            </a>
            <Link className="text-link light-link" to="/sessions">
              Browse upcoming sessions <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
