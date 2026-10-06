import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

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
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F4F1E8',
          fontFamily: 'serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Image Layer */}
        <img
          src="https://i.postimg.cc/bwJWCywk/Accessories-for-Airport-Travel.jpg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5,
          }}
        />
        
        {/* Gradient Overlay for legibility */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(15, 20, 40, 0.8), rgba(15, 20, 40, 0.4))',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 24, position: 'relative', zIndex: 10 }}>
          <div
            style={{
              width: 100,
              height: 100,
              background: '#E8A33D',
              borderRadius: '24%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0F1428',
              fontSize: 64,
              fontWeight: 'bold',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }}
          >
            U
          </div>
          <span style={{ fontSize: 120, fontWeight: 'bold', letterSpacing: '-0.03em', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>Utsavs</span>
        </div>

        <div style={{ fontSize: 36, marginTop: 24, color: '#9AA1C0', fontStyle: 'italic', position: 'relative', zIndex: 10 }}>
          from occasion to impact
        </div>

        <div 
          style={{ 
            position: 'absolute', 
            bottom: 60, 
            fontSize: 18, 
            color: '#E8A33D', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            letterSpacing: '0.4em',
            zIndex: 10,
            background: 'rgba(0,0,0,0.3)',
            padding: '8px 24px',
            borderRadius: '100px',
          }}
        >
          Global Holiday Intelligence
        </div>
      </div>
    ),
    { ...size }
  );
}
