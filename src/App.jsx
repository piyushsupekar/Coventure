import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RefreshCw, Lightbulb, Rocket, Users, Target, BarChart3, LayoutDashboard, TrendingUp, ShoppingBag, HeartHandshake, Menu, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const differences = [
  { icon: RefreshCw, title: 'Two-way learning', text: 'Exchange knowledge, perspectives and skills.' },
  { icon: Lightbulb, title: 'Fresh perspectives', text: 'Bring new ideas to products, teams and customer experiences.' },
  { icon: Rocket, title: 'Innovation for growth', text: 'Explore new approaches and support creative problem-solving.' },
  { icon: Users, title: 'Cross-functional collaboration', text: 'Connect people across different roles, skills and teams.' },
  { icon: Target, title: 'Talent discovery', text: 'Recognize emerging skills and encourage continuous development.' },
]

const industries = [
  { icon: BarChart3, title: 'B2B & D2C brands', text: 'Understand your customers, build better products and experiences.' },
  { icon: LayoutDashboard, title: 'UX & product teams', text: 'Turn user insights into meaningful solutions.' },
  { icon: TrendingUp, title: 'Startups & scale-ups', text: 'Gain fresh ideas, reimagine possibilities, accelerate growth.' },
  { icon: ShoppingBag, title: 'Consumer brands', text: 'Stay closer to your consumers and create stronger connections.' },
  { icon: HeartHandshake, title: 'Talent & HR teams', text: 'Discover potential, build future-ready teams.' },
]

const steps = [
  { title: 'Companies share real problems', text: 'Teams bring live challenges: a product question, a customer gap, a growth goal.' },
  { title: 'Talent brings fresh thinking', text: 'Emerging professionals propose ideas and solutions from a different angle.' },
  { title: 'Both sides teach and learn', text: 'Skills, context and feedback flow in both directions throughout the project.' },
  { title: 'Everyone grows', text: 'Companies ship better ideas. Talent builds proof of skill and a network.' },
]

const links = [['About', '#about'], ['Why CoVenture', '#different'], ['Industries', '#industries'], ['How it works', '#how'], ['Contact', '#contact']]

const emailHref = 'mailto:?subject=Partnering%20with%20CoVenture&body=Hi%20CoVenture%20team%2C%0A%0AI%27d%20like%20to%20learn%20more%20about%20partnering%20with%20CoVenture.%0A'

const heroNotes = [
  { text: 'New ideas', className: 'left-[58%] top-[2%] text-ink' },
  { text: 'Fresh perspectives', className: 'left-[8%] top-[20%] text-white' },
  { text: 'Real problems', className: 'left-[6%] top-[48%] text-white' },
  { text: 'Shared solutions', className: 'left-[53%] top-[76%] text-white' },
]

