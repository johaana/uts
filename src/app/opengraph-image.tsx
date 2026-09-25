
import { ImageResponse } from 'next/og'

export const alt = 'Utsavs: Know before you fly. Know before you schedule.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F1428',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          color: '#F4F1E8',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            marginBottom: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '84px',
              fontFamily: 'serif',
              fontWeight: '600',
              lineHeight: '1.05',
              margin: '0',
              letterSpacing: '-0.02em',
            }}
          >
            Know before you fly.
          </h1>
          <h1
            style={{
              fontSize: '84px',
              fontFamily: 'serif',
              fontWeight: '600',
              lineHeight: '1.05',
              margin: '0',
              letterSpacing: '-0.02em',
            }}
          >
            Know before you schedule.
          </h1>
        </div>
        <p
          style={{
            fontSize: '32px',
            fontFamily: 'sans-serif',
            color: '#9AA1C0',
            lineHeight: '1.4',
            maxWidth: '900px',
            margin: '0',
          }}
        >
          Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.
        </p>
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#E8A33D',
            }}
          />
          <span
            style={{
              fontSize: '18px',
              fontFamily: 'monospace',
              color: '#E8A33D',
              fontWeight: 'bold',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Utsavs Global Holiday Intelligence
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
