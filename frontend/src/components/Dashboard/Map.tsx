"use client"

import { useState } from "react"

export function Map() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: "" })

  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 800 600" className="h-full w-full" style={{ filter: "drop-shadow(0 0 2px rgba(0,0,0,0.1))" }}>
        {/* Simplified Australia map path */}
        <path
          d="M200,100 L600,100 L600,500 L200,500 Z"
          className="fill-gray-200"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            setTooltip({
              visible: true,
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
              content: "Western Australia\n$3.2M",
            })
          }}
          onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
        />
        <defs>
          <linearGradient id="heatmap" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4444" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ff8c42" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7fff00" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M200,100 L600,100 L600,500 L200,500 Z"
          fill="url(#heatmap)"
          className="transition-opacity duration-200"
          style={{ opacity: tooltip.visible ? 0.8 : 0.4 }}
        />
      </svg>
      {tooltip.visible && (
        <div
          className="absolute z-10 rounded-lg bg-black px-4 py-2 text-sm text-white"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="whitespace-pre-line">{tooltip.content}</div>
        </div>
      )}
    </div>
  )
}

