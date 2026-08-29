import { useEffect, useRef } from "react"

function ParticleNetwork() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let animationFrame

    const particles = []
    const particleCount = 80
    const connectionDistance = 150
    const mouse = {
        x: null,
        y: null,
        radius: 180,
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const handleMouseMove = (event) => {
        mouse.x = event.clientX
        mouse.y = event.clientY
    }

    const handleMouseLeave = () => {
        mouse.x = null
        mouse.y = null
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        if (mouse.x !== null && mouse.y !== null) {
            const dx = particle.x - mouse.x
            const dy = particle.y - mouse.y

            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius

                particle.x += (dx / distance) * force * 2
                particle.y += (dy / distance) * force * 2
            }
        }
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
        }

        ctx.beginPath()
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        )

        ctx.fillStyle = "rgba(167, 139, 250, 0.35)"
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {

          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y

          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity =
              1 - distance / connectionDistance

            ctx.beginPath()

            ctx.moveTo(
              particles[i].x,
              particles[i].y
            )

            ctx.lineTo(
              particles[j].x,
              particles[j].y
            )

            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.15})`

            ctx.lineWidth = 1

            ctx.stroke()
          }
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)

      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}

export default ParticleNetwork