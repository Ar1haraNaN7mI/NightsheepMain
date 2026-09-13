import ParticleText from './ParticleText'
import './SeamlessWordmark.css'

const particleProps = {
  particleSize: 2.1,
  density: 4,
  color: '#f7f4ff',
  highlightColor: '#ffffff',
  scatter: 150,
  gatherDuration: 1500,
  stagger: 280,
  // Keep the hero wordmark stable while the pointer passes over it. The only
  // dispersion should be the one-time entrance animation from ParticleText.
  pointerRepel: 0,
  repelRadius: 150,
  idleDrift: 0.8,
  trigger: 'mount',
  fontSize: 'clamp(7rem, 15.8vw, 19rem)',
  fontWeight: 600,
  fontFamily: 'MPlus, MiSans, sans-serif',
  glow: true
}

export default function SeamlessWordmark() {
  return <div className="seamless-wordmark" aria-label="NightSheep AI"><div className="seamless-wordmark__track"><div className="seamless-wordmark__item"><ParticleText text="NightSheep AI" {...particleProps} /></div><div className="seamless-wordmark__item" aria-hidden="true"><ParticleText text="NightSheep AI" {...particleProps} /></div></div><span className="seamless-wordmark__sr">NightSheep AI</span></div>
}

