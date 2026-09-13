import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

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

function Logo() {
  return <a className="logo" href="#top" aria-label="夜羊科技首页"><span className="logo-mark"><i></i><i></i><i></i></span><span>NightSheep<span className="logo-cn">夜羊科技</span></span></a>
}

function Arrow({ external = false }) { return <span className="arrow" aria-hidden="true">{external ? '↗' : '→'}</span> }

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
    <header className={`nav ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#about">关于夜羊</a><a href="#work">业务</a><a href="#research">研究</a><a href="#products">产品</a><a href="#contact" className="nav-cta">联系团队 <Arrow /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? '关闭菜单' : '打开菜单'}><span></span><span></span></button>
      </div>
      <div className="mobile-nav"><a href="#about" onClick={() => setMenuOpen(false)}>关于夜羊</a><a href="#work" onClick={() => setMenuOpen(false)}>业务</a><a href="#research" onClick={() => setMenuOpen(false)}>研究</a><a href="#products" onClick={() => setMenuOpen(false)}>产品</a><a href="#contact" onClick={() => setMenuOpen(false)}>联系团队 <Arrow /></a></div>
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-noise"></div><div className="orb orb-one"></div><div className="orb orb-two"></div><div className="orb-core"></div>
        <div className="hero-copy">
          <p className="eyebrow">NIGHTSHEEP TECHNOLOGY · BEIJING</p>
          <h1 id="hero-title">把智能带回<br /><em>真实世界</em></h1>
          <p className="hero-subtitle">让本地化 AI Agent 赋能知识密集型产业</p>
          <form className="prompt-box" onSubmit={submitPrompt}>
            <input value={prompt} onChange={e => { setPrompt(e.target.value); setSent(false) }} placeholder="告诉我们一个难题，我们来一起解决" aria-label="告诉夜羊你的难题" />
            <button type="submit" aria-label="发送">{sent ? '✓' : '↑'}</button>
          </form>
          <div className="hero-links"><a href="#work">探索我们的业务 <Arrow /></a><a href="#contact">与我们合作 <Arrow /></a></div>
          {sent && <p className="prompt-note">收到。留下联系方式，我们会带着答案回来。</p>}
        </div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i></i></div>
      </section>

      <section className="intro section-shell" id="about">
        <div className="section-label"><span>01</span><span>WHO WE ARE</span></div>
        <div className="intro-grid"><h2>小而高效，<br /><span>直截了当。</span></h2><div className="intro-text"><p>北京夜羊科技有限公司成立于 2023 年。我们相信，真正有价值的智能，不应该只停留在云端的演示里。</p><p>我们为企业和创作者构建可控、可部署、能持续进化的 AI Agent，把过剩的 AI 生产力带到世界每一个角落。</p><a className="text-link" href="#contact">认识夜羊 <Arrow /></a></div></div>
        <div className="stat-row"><div><strong>21<span>+</span></strong><small>正式成员</small></div><div><strong>05</strong><small>核心业务方向</small></div><div><strong>2023</strong><small>北京 · 成立年份</small></div><div><strong>∞</strong><small>智能的可能性</small></div></div>
      </section>

      <section className="research section-shell" id="research">
        <div className="section-label"><span>02</span><span>FIELD NOTES</span><a href="#contact">查看全部动态 <Arrow /></a></div>
        <div className="section-heading"><h2>持续研究，<br /><span>持续交付。</span></h2><p>我们把每一次部署当成一次研究，把每一次研究变成真实的能力。</p></div>
        <div className="research-list">{research.map((item, index) => <a className="research-item" href="#work" key={item.title}><span className="research-index">0{index + 1}</span><span className="research-date">{item.date}</span><span className="research-tag">{item.tag}</span><span className="research-title">{item.title}</span><span className="research-copy">{item.copy}</span><Arrow /></a>)}</div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-label"><span>03</span><span>WHAT WE BUILD</span></div>
        <div className="section-heading"><h2>复杂问题，<br /><span>交给智能。</span></h2><p>从算法到系统，从一个 Agent 到一群 Agent。我们把难事拆开，再让它们重新协作。</p></div>
        <div className="project-list">{projects.map(project => <article className="project" key={project.number}><div className="project-top"><span>{project.number}</span><span>{project.type}</span></div><div className="project-body"><p className="project-client">{project.client}</p><h3>{project.name}</h3><p>{project.description}</p><a href="#contact">了解项目 <Arrow /></a></div><div className="project-glow"></div></article>)}</div>
      </section>

      <section className="products section-shell" id="products">
        <div className="product-card"><div className="product-art"><div className="product-orbit orbit-a"></div><div className="product-orbit orbit-b"></div><div className="product-dot"></div></div><div className="product-copy"><p className="eyebrow">COMING SOON · C-SIDE</p><h2>智能格式<br />校对 Agent</h2><p>一个只做一件事，但把这件事做到极致的本地化 Agent。等待部署中。</p><a className="button-link" href="#contact">获得内测邀请 <Arrow /></a></div></div>
      </section>

      <section className="contact section-shell" id="contact"><div className="contact-inner"><p className="eyebrow">LET'S MAKE IT REAL</p><h2>下一个难题，<br /><em>从这里开始。</em></h2><a className="contact-button" href="mailto:hello@nightsheep.cn">hello@nightsheep.cn <Arrow external /></a><p className="contact-note">如果你正在寻找本地化 AI 方案、算法开发或全流程产品交付，欢迎直接写信给我们。</p></div></section>
    </main>

    <footer className="footer"><div className="footer-top"><Logo /><div className="footer-links"><div><span>EXPLORE</span><a href="#about">关于夜羊</a><a href="#work">业务与案例</a><a href="#research">研究动态</a></div><div><span>CONNECT</span><a href="mailto:hello@nightsheep.cn">Email</a><a href="https://github.com/Ar1haraNaN7mI/NightsheepMain" target="_blank" rel="noreferrer">GitHub</a></div><div><span>OFFICE</span><p>北京市海淀区<br />高梁桥斜街 44 号</p></div></div></div><div className="footer-bottom"><span>© 2023—2026 北京夜羊科技有限公司</span><span>Made for the long run <b>✦</b></span></div></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
