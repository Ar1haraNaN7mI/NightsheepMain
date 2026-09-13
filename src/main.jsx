import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import BlurText from './components/BlurText/BlurText'
import ShinyText from './components/ShinyText'
import SpotlightCard from './components/SpotlightCard'
import ClickSpark from './components/ClickSpark/ClickSpark'
import AcidSquares from './components/AcidSquares'
import FadeContent from './components/FadeContent/FadeContent'
import BounceCards from './components/BounceCards'
import ParticleText from './components/ParticleText'
import AnimatedList from './components/AnimatedList'
import ScrollReveal from './components/ScrollReveal'
import GradualBlur from './components/GradualBlur'
import StarBorder from './components/StarBorder'
import AnimatedContent from './components/AnimatedContent/AnimatedContent'
import CountUp from './components/CountUp/CountUp'
import CardSwap, { Card as SwapCard } from './components/CardSwap'

const research = [
  { date: '2025.12.12', tag: 'MILESTONE', title: '夜羊科技成立两周年', copy: '两年时间，我们把本地化 AI Agent 送进知识密集型产业。' },
  { date: '2025.09.18', tag: 'PRODUCT', title: '武小纺学院 AI 完成部署', copy: '面向校园场景的本地化大模型服务，正式进入复制阶段。' },
  { date: '2025.06.03', tag: 'RESEARCH', title: '从单体 Agent 到 Multi-Agent', copy: '用协作式智能体，重构企业真实工作流的边界。' },
]

const projects = [
  { number: '01', client: '广东省精神卫生与计算中心 × 深圳北理莫斯科人工智能研究院', name: '心语工程', description: '面向精神卫生服务的 AI Agent 与管理信息系统，让专业知识在真实场景里更快流动。', type: 'AI AGENT / SYSTEM' },
  { number: '02', client: '武汉纺织大学计算机学院', name: '武小纺学院 AI', description: '在校园内部署可控、可复制的大模型能力，把复杂的知识服务变成每个人都能使用的工具。', type: 'LOCAL DEPLOYMENT' },
  { number: '03', client: 'GOOJODOQ · 越南电商 3C 板块 Top 1', name: 'AI 达人匹配', description: '从海量创作者中快速找到最适合的合作对象，让营销决策由算法驱动。', type: 'ALGORITHM / AGENT' },
  { number: '04', client: 'Infound · 法国连续创业团队', name: 'Multi-Agent OS', description: '从产品定义到客户管理系统，全流程交付一套可以持续生长的智能工作台。', type: 'OUTSOURCING / AI' },
]

const projectImages = [
  '/projects/xinyu.svg',
  '/projects/wuxiaofang.svg',
  '/projects/match.svg',
  '/projects/agent-os.svg',
]

function Logo() {
  return <a className="logo" href="#top" aria-label="夜羊科技首页"><span className="logo-mark" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span><span className="logo-word">NightSheep <b>AI</b></span></a>
}

function Arrow({ external = false }) { return <span className="arrow" aria-hidden="true">{external ? '↗' : '→'}</span> }

