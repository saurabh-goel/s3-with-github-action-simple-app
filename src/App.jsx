import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bulkChange, increment } from './redux/slice'
import './App.css'

const pages = ['Home', 'Services', 'About', 'Redux', 'Contact']
const offerings = [
  { number: '01', title: 'Brand & strategy', text: 'Find the story your business should tell, then build a clear plan to tell it.' },
  { number: '02', title: 'Web experiences', text: 'Fast, thoughtful websites that make it easy for the right people to say yes.' },
  { number: '03', title: 'Growth & content', text: 'Useful content and campaigns that turn attention into lasting relationships.' },
]

function App() {
  const [page, setPage] = useState(() => window.location.hash.slice(2) || 'home')

  useEffect(() => {
    const syncPage = () => setPage(window.location.hash.slice(2) || 'home')
    window.addEventListener('hashchange', syncPage)
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])

  const activePage = pages.some((item) => item.toLowerCase() === page) ? page : 'home'
  const goTo = (name) => `#/${name.toLowerCase()}`

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href={goTo('Home')} aria-label="Northstar home"><span className="brand-mark">N</span> northstar<span className="brand-dot">.</span></a>
        <nav aria-label="Main navigation">
          {pages.map((item) => <a key={item} className={activePage === item.toLowerCase() ? 'active' : ''} href={goTo(item)}>{item}</a>)}
        </nav>
        <a className="header-cta" href={goTo('Contact')}>Let’s talk <span>↗</span></a>
      </header>

      <main>
        {activePage === 'home' && <>
          <section className="hero">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> Independent creative studio · Est. 2018</p>
              <h1>Make next<br />move <em>matter.</em></h1>
              <p className="hero-intro">We help ambitious teams build brands and digital experiences that move business forward.</p>
              <div className="hero-actions"><a className="button button-dark" href={goTo('Services')}>Explore what we do <span>↗</span></a><a className="text-link" href={goTo('About')}>Get to know us <span>→</span></a></div>
              <div className="hero-note"><span className="note-avatar">N</span><span>Small team. Big-picture thinking.<br /><strong>Based everywhere, working anywhere.</strong></span></div>
            </div>
            <div className="hero-art" aria-label="Abstract orange and pink sun over a lavender landscape" role="img">
              <div className="art-sun" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <div className="art-hill hill-back" /><div className="art-hill hill-front" />
              <div className="art-caption"><span>FIG. 01</span><span>GOOD THINGS<br />ARE IN MOTION</span></div>
              <div className="art-stamp">MAKE<br />IT<br /><b>MATTER</b></div>
            </div>
          </section>
          <section className="proof"><p>GOOD COMPANY, GOOD WORK</p><div className="client-list"><span>Fieldnotes</span><span>COMMON</span><span className="client-serif">wildkind</span><span>DAYBREAK®</span><span className="client-serif">form & field</span></div></section>
          <section className="intro-section"><div><p className="eyebrow">A little about us</p><h2>Clear thinking.<br /><em>Good energy.</em></h2></div><div className="intro-copy"><p>We’re a close-knit team of strategists, designers, and makers who believe the best work starts with listening. Then we make things people actually remember.</p><a className="text-link" href={goTo('About')}>More about Northstar <span>→</span></a></div></section>
          <ServicesSection />
          <ContactStrip goTo={goTo} />
        </>}
        {activePage === 'services' && <><PageIntro eyebrow="What we do" title={<>Good ideas,<br /><em>made real.</em></>} text="From the first big question to the final detail, we bring the right people together to make meaningful progress." /><ServicesSection /><ContactStrip goTo={goTo} /></>}
        {activePage === 'about' && <><PageIntro eyebrow="Who we are" title={<>Curious by nature.<br /><em>Better together.</em></>} text="Northstar is an independent creative studio for people building what comes next. We bring clarity, care, and a healthy dose of optimism to every challenge." /><section className="about-details"><div className="about-number">08<span> years of making</span></div><div><h2>Small on purpose.<br />Connected by design.</h2><p>Our senior team stays hands-on from day one. We pull in trusted specialists when the work calls for it, so every project gets the right mix of perspective and craft.</p><p>Good work should feel good to make. We value honest collaboration, considered decisions, and leaving things a little better than we found them.</p></div></section><ContactStrip goTo={goTo} /></>}
        {activePage === 'redux' && <><PageIntro eyebrow="Under the hood" title={<>A little state<br /><em>in motion.</em></>} text="This tab is a working Redux Toolkit example. Update the counter, then see the slice and store code behind it." /><ReduxSection /><ContactStrip goTo={goTo} /></>}
        {activePage === 'contact' && <><PageIntro eyebrow="Start a conversation" title={<>Tell us what<br /><em>you’re dreaming up.</em></>} text="A new venture, a knotty challenge, or just a half-formed idea? We’d love to hear about it." /><section className="contact-details"><div><p className="eyebrow">Say hello</p><a className="contact-email" href="mailto:hello@northstar.studio">hello@northstar.studio ↗</a><p className="contact-small">We usually reply within two working days.</p></div><div className="contact-card"><span>GOOD PROJECTS START WITH A HELLO</span><p>Share a little about what you’re working on and where you’d like to go. We’ll take it from there.</p><a className="button button-dark" href="mailto:hello@northstar.studio">Email the studio <span>↗</span></a></div></section></>}
      </main>

      <footer className="site-footer"><a className="brand" href={goTo('Home')}><span className="brand-mark">N</span> northstar<span className="brand-dot">.</span></a><span>Independent by nature. Northstar by name.</span><span>© 2026 Northstar Studio</span></footer>
    </div>
  )
}

function PageIntro({ eyebrow, title, text }) {
  return <section className="page-intro"><p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p><h1>{title}</h1><p className="hero-intro">{text}</p></section>
}

function ServicesSection() {
  return <section className="services-section"><div className="section-heading"><div><p className="eyebrow">How we help</p><h2>Thoughtful work.<br /><em>Lasting impact.</em></h2></div><p>Good work isn’t one-size-fits-all. We bring the right mix of thinking and making to meet you where you are.</p></div><div className="service-grid">{offerings.map((item) => <article className="service-card" key={item.number}><span className="service-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p><span className="service-arrow">↗</span></div></article>)}</div></section>
}

function ContactStrip({ goTo }) {
  return <section className="contact-strip"><div><p className="eyebrow">Have a good one in mind?</p><h2>Let’s make it <em>happen.</em></h2></div><a className="button button-light" href={goTo('Contact')}>Start a conversation <span>↗</span></a></section>
}

function ReduxSection() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState('5')
  return <section className="redux-section">
    <div className="counter-card"><p className="eyebrow">Live Redux counter</p><div className="counter-value">{count}</div><div className="counter-actions"><button className="button button-dark" onClick={() => dispatch(increment())}>Add one <span>+</span></button><label htmlFor="counter-amount">Add amount</label><input id="counter-amount" type="number" value={amount} onChange={(event) => setAmount(event.target.value)} /><button className="button button-outline" onClick={() => dispatch(bulkChange(amount))}>Update</button></div></div>
    <div className="code-card"><p className="eyebrow">src/redux/slice.js</p><pre><code>{`const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    bulkChange: (state, action) => {
      state.value += Number(action.payload) || 0
    },
  },
})`}</code></pre></div>
  </section>
}

export default App
