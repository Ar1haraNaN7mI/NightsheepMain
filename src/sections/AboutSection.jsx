import React from 'react'
import ScrollReveal from '../components/ScrollReveal'
import CountUp from '../components/CountUp/CountUp'
import TiltedCard from '../components/TiltedCard'
import './AboutSection.css'

const stats = [
  { value: 21, suffix: '+', label: '正式成员' },
  { value: 5, label: '核心业务方向' },
  { value: 2023, label: '北京 · 成立年份' },
]
const capabilityArt = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420"%3E%3Crect width="640" height="420" fill="%230d0a17"/%3E%3Cg fill="none" stroke="%23a78bfa" stroke-opacity=".33"%3E%3Cpath d="M-20 340 150 120l120 120L420 62l240 180"/%3E%3Cpath d="M-20 370 160 180l90 82L430 110l230 144"/%3E%3C/g%3E%3Cg fill="%23d4ff4f" fill-opacity=".8"%3E%3Ccircle cx="150" cy="120" r="4"/%3E%3Ccircle cx="420" cy="62" r="4"/%3E%3C/g%3E%3C/svg%3E'

export default function AboutSection() {
  return <section className="about-section section-shell" id="about" aria-labelledby="about-heading">
    <div className="about-section__kicker"><span>01</span><span>WHO WE ARE</span><span className="about-section__rule" /></div>
    <div className="about-section__grid">
      <div className="about-section__headline"><ScrollReveal as="h2" id="about-heading" containerClassName="about-section__reveal" textClassName="about-section__reveal-text" baseOpacity={0.12} baseRotation={2} blurStrength={7}>{'小而高效，\n直截了当。'}</ScrollReveal><p className="about-section__index">NIGHTSHEEP / 2023—2026</p></div>
      <div className="about-section__story"><p className="about-section__lead">北京夜羊科技有限公司成立于 2023 年。我们相信，真正有价值的智能，不应该只停留在云端的演示里。</p><p>我们为企业和创作者构建可控、可部署、能持续进化的 AI Agent，把过剩的 AI 生产力带到世界每一个角落。</p><a className="about-section__link" href="#contact">认识夜羊 <span aria-hidden="true">→</span></a><div className="about-section__capability"><TiltedCard imageSrc={capabilityArt} altText="抽象能力图谱" captionText="CONTROL · DEPLOY · EVOLVE" containerHeight="260px" containerWidth="100%" imageHeight="260px" imageWidth="100%" rotateAmplitude={8} scaleOnHover={1.035} showMobileWarning={false} displayOverlayContent overlayContent={<div className="about-section__capability-overlay"><span>CAPABILITY MAP</span><strong>把智能带进<br />真实工作流。</strong><small>可控 · 可部署 · 持续进化</small></div>} /></div></div>
    </div>
    <div className="about-section__stats" aria-label="夜羊科技数据">{stats.map(stat => <div className="about-section__stat" key={stat.label}><strong><CountUp to={stat.value} duration={1.7} /><span>{stat.suffix}</span></strong><span>{stat.label}</span></div>)}<div className="about-section__stat"><strong>∞</strong><span>智能的可能性</span></div></div>
  </section>
}
