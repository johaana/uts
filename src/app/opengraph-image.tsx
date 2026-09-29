
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Utsavs: Know before you plan. Not after.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      // ImageResponse render element
      <div
        style={{
          background: '#0F1428',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, #171D3A, #0F1428)',
          }}
        />

        {/* Branding */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontSize: '120px',
              fontFamily: 'serif',
              color: '#F4F1E8',
              fontWeight: 'bold',
              letterSpacing: '-0.04em',
            }}
          >
            Utsavs
          </span>
          <span
            style={{
              fontSize: '32px',
              fontFamily: 'serif',
              fontStyle: 'italic',
              color: '#9AA1C0',
            }}
          >
            from occasion to impact
          </span>
        </div>

        {/* Footer Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
           <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#E8A33D',
              }}
            />
            <span
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#E8A33D',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              GLOBAL HOLIDAY INTELLIGENCE
            </span>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
