/*
 * Lunar Atelier page system: editorial asymmetry, midnight/cream contrast,
 * Aurelis Lavender calibration details, sharp corners, and instrument-like motion.
 */
import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Instagram,
  Linkedin,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

const heroWatch = "/manus-storage/aurelis-hero-watch_e3e01319.png";
const macroMovement = "/manus-storage/aurelis-macro-movement-v2_3b267403.png";
const wristEditorial = "/manus-storage/aurelis-wrist-editorial-v2_693598d9.png";
const aurelisMark = "/manus-storage/aurelis-mark_afa5f60a.png";

const features = [
  {
    number: "01",
    title: "48-hour mechanical reserve",
    copy: "A custom automatic calibre stores two full days of movement, keeping time through the pauses between wear.",
    detail: "Calibre A-01 · 28,800 vph",
  },
  {
    number: "02",
    title: "Grade 5 titanium",
    copy: "A featherweight case with a finely brushed surface, engineered to move from quiet mornings to late nights.",
    detail: "39 mm · 8.6 mm profile",
  },
  {
    number: "03",
    title: "Night-sky clarity",
    copy: "A layered midnight dial, hand-applied indices, and low-light lume bring focus without visual noise.",
    detail: "Sapphire crystal · 10 ATM",
  },
];

const principles = [
  {
    quote: "Time should add perspective, never interrupt it.",
    label: "Aurelis principle 01",
    note: "A calm dial, zero notifications, and one function performed beautifully.",
  },
  {
    quote: "Mechanical precision can still feel warm.",
    label: "Aurelis principle 02",
    note: "Tactile materials and visible craft turn measurement into a daily ritual.",
  },
  {
    quote: "Fewer signals. More significance.",
    label: "Aurelis principle 03",
    note: "The Vesper One is designed to be read in a glance and remembered in detail.",
  },
];

function SignupForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!validEmail) {
      toast.error("Enter a valid email to reserve your first look.");
      return;
    }
    setSubmitted(true);
    toast.success("You’re on the Aurelis early-access list.");
  }

  if (submitted) {
    return (
      <div className={`signup-success ${compact ? "signup-success--compact" : ""}`} role="status">
        <span className="signup-success__icon"><Check size={16} strokeWidth={2.2} /></span>
        <span>
          <strong>Reservation noted.</strong>
          <small>We’ll send one launch note to {email}.</small>
        </span>
      </div>
    );
  }

  return (
    <form className={`signup-form ${compact ? "signup-form--compact" : ""}`} onSubmit={handleSubmit} noValidate>
      <label className="sr-only" htmlFor={compact ? "footer-email" : "hero-email"}>Email address</label>
      <input
        id={compact ? "footer-email" : "hero-email"}
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="Email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        aria-label="Email address"
      />
      <button type="submit">
        <span>{compact ? "Join the list" : "Reserve early access"}</span>
        <ArrowRight size={17} aria-hidden="true" />
      </button>
    </form>
  );
}

