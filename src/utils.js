import React from "react"

export const RandomEmoji = ({ emojis }) => {
  const idx = Math.trunc(Math.random() * emojis.length)
  return <span>{emojis[idx]}</span>
}
