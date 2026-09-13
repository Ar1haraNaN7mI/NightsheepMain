import { useState } from 'react'
import CardSwap, { Card as SwapCard } from '../components/CardSwap'
import './ProductSection.css'

const STATES = [
  {
    code: '01',
    label: 'OVERVIEW',
    title: '智能格式校对 Agent',
    text: '面向知识密集型团队，把格式规范、校对逻辑与交付标准整理成一个可调用的智能工作单元。',
    cta: '了解内测计划',
    cardClass: 'product-state-card--violet',
  },
  {
    code: '02',
    label: 'WORKFLOW',
    title: '从检查到交付',
    text: '导入原始文档，Agent 按照团队规则检查、标注并给出修改建议，让重复校对变成清晰的工作流。',
    cta: '查看工作方式',
    cardClass: 'product-state-card--ink',
  },
  {
    code: '03',
    label: 'PRIVATE BETA',
    title: '等待你的难题',
    text: '智能格式校对 Agent 正在内测。留下一个真实场景，我们会带着更贴近交付的答案回来。',
    cta: '申请内测',
    cardClass: 'product-state-card--plum',
  },
]

export default function ProductSection() {
  const [active, setActive] = useState(0)
  const state = STATES[active]

  const select = index => setActive(index)

  return (
    <section className="product-section" id="products" aria-labelledby="product-title">
      <div className="product-section__head">
        <div className="product-section__label"><span>04</span><span>PRODUCT / AGENT</span></div>
        <p className="product-section__kicker">ONE PRODUCT · THREE STATES</p>
      </div>

      <div className="product-section__tabs" role="tablist" aria-label="智能格式校对 Agent 状态">
        {STATES.map((item, index) => (
          <button
            key={item.code}
            className={`product-section__tab ${active === index ? 'is-active' : ''}`}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls={`product-panel-${item.code}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => select(index)}
            onKeyDown={event => {
              if (event.key === 'ArrowRight' || event.key === 'ArrowDown') { event.preventDefault(); select((index + 1) % STATES.length) }
              if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') { event.preventDefault(); select((index + STATES.length - 1) % STATES.length) }
            }}
          >
            <span>{item.code}</span><strong>{item.label}</strong><i aria-hidden="true">{active === index ? '↗' : '→'}</i>
          </button>
        ))}
      </div>

      <div className="product-section__body">
        <div className="product-section__visual" aria-label="产品状态卡片">
          <CardSwap
            width={300}
            height={380}
            cardDistance={42}
            verticalDistance={32}
            skewAmount={3}
            easing="elastic"
            autoPlay={false}
            activeIndex={active}
            onActiveIndexChange={setActive}
          >
            {STATES.map(item => (
              <SwapCard key={item.code} customClass={`product-state-card ${item.cardClass}`} aria-hidden="true">
                <span className="product-state-card__code">{item.code} / {item.label}</span>
                <span className="product-state-card__mark" aria-hidden="true">NS</span>
                <strong>{item.title}</strong>
                <small>NIGHTSHEEP AI · PRIVATE BUILD</small>
              </SwapCard>
            ))}
          </CardSwap>
          <span className="product-section__visual-note">SELECT A STATE · CARD MOTION FOLLOWS</span>
        </div>

        <article className="product-section__copy" id={`product-panel-${state.code}`} role="tabpanel" aria-live="polite">
          <p className="product-section__state"><span>{state.code}</span> / {state.label}</p>
          <h2 id="product-title">{state.title}</h2>
          <p className="product-section__description">{state.text}</p>
          <a className="product-section__cta" href="#contact">{state.cta}<span aria-hidden="true">→</span></a>
          <div className="product-section__rule" />
          <p className="product-section__footnote">同一产品，持续迭代。由真实交付推动下一步。</p>
        </article>
      </div>
    </section>
  )
}