export default function Home() {
  const [principleIndex, setPrincipleIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPrincipleIndex((current) => (current + 1) % principles.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  function changePrinciple(direction: number) {
    setPrincipleIndex((current) => (current + direction + principles.length) % principles.length);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Aurelis home">
          <img src={aurelisMark} alt="" />
          <span className="brand-word"><b>A</b>URELIS</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#craft">The craft</a>
          <a href="#design">Design</a>
          <a href="#principles">Principles</a>
        </nav>

        <a className="header-cta" href="#early-access">
          Early access <MoveUpRight size={15} aria-hidden="true" />
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#craft" onClick={() => setMobileOpen(false)}>The craft</a>
            <a href="#design" onClick={() => setMobileOpen(false)}>Design</a>
            <a href="#principles" onClick={() => setMobileOpen(false)}>Principles</a>
            <a href="#early-access" onClick={() => setMobileOpen(false)}>Reserve early access</a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow reveal reveal-1">
              <span className="status-dot" />
              Edition 01 · Launching Autumn 2026
            </div>
            <h1 className="reveal reveal-2">
              Time, distilled to its <em>brightest</em> form.
            </h1>
            <p className="hero-intro reveal reveal-3">
              Meet the Vesper One—a quiet mechanical watch shaped in titanium, tuned for clarity, and made for the hours that matter.
            </p>
            <div className="reveal reveal-4" id="early-access">
              <SignupForm />
              <p className="form-note">Limited first edition · No deposit required</p>
            </div>
          </div>

          <div className="hero-stage reveal reveal-2">
            <img src={heroWatch} alt="Aurelis Vesper One titanium watch with midnight-blue dial" />
            <div className="hero-stage__wash" />
            <div className="hero-stage__spec hero-stage__spec--top">
              <span>CASE</span>
              <strong>Grade 5 Ti</strong>
            </div>
            <div className="hero-stage__spec hero-stage__spec--bottom">
              <span>EDITION</span>
              <strong>01 / 500</strong>
            </div>
            <div className="hero-orbit" aria-hidden="true" />
          </div>

          <a className="scroll-cue" href="#craft">
            <span>Discover the calibre</span>
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </section>

        <section className="feature-section" id="craft">
          <div className="section-heading">
            <div>
              <span className="section-index">01 / THE CRAFT</span>
              <h2>Less on the dial.<br /><em>More beneath it.</em></h2>
            </div>
            <p>Every visible decision is supported by an invisible one: balanced weight, reliable motion, and hand-finished detail.</p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className={`feature-card feature-card--${index + 1}`} key={feature.number}>
                <div className="feature-card__top">
                  <span>{feature.number}</span>
                  <CircleDot size={18} strokeWidth={1.4} aria-hidden="true" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
                <div className="feature-card__detail">{feature.detail}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="product-study" id="design">
          <div className="product-study__image">
            <img src={macroMovement} alt="Macro detail of the Aurelis mechanical movement" />
            <div className="product-study__caption">
              <span>Calibre A-01</span>
              <span>Twenty-four jewels</span>
            </div>
          </div>
          <div className="product-study__copy">
            <span className="section-index section-index--light">02 / ENGINEERED QUIET</span>
            <h2>A movement you can <em>feel.</em></h2>
            <p>
              The Vesper One is powered by a slim automatic calibre calibrated across five positions. Its open caseback reveals the motion without turning it into spectacle.
            </p>
            <dl className="spec-list">
              <div><dt>Power reserve</dt><dd>48 hours</dd></div>
              <div><dt>Frequency</dt><dd>4 Hz</dd></div>
              <div><dt>Water resistance</dt><dd>100 m</dd></div>
              <div><dt>Assembly</dt><dd>La Chaux-de-Fonds</dd></div>
            </dl>
            <a href="#early-access" className="text-link">Explore edition details <ChevronRight size={15} /></a>
          </div>
        </section>

        <section className="wear-section">
          <div className="wear-copy">
            <span className="section-index">03 / IN YOUR ELEMENT</span>
            <p className="wear-kicker">39 millimetres of quiet confidence.</p>
            <h2>Made to disappear.<br /><em>Designed to remain.</em></h2>
            <p className="wear-body">At 72 grams with its woven strap, Vesper One settles on the wrist without asking for attention. The tapered case and curved lugs keep its profile close from every angle.</p>
            <div className="mini-specs">
              <span><strong>72 g</strong> total weight</span>
              <span><strong>8.6 mm</strong> case profile</span>
            </div>
          </div>
          <div className="wear-image">
            <img src={wristEditorial} alt="Aurelis Vesper One worn with a cream tailored sleeve" />
            <span className="image-label">Natural scale · 39 mm</span>
          </div>
        </section>

        <section className="principles-section" id="principles">
          <div className="principles-header">
            <div>
              <span className="section-index section-index--light">04 / EARLY-ACCESS EXPECTATIONS</span>
              <p>What this launch is built to deliver</p>
            </div>
            <div className="carousel-controls">
              <button type="button" onClick={() => changePrinciple(-1)} aria-label="Previous principle"><ArrowLeft size={18} /></button>
              <button type="button" onClick={() => changePrinciple(1)} aria-label="Next principle"><ArrowRight size={18} /></button>
            </div>
          </div>

          <div className="principle-carousel" aria-live="polite">
            <div className="principle-count">0{principleIndex + 1}<span>/ 03</span></div>
            <blockquote key={principleIndex}>
              “{principles[principleIndex].quote}”
            </blockquote>
            <div className="principle-meta">
              <strong>{principles[principleIndex].label}</strong>
              <p>{principles[principleIndex].note}</p>
            </div>
          </div>

          <div className="carousel-progress" aria-hidden="true">
            {principles.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === principleIndex ? "is-active" : ""}
                onClick={() => setPrincipleIndex(index)}
                aria-label={`Show principle ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta__mark"><Sparkles size={22} strokeWidth={1.3} /></div>
          <span className="section-index">FIRST EDITION · 500 PIECES</span>
          <h2>Be there when<br /><em>the hour begins.</em></h2>
          <p>Reserve your first look at Vesper One. Early-access members receive launch pricing and the first allocation window.</p>
          <SignupForm compact />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand brand--footer" href="#top" aria-label="Aurelis home">
            <img src={aurelisMark} alt="" />
            <span className="brand-word"><b>A</b>URELIS</span>
          </a>
          <p>Mechanical timepieces for a more considered pace.</p>
          <div className="social-links" aria-label="Social links">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="mailto:studio@aurelis.example" aria-label="Email Aurelis">@</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Aurelis Studio</span>
          <span>Concept launch · Product imagery is original campaign artwork</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
