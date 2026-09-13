import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import GradientWaves from './components/GradientWaves'
import SeamlessWordmark from './components/SeamlessWordmark'
import BlurText from './components/BlurText/BlurText'
import ClickSpark from './components/ClickSpark/ClickSpark'
import AnimatedContent from './components/AnimatedContent/AnimatedContent'
import GradualBlur from './components/GradualBlur'
import StarBorder from './components/StarBorder'
import AboutSection from './sections/AboutSection'
import ResearchSection from './sections/ResearchSection'
import WorkSection from './sections/WorkSection'
import ProductSection from './sections/ProductSection'

const research = [
  { date: '2025.12.12', tag: 'MILESTONE', title: '夜羊科技成立两周年', copy: '两年时间，我们把本地化 AI Agent 送进知识密集型产业。' },
  { date: '2025.09.18', tag: 'PRODUCT', title: '武小纺学院 AI 完成部署', copy: '面向校园场景的本地化大模型服务，正式进入复制阶段。' },
  { date: '2025.06.03', tag: 'RESEARCH', title: '从单体 Agent 到 Multi-Agent', copy: '用协作式智能体，重构企业真实工作流的边界。' }
]

const projects = [
  { number: '01', client: '广东省精神卫生与计算中心 × 深圳北理莫斯科人工智能研究院', name: '心语工程', description: '面向精神卫生服务的 AI Agent 与管理信息系统，让专业知识在真实场景里更快流动。', type: 'AI AGENT / SYSTEM' },
  { number: '02', client: '武汉纺织大学计算机学院', name: '武小纺学院 AI', description: '在校园内部署可控、可复制的大模型能力，把复杂的知识服务变成每个人都能使用的工具。', type: 'LOCAL DEPLOYMENT' },
  { number: '03', client: 'GOOJODOQ · 越南电商 3C 板块 Top 1', name: 'AI 达人匹配', description: '从海量创作者中快速找到最适合的合作对象，让营销决策由算法驱动。', type: 'ALGORITHM / AGENT' },
  { number: '04', client: 'Infound · 法国连续创业团队', name: 'Multi-Agent OS', description: '从产品定义到客户管理系统，全流程交付一套可以持续生长的智能工作台。', type: 'OUTSOURCING / AI' }
]

const projectImages = ['/projects/xinyu.svg', '/projects/wuxiaofang.svg', '/projects/match.svg', '/projects/agent-os.svg']

function Logo() { return <a className="logo" href="#top" aria-label="夜羊科技首页"><span className="logo-mark" aria-hidden="true"><i /><i /><i /><i /><i /></span><span className="logo-word">NightSheep <b>AI</b></span></a> }
function Arrow({ external = false }) { return <span className="arrow" aria-hidden="true">{external ? '↗' : '→'}</span> }

function CursorDot() {
  const ref = useRef(null)
  useEffect(() => { let x = -80; let y = -80; let tx = -80; let ty = -80; let frame; const move = event => { tx = event.clientX; ty = event.clientY }; const tick = () => { x += (tx - x) * .16; y += (ty - y) * .16; if (ref.current) ref.current.style.transform = `translate3d(${x - 22}px,${y - 22}px,0)`; frame = requestAnimationFrame(tick) }; window.addEventListener('pointermove', move, { passive: true }); frame = requestAnimationFrame(tick); return () => { window.removeEventListener('pointermove', move); cancelAnimationFrame(frame) } }, [])
  return <span ref={ref} className="cursor-dot" aria-hidden="true"><i /></span>
}

function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  useEffect(() => { const timer = setTimeout(() => setHidden(true), 1250); return () => clearTimeout(timer) }, [])
  return <div className={`loading-screen ${hidden ? 'is-hidden' : ''}`} aria-hidden={hidden}><div className="loading-inner"><AnimatedContent className="loading-logo-wrap" distance={24} duration={.72} ease="power3.out" threshold={.01}><Logo /></AnimatedContent><div className="loading-meta"><span>NIGHTSHEEP AI</span><span>INITIALIZING INTELLIGENCE</span></div><div className="loading-progress"><i /></div></div><GradualBlur position="bottom" height="7rem" strength={1.8} divCount={5} target="parent" /></div>
}

