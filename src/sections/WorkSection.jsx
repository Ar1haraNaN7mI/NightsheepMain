import React from 'react'
import BounceCards from '../components/BounceCards'
import SpotlightCard from '../components/SpotlightCard'
import './WorkSection.css'

const fallbackProjects = [
  { number: '01', client: 'AI AGENT / SYSTEM', name: '心语工程', description: '面向精神卫生服务的 AI Agent 与管理信息系统，让专业知识在真实场景里更快流动。', type: '广东省精神卫生与计算中心' },
  { number: '02', client: 'LOCAL DEPLOYMENT', name: '武小纺学院 AI', description: '在校园内部署可控、可复制的大模型能力，把复杂的知识服务变成每个人都能使用的工具。', type: '武汉纺织大学计算机学院' },
  { number: '03', client: 'ALGORITHM / AGENT', name: 'AI 达人匹配', description: '从海量创作者中快速找到最适合的合作对象，让营销决策由算法驱动。', type: 'GOOJODOQ · 越南电商 3C' },
  { number: '04', client: 'OUTSOURCING / AI', name: 'Multi-Agent OS', description: '从产品定义到客户管理系统，全流程交付一套可以持续生长的智能工作台。', type: 'Infound · 法国连续创业团队' },
]

export default function WorkSection({ projects = fallbackProjects, projectImages = [] }) {
  const items = projects.length ? projects : fallbackProjects
  return (
    <section className="work-section" id="work">
      <div className="work-section__label"><span>03</span><span>WHAT WE BUILD</span><span className="work-section__rule" /></div>
      <div className="work-section__heading">
        <h2>复杂问题，<br /><em>交给智能。</em></h2>
        <p>从算法到系统，从一个 Agent 到一群 Agent。我们把难事拆开，再让它们重新协作。</p>
      </div>
      <div className="work-section__grid">
        <div className="work-section__visual">
          <div className="work-section__visual-kicker">SELECTED BUILDS <b>·</b> 2023—2026</div>
          <div className="work-section__bounce-frame">
            <BounceCards
              className="work-section__bounce"
              images={projectImages}
              containerWidth="100%"
              containerHeight="100%"
              animationDelay={0.18}
              animationStagger={0.1}
              enableHover
              startOnView
              viewThreshold={0.24}
              transformStyles={['rotate(9deg) translate(-114px)', 'rotate(4deg) translate(-38px)', 'rotate(-4deg) translate(38px)', 'rotate(-9deg) translate(114px)']}
            />
          </div>
          <div className="work-section__visual-foot"><span>04 PROJECTS</span><span>HOVER TO EXPLORE</span></div>
        </div>
        <div className="work-section__details">
          {items.slice(0, 4).map((project) => (
            <SpotlightCard key={project.number} className="work-section__spotlight" spotlightColor="rgba(190,165,255,.17)">
              <article className="work-section__project">
                <div className="work-section__project-top"><span className="work-section__project-number">{project.number}</span><span>{project.client}</span></div>
                <div className="work-section__project-body"><span className="work-section__project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><a href="#contact">了解项目 <span>→</span></a></div>
              </article>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
