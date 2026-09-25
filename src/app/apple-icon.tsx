
import { ImageResponse } from 'next/og'

// Icon generation metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Icon generation component
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse render element
      <div
        style={{
          background: '#171D3A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E8A33D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
