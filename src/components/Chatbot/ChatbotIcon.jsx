import React from 'react'

const ChatbotIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* Antenna glowing orb & smart energy spark */}
    <path
      d="M24 6v6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle
      cx="24"
      cy="5"
      r="3"
      fill="var(--neon-cyan, #00f3ff)"
    />
    <path
      d="M19.5 4.5a5 5 0 0 1 9 0"
      stroke="var(--neon-cyan, #00f3ff)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />

    {/* Ear headphone cups (Smart grid nodes) */}
    <rect
      x="5"
      y="18.5"
      width="4"
      height="12"
      rx="2"
      fill="var(--neon-cyan, #00f3ff)"
    />
    <rect
      x="39"
      y="18.5"
      width="4"
      height="12"
      rx="2"
      fill="var(--neon-cyan, #00f3ff)"
    />

    {/* Robot Head Body */}
    <rect
      x="9"
      y="12"
      width="30"
      height="25"
      rx="10"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="2.5"
    />

    {/* Visor Screen */}
    <rect
      x="13"
      y="17"
      width="22"
      height="14"
      rx="6"
      fill="#0c0916"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeOpacity="0.25"
    />

    {/* Expressive Glowing Eyes */}
    <ellipse
      cx="18.5"
      cy="23"
      rx="2.5"
      ry="3"
      fill="var(--neon-cyan, #00f3ff)"
    />
    <ellipse
      cx="29.5"
      cy="23"
      rx="2.5"
      ry="3"
      fill="var(--neon-cyan, #00f3ff)"
    />
    {/* Catchlights in eyes */}
    <circle cx="19.3" cy="22" r="0.9" fill="#ffffff" />
    <circle cx="30.3" cy="22" r="0.9" fill="#ffffff" />

    {/* Friendly Tech Smile */}
    <path
      d="M21 27.5c1 1.4 5 1.4 6 0"
      stroke="var(--neon-cyan, #00f3ff)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* Neck and Shoulder Accent */}
    <path
      d="M20 37v2.5m8-2.5v2.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M13.5 44c2.8-2.5 6.5-3 10.5-3s7.7 0.5 10.5 3"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
)

export default ChatbotIcon
