import { useState, useEffect } from 'react'

export default function DashboardDemo() {
  const [temperature, setTemperature] = useState(1240)
  const [pressure, setPressure] = useState(4.2)
  const [efficiency, setEfficiency] = useState(98)
  const [history, setHistory] = useState(Array(20).fill(1240))

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(prev => {
        const next = prev + (Math.random() * 4 - 2)
        setHistory(h => [...h.slice(1), next])
        return Number(next.toFixed(1))
      })
      setPressure(prev => Number((prev + (Math.random() * 0.2 - 0.1)).toFixed(2)))
      setEfficiency(prev => {
        const next = prev + (Math.random() * 1 - 0.5)
        return next > 100 ? 100 : Number(next.toFixed(1))
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="dashboard-demo">
      <div className="demo-header">
        <div className="demo-logo">
          <span className="logo-icon-small">M</span> Metabotics Engine
        </div>
        <div className="demo-status">
          <span className="live-dot"></span> LIVE SIGNAL
        </div>
      </div>
      
      <div className="demo-grid">
        <div className="demo-card">
          <h4>Core Temperature</h4>
          <div className="demo-value text-gradient-orange">{temperature}°C</div>
          <div className="demo-chart">
            <svg viewBox="0 0 200 60" preserveAspectRatio="none">
              <polyline 
                fill="none" 
                stroke="var(--accent-orange)" 
                strokeWidth="2"
                points={history.map((h, i) => `${i * 10},${60 - ((h - 1230) * 3)}`).join(' ')}
              />
            </svg>
          </div>
        </div>

        <div className="demo-card">
          <h4>Chamber Pressure</h4>
          <div className="demo-value text-gradient">{pressure} atm</div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${(pressure / 5) * 100}%` }}></div>
          </div>
        </div>

        <div className="demo-card">
          <h4>AI Efficiency Score</h4>
          <div className="demo-value" style={{ color: 'var(--accent-green)' }}>{efficiency}%</div>
          <div className="status-badge" style={{ marginTop: '10px' }}>OPTIMAL</div>
        </div>
      </div>

      <div className="demo-alerts">
        <h4>Recent System Activity</h4>
        <div className="alert-item">
          <span className="time">10:42:05</span>
          <span className="msg">AI Model adjusted cooling rate by -0.5%</span>
        </div>
        <div className="alert-item">
          <span className="time">10:41:12</span>
          <span className="msg">Microstructure prediction updated: <span style={{color: 'var(--accent-cyan)'}}>High Yield</span></span>
        </div>
        <div className="alert-item">
          <span className="time">10:38:50</span>
          <span className="msg">Burner 4 efficiency optimized</span>
        </div>
      </div>
    </div>
  )
}
