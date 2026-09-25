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
        }}
      >
        {/* Background Image */}
        <img
          src="https://i.postimg.cc/05BfryHW/d747e23cb49deff051147f1657027da2.jpg"
          width="1200"
          height="630"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            objectFit: 'cover',
          }}
        />
        
        {/* Subtle Vignette Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(15, 20, 40, 0.2), rgba(15, 20, 40, 0.8))',
          }}
        />

        {/* Branding Bar at the bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '180px',
            background: 'linear-gradient(to bottom, transparent, #0F1428)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '40px 60px',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <span
              style={{
                fontSize: '48px',
                fontFamily: 'serif',
                color: '#F4F1E8',
                fontWeight: 'bold',
                letterSpacing: '-0.02em',
              }}
            >
              Utsavs
            </span>
            <span
              style={{
                fontSize: '18px',
                fontFamily: 'serif',
                fontStyle: 'italic',
                color: '#9AA1C0',
              }}
            >
              from occasion to impact
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '10px',
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
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
