import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RefreshCw, Lightbulb, Rocket, Users, Target, BarChart3, LayoutDashboard, TrendingUp, ShoppingBag, HeartHandshake, Menu, X, Sun, Moon, Check, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const differences = [
  { icon: RefreshCw, title: 'Two-way learning', text: 'Exchange knowledge, perspectives and skills.' },
  { icon: Lightbulb, title: 'Fresh perspectives', text: 'Bring new ideas to products, teams and customer experiences.' },
  { icon: Rocket, title: 'Innovation for growth', text: 'Explore new approaches and support creative problem-solving.' },
  { icon: Users, title: 'Cross-functional collaboration', text: 'Connect people across different roles, skills and teams.' },
  { icon: Target, title: 'Talent discovery', text: 'Recognize emerging skills and encourage continuous development.' },
]
const industries = [
  { icon: BarChart3, title: 'B2B & D2C brands', text: 'Understand your customers, build better products and experiences.', ex: 'Why do trial users drop off before their first order?' },
  { icon: LayoutDashboard, title: 'UX & product teams', text: 'Turn user insights into meaningful solutions.', ex: 'How can onboarding feel obvious to a first-time user?' },
  { icon: TrendingUp, title: 'Startups & scale-ups', text: 'Gain fresh ideas, reimagine possibilities, accelerate growth.', ex: 'Which new audience should we test next quarter?' },
  { icon: ShoppingBag, title: 'Consumer brands', text: 'Stay closer to your consumers and create stronger connections.', ex: 'What do younger shoppers expect from our packaging and app?' },
  { icon: HeartHandshake, title: 'Talent & HR teams', text: 'Discover potential, build future-ready teams.', ex: 'How do we spot emerging skills before we hire?' },
]
const steps = [
  { title: 'Companies share real problems', text: 'Teams bring live challenges: a product question, a customer gap, a growth goal.' },
  { title: 'Talent brings fresh thinking', text: 'Emerging professionals propose ideas and solutions from a different angle.' },
  { title: 'Both sides teach and learn', text: 'Skills, context and feedback flow in both directions throughout the project.' },
  { title: 'Everyone grows', text: 'Companies ship better ideas. Talent builds proof of skill and a network.' },
]
const forCompanies = ['Fresh ideas on real products and customers', 'Early sight of emerging skills', 'Cross-team collaboration on live problems']
const forTalent = ['Work on real challenges, not busywork', 'Mentorship and feedback from teams', 'Proof of skill you can show']
const words = ['Two-way learning', 'Fresh perspectives', 'Real problems', 'Shared solutions', 'Talent discovery', 'Innovation for growth']
const links = [['About', '#about'], ['Why us', '#different'], ['Industries', '#industries'], ['How it works', '#how'], ['Contact', '#contact']]
const emailHref = 'mailto:?subject=Partnering%20with%20CoVenture&body=Hi%20CoVenture%20team%2C%0A%0AI%27d%20like%20to%20learn%20more%20about%20partnering%20with%20CoVenture.%0A'

