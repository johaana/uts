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
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 80,
              height: 80,
              background: '#E8A33D',
              borderRadius: '20%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0F1428',
              fontSize: 48,
              fontWeight: 'bold',
            }}
          >
            U
          </div>
          <span style={{ fontSize: 100, fontWeight: 'bold', letterSpacing: '-0.02em' }}>Utsavs</span>
        </div>
        <div style={{ fontSize: 32, marginTop: 24, color: '#9AA1C0', fontStyle: 'italic' }}>
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
            letterSpacing: '0.3em' 
          }}
        >
          Global Holiday Intelligence
        </div>
      </div>
    ),
    { ...size }
  );
}
