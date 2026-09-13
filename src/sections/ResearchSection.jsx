import React from 'react'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedList from '../components/AnimatedList'
import './ResearchSection.css'

export default function ResearchSection({ items = [] }) {
  const renderItem = (item, index) => <a className="notes-section__item-link" href="#contact" aria-label={`${item.title}，联系夜羊了解详情`}><div className="notes-section__item-head"><span className="notes-section__number">{String(index + 1).padStart(2, '0')}</span><span className="notes-section__date">{item.date}</span><span className="notes-section__tag">{item.tag}</span><span className="notes-section__arrow" aria-hidden="true">↗</span></div><h3>{item.title}</h3><p>{item.copy}</p></a>
  return <section className="notes-section section-shell" id="research" aria-labelledby="notes-heading"><div className="notes-section__kicker"><span>02</span><span>FIELD NOTES</span><span className="notes-section__rule" /><a href="#contact">查看全部动态 <span aria-hidden="true">→</span></a></div><div className="notes-section__layout"><div className="notes-section__intro"><ScrollReveal as="h2" id="notes-heading" containerClassName="notes-section__reveal" textClassName="notes-section__reveal-text" baseOpacity={0.12} baseRotation={2} blurStrength={7}>{'持续研究，\n持续交付。'}</ScrollReveal><p>我们把每一次部署当成一次研究，把每一次研究变成真实的能力。</p><a className="notes-section__link" href="#contact">订阅研究动态 <span aria-hidden="true">→</span></a></div><div className="notes-section__list-wrap"><AnimatedList className="notes-section__animated-list" items={items} renderItem={renderItem} showGradients={false} enableArrowNavigation={false} displayScrollbar={false} itemClassName="notes-section__animated-item" /></div></div></section>
}
