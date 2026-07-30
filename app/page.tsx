const programs = [
  { n: "01", title: "Equity Financing", text: "Strategic introductions and preparation for businesses considering growth capital in exchange for ownership participation." },
  { n: "02", title: "Venture Capital", text: "Readiness guidance for ambitious companies seeking institutional investors, from narrative refinement to opportunity positioning." },
  { n: "03", title: "SBA & Term Lending", text: "Guidance through established lending programs with clear requirements, structured payments, and longer planning horizons." },
  { n: "04", title: "Business Lines of Credit", text: "Flexible capital access designed to support working needs, purchasing cycles, and unexpected opportunities." },
  { n: "05", title: "Equipment Financing", text: "Purpose-built financing options that help businesses acquire essential equipment while preserving operating liquidity." },
  { n: "06", title: "Strategic Capital Advisory", text: "A practical review of your goals, financial profile, and available paths—so you can choose capital with confidence." },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Peachtree Capital Group home">
          <span className="brand-mark">P</span><span>PEACHTREE<br /><b>CAPITAL GROUP</b></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#approach">Approach</a><a href="#programs">Programs</a><a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#contact">Start a conversation <span>↗</span></a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">CAPITAL STRATEGY FOR GROWING BUSINESSES</p>
          <h1>Clarity first.<br /><em>Capital</em> second.</h1>
          <p className="lede">Peachtree Capital Group LLC is a financial consulting company helping business owners understand, prepare for, and pursue the right capital program for their next chapter.</p>
          <div className="hero-actions"><a className="button" href="#contact">Explore your options <span>→</span></a><a className="text-link" href="#programs">View capital programs</a></div>
        </div>
        <div className="hero-art" aria-label="A strategic path to business capital">
          <div className="peach peach-one"></div><div className="peach peach-two"></div>
          <div className="orbit"><span>STRATEGY</span><span>CAPITAL</span><span>GROWTH</span></div>
          <div className="hero-note"><b>Independent guidance.</b><br />A more informed path to capital.</div>
        </div>
      </section>

      <section className="proof"><div className="shell proof-grid"><p>Built for the decisions<br />that shape what’s next.</p><div><strong>6</strong><span>capital pathways<br />considered</span></div><div><strong>1:1</strong><span>consultative<br />approach</span></div><div><strong>100%</strong><span>focused on your<br />business goals</span></div></div></section>

      <section className="approach shell" id="approach">
        <div><p className="eyebrow">OUR APPROACH</p><h2>Capital decisions deserve more than a quick answer.</h2></div>
        <div className="approach-copy"><p>Every business has a different story, operating rhythm, and ambition. We begin by understanding yours. Then we help organize the financial picture, identify suitable programs, and prepare you for productive conversations with potential capital providers.</p><p>Peachtree is a financial consultant, not a lender. We do not make credit decisions or guarantee approvals. Our role is to help you navigate the landscape with greater clarity.</p></div>
      </section>

      <section className="programs" id="programs"><div className="shell"><p className="eyebrow">CAPITAL PROGRAMS</p><div className="section-head"><h2>More than one way<br />to fund what’s next.</h2><p>We help evaluate a range of established and strategic capital paths based on your business profile, timeline, and priorities.</p></div><div className="program-grid">{programs.map((p) => <article key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.text}</p><div aria-hidden="true">↗</div></article>)}</div></div></section>

      <section className="about shell" id="about"><div className="about-art"><div className="rings"></div><p>ROOTED IN<br /><b>YOUR AMBITION</b></p></div><div className="about-copy"><p className="eyebrow">WHY PEACHTREE</p><h2>A steady hand for an important decision.</h2><p>We believe good consulting starts with listening. Our team works alongside business owners to make complex options easier to understand and next steps easier to act on.</p><ul><li><span>01</span><b>Personalized perspective</b><p>Recommendations shaped around your business—not a one-size-fits-all product.</p></li><li><span>02</span><b>Clear communication</b><p>Plain-language guidance on tradeoffs, requirements, and the process ahead.</p></li><li><span>03</span><b>Long-term thinking</b><p>A capital strategy considered in the context of where you want the business to go.</p></li></ul></div></section>

      <section className="contact" id="contact"><div className="shell contact-grid"><div><p className="eyebrow">START A CONVERSATION</p><h2>Let’s find the right path forward.</h2><p>Tell us a little about your business. A Peachtree consultant will follow up to discuss your goals and potential next steps.</p><a href="mailto:info@peachtree.capital">info@peachtree.capital</a></div><form><div className="fields"><label>First name<input name="firstName" required /></label><label>Last name<input name="lastName" required /></label><label>Business email<input type="email" name="email" required /></label><label>Mobile phone<input type="tel" name="phone" required /></label><label className="wide">Company name<input name="company" required /></label><label className="wide">What are you looking to accomplish?<textarea name="goals" rows={3}></textarea></label></div><label className="consent"><input type="checkbox" name="smsConsent" /><span>By checking this box, I agree to receive recurring marketing and informational text messages from Peachtree Capital Group LLC. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. View our <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy Policy</a>.</span></label><button className="button" type="submit">Request a consultation <span>→</span></button></form></div></section>

      <footer>
        <div className="shell footer-top">
          <div>
            <a className="brand light" href="#top" style={{ marginBottom: '24px' }}><span className="brand-mark">P</span><span>PEACHTREE<br /><b>CAPITAL GROUP</b></span></a><p style={{ margin: 0 }}>Thoughtful capital guidance<br />for growing businesses.</p>
          </div>
          <div>
            <b>Address</b><p style={{ margin: 0 }}>Peachtree Capital Group LLC<br />1 Industrial Way West, Bldg C, Ste A<br />Eatontown, NJ 07724</p>
          </div>
          <div>
            <b>Connect</b>
            <p style={{ margin: 0 }}>Phone: <a href="tel:3476008967">(347) 600-8967</a><br />Email: <a href="mailto:privacy@peachtreecapital.group">privacy@peachtreecapital.group</a></p>
          </div>
          <div><b>Legal</b>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}><a href="/privacy">Privacy Policy</a><a href="/terms">Terms & Conditions</a><a href="/terms#sms">SMS Terms</a>
            </div>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Peachtree Capital Group LLC</span>
        </div>
      </footer>
    </main>
  );
}