export default function App() {
  const root = useRef(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('cv-theme', next) } catch (e) {}
  }

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduce) return
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-line', { yPercent: 110, duration: 0.9, stagger: 0.12 })
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.4')
        .from('.orb', { scale: 0.7, opacity: 0, duration: 1, stagger: 0.15 }, '-=0.9')
      // Signature moment: companies and talent converge as you scroll
      gsap.to('.orb-a', { x: 70, scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.to('.orb-b', { x: -70, scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: 1 } })
      gsap.to('.note', { y: -8, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.3 })
      gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { scrub: 0.3, start: 0, end: 'max' } })
      gsap.from('.reveal', { y: 40, opacity: 0, duration: 0.8, stagger: 0.12, scrollTrigger: { trigger: '#different', start: 'top 70%' } })
      gsap.from('.step', { opacity: 0, x: -40, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: '#how', start: 'top 70%' } })
      gsap.from('.equation > *', { opacity: 0, scale: 0.8, stagger: 0.15, scrollTrigger: { trigger: '.equation', start: 'top 90%' } })
    }, root)
    return () => ctx.revert()
  }, [])

  const go = (e, href) => {
    e.preventDefault(); setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    location.href = `mailto:?subject=${encodeURIComponent('Partnering with CoVenture – ' + f.get('company'))}&body=${encodeURIComponent(`${f.get('message')}\n\n${f.get('name')} (${f.get('email')})`)}`
  }
  const A = industries[active]
  const field = 'w-full rounded-xl border border-line bg-card px-4 py-3 outline-none focus:border-teal'

  return (
    <div ref={root}>
      <div className="progress fixed inset-x-0 top-0 z-[60] h-1 origin-left scale-x-0 bg-teal" />
      <header className="fixed inset-x-0 top-1 z-50 mx-auto max-w-6xl px-3">
        <nav className="flex h-14 items-center justify-between rounded-full border border-line bg-paper/80 px-5 backdrop-blur-xl">
          <a href="#top" onClick={(e) => go(e, '#top')} className="text-xl font-extrabold tracking-tight">Co<span className="text-teal">Venture</span></a>
          <ul className="hidden gap-7 text-sm font-medium md:flex">
            {links.map(([l, h]) => <li key={h}><a href={h} onClick={(e) => go(e, h)} className="hover:text-teal">{l}</a></li>)}
          </ul>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="grid h-9 w-9 place-items-center rounded-full border border-line hover:border-teal hover:text-teal">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href={emailHref} className="hidden rounded-full bg-teal px-5 py-2 text-sm font-bold text-paper md:block">Partner with us</a>
            <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          </div>
        </nav>
        {open && <ul className="mt-2 rounded-2xl border border-line bg-paper p-3 md:hidden">{links.map(([l, h]) => <li key={h}><a href={h} onClick={(e) => go(e, h)} className="block px-3 py-2 font-medium">{l}</a></li>)}</ul>}
      </header>

      <main id="top">
        <section className="relative overflow-hidden pb-20 pt-36">
          <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-teal/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="hero-sub font-hand text-3xl text-teal">Learn. Share. Grow.</p>
              <h1 className="mt-2 text-5xl font-extrabold leading-[1.04] tracking-tight md:text-7xl">
                <span className="block overflow-hidden"><span className="hero-line block">Not just</span></span>
                <span className="block overflow-hidden"><span className="hero-line block">an internship.</span></span>
                <span className="block overflow-hidden pb-2"><span className="hero-line grad-text block">A new way to grow.</span></span>
              </h1>
              <p className="hero-sub mt-6 max-w-md text-lg leading-relaxed text-ink/75">CoVenture is a reverse internship platform where businesses and talent exchange skills, solve real challenges, and grow together.</p>
              <div className="hero-sub mt-8 flex flex-wrap gap-4">
                <a href={emailHref} className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-bold text-paper shadow-lg shadow-teal/30">Partner with CoVenture <ArrowRight size={18} /></a>
                <a href="#how" onClick={(e) => go(e, '#how')} className="rounded-full border-2 border-line px-7 py-3.5 font-bold hover:border-teal hover:text-teal">See how it works</a>
              </div>
            </div>
            <div className="relative mx-auto h-[26rem] w-full max-w-md">
              <div className="orb orb-a absolute left-0 top-10 grid h-64 w-64 place-items-center rounded-full bg-deep text-xl font-bold text-white"><span className="-translate-x-6">Companies</span></div>
              <div className="orb orb-b absolute bottom-6 right-0 grid h-64 w-64 place-items-center rounded-full bg-teal/90 text-xl font-bold text-paper mix-blend-screen"><span className="translate-x-6">Talent</span></div>
              {[['New ideas', '0%', '55%'], ['Real problems', '46%', '-2%'], ['Fresh perspectives', '4%', '0%'], ['Shared solutions', '84%', '26%']].map(([t, top, left]) => (
                <span key={t} className="note absolute rounded-full border border-line bg-card px-3 py-1 font-hand text-xl shadow-md" style={{ top, left }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-line bg-mint py-4">
          <div className="marquee flex w-max gap-10 whitespace-nowrap text-lg font-bold">
            {[...words, ...words].map((w, i) => <span key={i} className="flex items-center gap-10">{w}<span className="text-teal">✦</span></span>)}
          </div>
        </div>

        <section id="about" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-5">
          <div className="md:col-span-2"><h2 className="text-4xl font-extrabold tracking-tight">About us</h2><p className="mt-3 font-hand text-3xl text-teal">Grow together, build together</p></div>
          <div className="space-y-5 text-lg leading-relaxed text-ink/85 md:col-span-3">
            <p>Most internships run one way: a company teaches, a student learns. CoVenture flips that. Talent brings current tools, fresh thinking and a different view of your customers. Businesses bring real problems and the context to solve them.</p>
            <p>We connect B2B and D2C brands, product teams, startups, consumer brands and HR teams with emerging professionals, so both sides leave with new skills and better ideas.</p>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {[['Learn', 'Pick up skills from people who see things differently.'], ['Share', 'Trade knowledge, context and feedback openly.'], ['Grow', 'Leave with better ideas and a stronger team.']].map(([t, x]) => (
                <div key={t} className="rounded-2xl border border-line bg-card p-5"><h3 className="text-xl font-bold text-teal">{t}</h3><p className="mt-1 text-sm text-ink/75">{x}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="different" className="bg-mint py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-extrabold tracking-tight">What makes CoVenture different</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {differences.map(({ icon: Icon, title, text }) => (
                <div key={title} className="reveal rounded-3xl border border-line bg-card p-6 transition hover:-translate-y-1 hover:border-teal">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-soft text-teal"><Icon size={24} /></div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="text-4xl font-extrabold tracking-tight">Real impact across industries</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-2" role="tablist">
              {industries.map(({ icon: Icon, title }, i) => (
                <button key={title} role="tab" aria-selected={i === active} onClick={() => setActive(i)}
                  className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left text-lg font-bold transition ${i === active ? 'border-teal bg-teal text-paper' : 'border-line bg-card hover:border-teal'}`}>
                  <Icon size={22} />{title}
                </button>
              ))}
            </div>
            <div key={active} className="rounded-3xl border border-line bg-card p-8 lg:p-10">
              <A.icon className="text-teal" size={40} />
              <h3 className="mt-4 text-3xl font-extrabold">{A.title}</h3>
              <p className="mt-3 text-lg text-ink/80">{A.text}</p>
              <div className="mt-8 rounded-2xl bg-mint p-5">
                <p className="text-sm font-bold text-teal">A problem a team might bring</p>
                <p className="mt-1 font-hand text-2xl">“{A.ex}”</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-mint py-24">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2">
            {[['For companies', forCompanies], ['For talent', forTalent]].map(([t, list]) => (
              <div key={t} className="rounded-3xl border border-line bg-card p-8">
                <h3 className="text-2xl font-extrabold">{t}</h3>
                <ul className="mt-5 space-y-3">{list.map((x) => <li key={x} className="flex gap-3"><Check className="mt-0.5 shrink-0 text-teal" size={20} />{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="bg-deep py-24 text-white">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="text-4xl font-extrabold tracking-tight">How it works</h2>
            <ol className="mt-12 space-y-8">
              {steps.map((s, i) => (
                <li key={s.title} className="step flex gap-6 border-l-2 border-teal pl-6">
                  <span className="text-3xl font-extrabold text-teal">{i + 1}</span>
                  <div><h3 className="text-xl font-bold">{s.title}</h3><p className="mt-1 text-white/75">{s.text}</p></div>
                </li>
              ))}
            </ol>
            <div className="equation mt-16 flex flex-wrap items-center gap-4 text-xl font-bold">
              <span>Companies</span><span className="text-teal">+</span><span>Talent</span><span className="text-teal">=</span><span className="text-teal">Greater possibilities</span>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Let’s build a stronger, smarter future together.</h2>
            <p className="mt-5 text-lg text-ink/80">Tell us about your team and the problems you want fresh eyes on. We’ll get back with the next steps.</p>
            <p className="mt-6 font-hand text-3xl text-teal">Better people. Better ideas. Bigger impact.</p>
          </div>
          <form onSubmit={submit} className="space-y-4 rounded-3xl border border-line bg-card p-6 lg:p-8">
            <input required name="name" placeholder="Your name" aria-label="Your name" className={field} />
            <input required type="email" name="email" placeholder="Work email" aria-label="Work email" className={field} />
            <input required name="company" placeholder="Company" aria-label="Company" className={field} />
            <textarea required name="message" rows="4" placeholder="What problem should we start with?" aria-label="Message" className={field} />
            <button className="w-full rounded-full bg-teal px-7 py-3.5 font-bold text-paper">Send message</button>
          </form>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-ink/70">
        <p className="font-bold text-ink">CoVenture · Grow together, build together</p>
        <p className="mt-1">© {new Date().getFullYear()} CoVenture. All rights reserved.</p>
      </footer>
    </div>
  )
}