function CursorDot() {
  const ref = useRef(null)
  useEffect(() => {
    let x = -80, y = -80, tx = -80, ty = -80, frame
    const move = event => { tx = event.clientX; ty = event.clientY }
    const tick = () => {
      x += (tx - x) * 0.16; y += (ty - y) * 0.16
      if (ref.current) ref.current.style.transform = `translate3d(${x - 22}px,${y - 22}px,0)`
      frame = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', move, { passive: true }); frame = requestAnimationFrame(tick)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(frame) }
  }, [])
  return <span ref={ref} className="cursor-dot" aria-hidden="true"><i /></span>
}

function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1280)
    return () => clearTimeout(timer)
  }, [])
  return <div className={`loading-screen ${hidden ? 'is-hidden' : ''}`} aria-hidden={hidden}>
    <div className="loading-inner">
      <AnimatedContent className="loading-logo-wrap" distance={28} duration={0.9} ease="power3.out" threshold={0.01}>
        <Logo />
      </AnimatedContent>
      <div className="loading-meta"><span>NIGHTSHEEP AI</span><span>INITIALIZING INTELLIGENCE</span></div>
      <div className="loading-progress"><i /></div>
    </div>
    <GradualBlur position="bottom" height="7rem" strength={2.2} divCount={6} target="parent" />
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const onScroll = () => document.body.classList.toggle('scrolled', window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const submitPrompt = (event) => {
    event.preventDefault()
    if (!prompt.trim()) return
    setSent(true)
    setPrompt('')
  }

  return <>
    <LoadingScreen />
    <header className={`nav ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#products">Agents</a><a href="#work">Business</a><a href="#contact">API</a><a href="#research">Research</a><a href="#products">Download</a><a href="#contact">Careers</a><a href="#about">About</a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? '关闭菜单' : '打开菜单'}><span></span><span></span></button>
      </div>
      <div className="mobile-nav"><a href="#products" onClick={() => setMenuOpen(false)}>Agents</a><a href="#work" onClick={() => setMenuOpen(false)}>Business</a><a href="#contact" onClick={() => setMenuOpen(false)}>API</a><a href="#research" onClick={() => setMenuOpen(false)}>Research</a><a href="#products" onClick={() => setMenuOpen(false)}>Download</a><a href="#contact" onClick={() => setMenuOpen(false)}>Careers</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a></div>
    </header>

    <main id="top">
      <ClickSpark sparkColor="#fff" sparkSize={7} sparkRadius={28} sparkCount={10} duration={520} extraScale={1.2}><section className="hero" aria-label="NightSheep AI">
        <AcidSquares
          className="hero-acid-squares"
          color1="#141414"
          color2="#414a2a"
          color3="#d4ff4f"
          detail="high"
          speed={0.42}
          waveDepth={0.95}
          zoom={1.08}
          density={7.5}
          glow={1.45}
          exposure={1350}
          spread={0.34}
          contrast={1.3}
          brightness={1.45}
          opacity={0.7}
          mouseInteraction={true}
          mouseStrength={0.14}
          mouseRadius={0.4}
          grain={false}
        />
        <div className="hero-noise"></div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-wordmark">
            <ParticleText
              text="NightSheep AI"
              particleSize={2.1}
              density={4}
              color="#f4f4f4"
              highlightColor="#ffffff"
              scatter={150}
              gatherDuration={1500}
              stagger={280}
              pointerRepel={34}
              repelRadius={150}
              idleDrift={0.8}
              trigger="hover"
              fontSize="clamp(7rem, 15.8vw, 19rem)"
              fontWeight={600}
              fontFamily="MPlus, MiSans, sans-serif"
              glow
            />
          </div>
          <div className="hero-scanlines"></div>
          <div className="hero-haze"></div>
        </div>
        <CursorDot />
        <div className="hero-copy">
          <div className="hero-subtitle"><BlurText text="Seeking the optimal conversion from energy to intelligence" delay={24} animateBy="words" direction="bottom" stepDuration={0.22} /></div>
          <form className="prompt-box" onSubmit={submitPrompt}>
            <input value={prompt} onChange={e => { setPrompt(e.target.value); setSent(false) }} placeholder="Throw me a hard one. I’m ready." aria-label="Tell NightSheep your challenge" />
            <button type="submit" aria-label="发送">{sent ? '✓' : '↑'}</button>
          </form>
          {sent && <p className="prompt-note">收到。留下联系方式，我们会带着答案回来。</p>}
        </div>
      </section></ClickSpark>

      <FadeContent className="reveal-section" blur duration={900} threshold={0.12}>
      <section className="intro section-shell" id="about">
        <div className="section-label"><span>01</span><span>WHO WE ARE</span></div>
        <div className="intro-grid"><div className="intro-title-wrap"><ScrollReveal containerClassName="intro-title-reveal" textClassName="intro-title-text" baseOpacity={0.18} baseRotation={2} blurStrength={5}>小而高效，直截了当。</ScrollReveal><span className="intro-title-accent">NIGHTSHEEP / 01</span></div><div className="intro-text"><p>北京夜羊科技有限公司成立于 2023 年。我们相信，真正有价值的智能，不应该只停留在云端的演示里。</p><p>我们为企业和创作者构建可控、可部署、能持续进化的 AI Agent，把过剩的 AI 生产力带到世界每一个角落。</p><a className="text-link" href="#contact">认识夜羊 <Arrow /></a></div></div>
        <div className="stat-row"><div><strong><CountUp to={21} duration={1.6} /><span>+</span></strong><small>正式成员</small></div><div><strong><CountUp to={5} duration={1.8} /></strong><small>核心业务方向</small></div><div><strong><CountUp to={2023} duration={2.1} /></strong><small>北京 · 成立年份</small></div><div><strong>∞</strong><small>智能的可能性</small></div></div>
      </section>
      </FadeContent>

      <FadeContent className="reveal-section" blur duration={900} delay={80} threshold={0.14}>
      <section className="research section-shell" id="research">
        <div className="section-label"><span>02</span><span>FIELD NOTES</span><a href="#contact">查看全部动态 <Arrow /></a></div>
        <div className="research-layout">
          <div className="research-intro"><ScrollReveal containerClassName="research-reveal" textClassName="research-reveal-text" baseOpacity={0.14} baseRotation={2} blurStrength={5}>持续研究，持续交付。</ScrollReveal><p>我们把每一次部署当成一次研究，把每一次研究变成真实的能力。</p><a className="text-link" href="#contact">订阅研究动态 <Arrow /></a></div>
          <div className="research-animated-wrap"><AnimatedList className="research-animated-list" items={research.map(item => `${item.tag}  ·  ${item.title}  ·  ${item.copy}`)} showGradients={false} enableArrowNavigation={false} displayScrollbar={false} itemClassName="research-animated-item" /></div>
        </div>
      </section>
      </FadeContent>

      <FadeContent className="reveal-section" blur duration={1000} delay={80} threshold={0.12}>
      <section className="work section-shell" id="work">
        <div className="section-label"><span>03</span><span>WHAT WE BUILD</span></div>
        <div className="section-heading"><h2>复杂问题，<br /><span>交给智能。</span></h2><p>从算法到系统，从一个 Agent 到一群 Agent。我们把难事拆开，再让它们重新协作。</p></div>
        <div className="project-showcase">
          <div className="project-bounce-wrap">
            <BounceCards
              className="project-bounce-cards"
              images={projectImages}
              containerWidth={560}
              containerHeight={450}
              animationDelay={0.25}
              animationStagger={0.1}
              enableHover
              transformStyles={[
                'rotate(9deg) translate(-190px)',
                'rotate(4deg) translate(-95px)',
                'rotate(-3deg)',
                'rotate(-9deg) translate(95px)',
              ]}
            />
            <p className="project-bounce-caption">SELECTED BUILDS · 2023—2026</p>
          </div>
          <div className="project-details">
            {projects.map(project => <SpotlightCard key={project.number} className="spotlight-project" spotlightColor="rgba(212,255,79,.16)"><article className="project"><div className="project-top"><span>{project.number}</span><span>{project.type}</span></div><div className="project-body"><p className="project-client">{project.client}</p><h3>{project.name}</h3><p>{project.description}</p><a href="#contact">了解项目 <Arrow /></a></div><div className="project-glow"></div></article></SpotlightCard>)}
          </div>
        </div>
      </section>
      </FadeContent>

      <FadeContent className="reveal-section" blur duration={1000} delay={100} threshold={0.12}>
      <section className="products section-shell" id="products">
        <div className="products-layout">
          <div className="products-intro">
            <p className="eyebrow">04 · PRODUCTS / AGENTS</p>
            <h2>把能力，<br /><span>交到手上。</span></h2>
            <p className="products-lede">从一个清晰的问题开始，让本地化智能体在真实工作流里持续生长。</p>
            <a className="text-link" href="#contact">获得内测邀请 <Arrow /></a>
          </div>
          <div className="product-swap-stage">
            <CardSwap width={340} height={430} cardDistance={48} verticalDistance={36} delay={4300} pauseOnHover skewAmount={5} easing="elastic">
              <SwapCard customClass="product-swap-card product-swap-card--lime"><span className="swap-card-index">01 / C-SIDE</span><div className="swap-card-orbit"><i></i><b></b></div><h3>智能格式<br />校对 Agent</h3><p>让格式规范成为可交付的能力。</p></SwapCard>
              <SwapCard customClass="product-swap-card product-swap-card--blue"><span className="swap-card-index">02 / LOCAL</span><div className="swap-card-grid"></div><h3>本地知识<br />工作台</h3><p>部署在你的数据边界之内。</p></SwapCard>
              <SwapCard customClass="product-swap-card product-swap-card--violet"><span className="swap-card-index">03 / MULTI</span><div className="swap-card-rings"><i></i><i></i><i></i></div><h3>Multi-Agent<br />OS</h3><p>让多个 Agent 协作完成复杂任务。</p></SwapCard>
            </CardSwap>
            <span className="product-swap-caption">AUTO SWAP · EVERY 4.3 SEC</span>
          </div>
        </div>
      </section>
      </FadeContent>

      <FadeContent className="reveal-section" blur duration={1000} threshold={0.15}>
      <section className="contact section-shell" id="contact"><div className="contact-inner"><p className="eyebrow">LET'S MAKE IT REAL</p><GradualBlur className="contact-title-blur" preset="subtle" target="parent" animated="scroll" opacity={0.42} /><h2>下一个难题，<br /><em>从这里开始。</em></h2><StarBorder as="a" className="contact-button" href="https://github.com/Ar1haraNaN7mI/NightsheepMain" target="_blank" rel="noreferrer" color="#d4ff4f" speed="5s" thickness={1} backgroundColor="#050505" textColor="#f4f3f0" borderColor="#353535">访问项目仓库 <Arrow external /></StarBorder><p className="contact-note">如果你正在寻找本地化 AI 方案、算法开发或全流程产品交付，欢迎通过项目仓库与我们建立联系。</p></div></section>
      </FadeContent>
    </main>

    <FadeContent className="reveal-section" blur duration={850} threshold={0.1}><footer className="footer"><div className="footer-top"><Logo /><div className="footer-links"><div><span>EXPLORE</span><a href="#about">关于夜羊</a><a href="#work">业务与案例</a><a href="#research">研究动态</a></div><div><span>CONNECT</span><a href="https://github.com/Ar1haraNaN7mI/NightsheepMain" target="_blank" rel="noreferrer">项目仓库</a><a href="https://melsnow.club/" target="_blank" rel="noreferrer">墨雪网页外包</a></div><div><span>OFFICE</span><p>北京市海淀区<br />高梁桥斜街 44 号</p></div></div></div><div className="footer-bottom"><span>© 2023—2026 北京夜羊科技有限公司</span><span>Made for the long run <b>✦</b></span></div><GradualBlur className="footer-blur" preset="footer" target="parent" opacity={0.3} /></footer></FadeContent>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
