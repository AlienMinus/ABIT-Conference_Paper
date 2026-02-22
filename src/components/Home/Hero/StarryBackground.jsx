import React, { useEffect, useRef } from 'react'

const StarryBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let stars = []
    let shootingStars = []
    let nebulae = []
    let mouse = { x: null, y: null }
    let scrollY = 0
    let nextShowerTime = Date.now() + 10000 // First shower in 10s
    let showerEndTime = 0
    
    // Configuration for the galactic effect
    const connectionDistance = 190
    const starBaseSize = 2
    
    // Helper to generate random range
    const random = (min, max) => Math.random() * (max - min) + min

    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)

    const handleMouseMove = (e) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouse.x = e.clientX - rect.left
        mouse.y = e.clientY - rect.top
      } else {
        mouse.x = null
        mouse.y = null
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const initStars = () => {
      stars = []
      nebulae = []
      const width = canvas.width
      const height = canvas.height
      // Adjust number of stars based on screen area (approx 1 star per 10000px^2)
      const density = Math.floor((width * height) / 10000)
      const count = Math.min(density, 120) // Cap max stars for performance

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: random(-0.2, 0.2), // Slow drift velocity
          vy: random(-0.2, 0.2),
          size: random(0.5, starBaseSize),
          baseOpacity: random(0.4, 0.9),
          twinkleSpeed: random(0.002, 0.005),
          twinklePhase: random(0, Math.PI * 2),
          parallaxFactor: random(0.05, 0.3) // Stars move at different speeds
        })
      }

      // Initialize Nebula clouds
      for (let i = 0; i < 5; i++) {
        nebulae.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseRadius: random(300, 600),
          radius: random(300, 600), // Initial radius
          pulseSpeed: random(0.0005, 0.0015),
          pulsePhase: random(0, Math.PI * 2),
          color: i % 2 === 0 ? 'rgba(176, 38, 255, 0.08)' : 'rgba(77, 77, 255, 0.08)', // Neon purple/blue
          vx: random(-0.1, 0.1),
          vy: random(-0.1, 0.1)
        })
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    // Initial setup
    handleResize()
    window.addEventListener('resize', handleResize)

    const animate = () => {
      const time = Date.now()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Black Hole Effect (Center of Canvas)
      const bhX = canvas.width / 2
      const bhY = canvas.height / 2
      const bhRadius = 40
      const bhInfluence = 250

      // Draw Black Hole (Subtle void)
      const bhG = ctx.createRadialGradient(bhX, bhY, 0, bhX, bhY, bhRadius * 2)
      bhG.addColorStop(0, 'rgba(10, 5, 20, 0.9)')
      bhG.addColorStop(1, 'rgba(10, 5, 20, 0)')
      ctx.fillStyle = bhG
      ctx.beginPath()
      ctx.arc(bhX, bhY, bhRadius * 2, 0, Math.PI * 2)
      ctx.fill()

      // Draw Nebulae (Background layer)
      nebulae.forEach(nebula => {
        nebula.x += nebula.vx
        nebula.y += nebula.vy
        
        // Pulse logic
        const pulse = Math.sin(time * nebula.pulseSpeed + nebula.pulsePhase)
        nebula.radius = nebula.baseRadius * (1 + pulse * 0.15)

        // Wrap around logic for nebulae
        if (nebula.x < -nebula.radius * 2) nebula.x = canvas.width + nebula.radius
        if (nebula.x > canvas.width + nebula.radius * 2) nebula.x = -nebula.radius
        if (nebula.y < -nebula.radius * 2) nebula.y = canvas.height + nebula.radius
        if (nebula.y > canvas.height + nebula.radius * 2) nebula.y = -nebula.radius

        const g = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius)
        g.addColorStop(0, nebula.color)
        g.addColorStop(1, 'transparent')
        
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Pulse for lines
      const linePulse = 0.6 + 0.4 * Math.sin(time * 0.0015)

      // Update and draw stars
      stars.forEach(star => {
        star.x += star.vx
        star.y += star.vy

        // Black Hole Gravity
        const dx = bhX - star.x
        const dy = bhY - star.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < bhInfluence) {
           const force = (bhInfluence - dist) / bhInfluence
           star.vx += (dx / dist) * force * 0.05
           star.vy += (dy / dist) * force * 0.05
        }

        // Twinkle calculation
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase)
        const opacity = Math.max(0.2, Math.min(1, star.baseOpacity + twinkle * 0.3))

        // Wrap around screen logic
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Parallax Y position
        const drawY = star.y + (scrollY * star.parallaxFactor)

        ctx.beginPath()
        ctx.arc(star.x, drawY, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        
        // Glow effect
        ctx.shadowBlur = 6
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)"
        ctx.fill()
        ctx.shadowBlur = 0 // Reset for lines

        // Mouse connection logic
        if (mouse.x !== null) {
          const dx = star.x - mouse.x
          const dy = drawY - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < connectionDistance) {
            const alpha = 0.5 * (1 - dist / connectionDistance)
            ctx.beginPath()
            ctx.strokeStyle = `rgba(220, 180, 255, ${alpha})`
            ctx.moveTo(star.x, drawY)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      })

      // Draw constellations (connections)
      ctx.lineWidth = 0.5
      for (let i = 0; i < stars.length; i++) {
        const star1 = stars[i]
        const y1 = star1.y + (scrollY * star1.parallaxFactor)

        for (let j = i + 1; j < stars.length; j++) {
          const star2 = stars[j]
          const y2 = star2.y + (scrollY * star2.parallaxFactor)

          const dx = star1.x - star2.x
          const dy = y1 - y2
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            // Fade out line as distance increases
            const alpha = 0.2 * (1 - dist / connectionDistance) * linePulse
            ctx.beginPath()
            ctx.strokeStyle = `rgba(220, 180, 255, ${alpha})`
            ctx.moveTo(star1.x, y1)
            ctx.lineTo(star2.x, y2)
            ctx.stroke()
          }
        }
      }

      // Shooting Stars Logic
      let spawnChance = 0.015

      // Trigger meteor shower
      if (time > nextShowerTime) {
        showerEndTime = time + random(3000, 6000) // Lasts 3-6 seconds
        nextShowerTime = time + random(60000, 180000) // Next one in 1-3 minutes
      }

      if (time < showerEndTime) {
        spawnChance = 0.25 // Intense shower mode
      }

      if (Math.random() < spawnChance) { // Chance to spawn a shooting star
        const startX = Math.random() * canvas.width
        const startY = Math.random() * (canvas.height * 0.5)
        const length = random(100, 250)
        const speed = random(5, 15)
        const angle = Math.PI / 4 + random(-0.8, 0.8) // Varied angles
        
        shootingStars.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          length,
          life: 1,
          decay: random(0.005, 0.02)
        })
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i]
        s.x += s.vx
        s.y += s.vy
        s.life -= s.decay
        
        if (s.life <= 0 || s.x > canvas.width || s.y > canvas.height) {
          shootingStars.splice(i, 1)
          continue
        }
        
        const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy)
        const tailX = s.x - (s.vx / speed) * s.length
        const tailY = s.y - (s.vy / speed) * s.length

        const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${s.life})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
        
        ctx.beginPath()
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(tailX, tailY)
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  )
}

export default StarryBackground