export default function App() {
  const root = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduce) return
      // One orchestrated hero entrance
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-line', { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.14 })
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
        .from('.hero-note', { scale: 0.6, opacity: 0, duration: 0.5, stagger: 0.12 }, '-=0.5')
      // Floating annotations
      gsap.to('.hero-note', { y: -8, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.3 })
      // Process steps draw in as you scroll
      gsap.from('.step', { opacity: 0, x: -40, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: '#how', start: 'top 70%' } })
      gsap.from('.equation > *', { opacity: 0, scale: 0.8, stagger: 0.15, scrollTrigger: { trigger: '.equation', start: 'top 85%' } })
    }, root)

    return () => ctx.revert()
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={root}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" onClick={(e) => go(e, '#top')} className="text-xl font-extrabold tracking-tight">Co<span className="text-teal">Venture</span></a>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            {links.map(([l, h]) => <li key={h}><a href={h} onClick={(e) => go(e, h)} className="hover:text-teal">{l}</a></li>)}
          </ul>
          <a href={emailHref} className="hidden rounded-full bg-ink px-5 py-2 text-sm font-bold text-white hover:bg-teal-deep md:block">Partner with us</a>
          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </nav>
        {open && (
          <ul className="space-y-1 border-t border-ink/10 bg-paper px-5 py-3 md:hidden">
            {links.map(([l, h]) => <li key={h}><a href={h} onClick={(e) => go(e, h)} className="block py-2 font-medium">{l}</a></li>)}
          </ul>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-mint to-paper pt-32 pb-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div>
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                <span className="block overflow-hidden"><span className="hero-line block">Not just</span></span>
                <span className="block overflow-hidden"><span className="hero-line block">an internship.</span></span>
                <span className="block overflow-hidden"><span className="hero-line block text-teal">A new way</span></span>
                <span className="block overflow-hidden pb-2"><span className="hero-line block text-teal">to grow.</span></span>
              </h1>
              <p className="hero-sub mt-6 max-w-md text-lg leading-relaxed text-ink/80">
                CoVenture is a reverse internship platform where businesses and talent exchange skills, solve real challenges, and grow together.
              </p>
              <div className="hero-sub mt-8 flex flex-wrap gap-4">
                <a href={emailHref} className="rounded-full bg-ink px-7 py-3 font-bold text-white hover:bg-teal-deep">Partner with CoVenture</a>
                <a href="#how" onClick={(e) => go(e, '#how')} className="rounded-full border-2 border-ink px-7 py-3 font-bold hover:bg-ink hover:text-white">See how it works</a>
              </div>
            </div>
            <div className="relative mx-auto h-[26rem] w-full max-w-md">
              <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-ink" />
              <div className="absolute bottom-6 right-0 h-64 w-64 rounded-full bg-teal mix-blend-multiply" />
              <span className="absolute left-6 top-28 text-2xl font-bold text-white">Companies</span>
              <span className="absolute bottom-24 right-8 text-2xl font-bold text-white">Talent</span>
              {heroNotes.map(({ text, className }) => (
                <span key={text} className={`hero-note absolute z-10 whitespace-nowrap font-hand text-xl font-semibold sm:text-2xl ${className}`}>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-5">
          <h2 className="text-4xl font-extrabold tracking-tight md:col-span-2">About us</h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink/85 md:col-span-3">
            <p>Most internships run one way: a company teaches, a student learns. CoVenture flips that. Talent brings current tools, fresh thinking and a different view of your customers. Businesses bring real problems and the context to solve them.</p>
            <p>We connect B2B and D2C brands, product teams, startups, consumer brands and HR teams with emerging professionals, so both sides leave with new skills and better ideas.</p>
            <p className="font-hand text-3xl text-teal">Learn. Share. Grow.</p>
          </div>
        </section>

        {/* DIFFERENT */}
        <section id="different" className="bg-mint py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-extrabold tracking-tight">What makes CoVenture different</h2>
            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {differences.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-white text-teal"><Icon size={26} /></div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="text-4xl font-extrabold tracking-tight">Real impact across industries</h2>
          <ul className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
            {industries.map(({ icon: Icon, title, text }) => (
              <li key={title} className="grid items-center gap-3 py-6 transition-colors hover:bg-mint/60 sm:grid-cols-[3rem_1fr_1.4fr] sm:gap-8 sm:px-4">
                <Icon className="text-teal" size={28} />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-ink/75">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* HOW */}
        <section id="how" className="bg-ink py-24 text-white">
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

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Let’s build a stronger, smarter future together.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/80">Tell us about your team and the problems you want fresh eyes on. We’ll get back with the next steps.</p>
          <a href={emailHref} className="mt-8 inline-block rounded-full bg-teal px-8 py-4 text-lg font-bold text-white hover:bg-teal-deep">Partner with CoVenture</a>
        </section>
      </main>

      <footer className="border-t border-ink/10 py-8 text-center text-sm text-ink/70">
        <p className="font-bold text-ink">CoVenture · Grow together, build together</p>
        <p className="mt-1">© {new Date().getFullYear()} CoVenture. All rights reserved.</p>
      </footer>
    </div>
  )
}