function Hero() {
  return <ClickSpark sparkColor="#eeeaff" sparkSize={7} sparkRadius={28} sparkCount={10} duration={520} extraScale={1.1}><section className="hero" aria-label="NightSheep AI"><div className="hero-veil" /><div className="hero-visual" aria-hidden="true"><div className="hero-wordmark"><SeamlessWordmark /></div><div className="hero-scanlines" /><div className="hero-haze" /></div><CursorDot /><div className="hero-copy"><div className="hero-subtitle"><BlurText text="Seeking the optimal conversion from energy to intelligence" delay={24} animateBy="words" direction="bottom" stepDuration={.22} /></div></div></section></ClickSpark>
}

function ContactSection() { return <section className="contact-section" id="contact" aria-labelledby="contact-heading"><div className="contact-section__eyebrow">LET'S MAKE IT REAL</div><div className="contact-section__grid"><div><h2 id="contact-heading">下一个难题，<br /><em>从这里开始。</em></h2><StarBorder as="a" className="contact-section__button" href="https://github.com/Ar1haraNaN7mI/NightsheepMain" target="_blank" rel="noreferrer" color="#8f78c5" speed="6s" thickness={1} backgroundColor="#08070e" textColor="#f5f1ff" borderColor="#39314d">访问项目仓库 <Arrow external /></StarBorder></div><p>如果你正在寻找本地化 AI 方案、算法开发或全流程产品交付，欢迎通过项目仓库与我们建立联系。</p></div></section> }

function Footer() { return <footer className="site-footer"><div className="site-footer__top"><Logo /><div className="site-footer__links"><div><span>EXPLORE</span><a href="#about">关于夜羊</a><a href="#work">业务与案例</a><a href="#research">研究动态</a></div><div><span>CONNECT</span><a href="https://github.com/Ar1haraNaN7mI/NightsheepMain" target="_blank" rel="noreferrer">项目仓库</a><a href="mailto:hello@nightsheep.ai">联系我们</a></div><div><span>OFFICE</span><p>北京市海淀区<br />高梁桥斜街 44 号</p></div></div></div><div className="site-footer__bottom"><span>© 2023—2026 北京夜羊科技有限公司</span><span>Made for the long run <b>✦</b></span></div></footer> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const onScroll = () => document.body.classList.toggle('scrolled', window.scrollY > 32); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  return <><div className="site-background" aria-hidden="true"><GradientWaves className="site-gradient-waves" horizonColor="#080611" waveColor="#241842" crestColor="#8066c8" speed={.18} amplitude={1.7} waveScale={.55} waveRatio={.86} swell={24} turbulence={14} tilt={1.05} zoom={1.06} height={5} fogDepth={12} detail="medium" brightness={.52} opacity={.68} mouseInteraction={false} parallaxStrength={.3} grain={false} /></div><LoadingScreen /><header className={`nav ${menuOpen ? 'menu-open' : ''}`}><div className="nav-inner"><Logo /><nav className="desktop-nav" aria-label="主导航"><a href="#work">Agents</a><a href="#work">Business</a><a href="#products">API</a><a href="#research">Research</a><a href="#products">Download</a><a href="#contact">Careers</a><a href="#about">About</a></nav><button className="menu-toggle" onClick={() => setMenuOpen(value => !value)} aria-label={menuOpen ? '关闭菜单' : '打开菜单'}><span /><span /></button></div><nav className="mobile-nav" aria-label="移动端主导航"><a href="#work" onClick={() => setMenuOpen(false)}>Agents</a><a href="#work" onClick={() => setMenuOpen(false)}>Business</a><a href="#products" onClick={() => setMenuOpen(false)}>API</a><a href="#research" onClick={() => setMenuOpen(false)}>Research</a><a href="#products" onClick={() => setMenuOpen(false)}>Download</a><a href="#contact" onClick={() => setMenuOpen(false)}>Careers</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a></nav></header><main id="top"><Hero /><AboutSection /><ResearchSection items={research} /><WorkSection projects={projects} projectImages={projectImages} /><ProductSection /><ContactSection /></main><Footer /></>
}

createRoot(document.getElementById('root')).render(<App />)
