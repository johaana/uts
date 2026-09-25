
import { ImageResponse } from 'next/og'

// Icon generation metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Icon generation component
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse render element
      <div
        style={{
          fontSize: 24,
          background: '#171D3A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E8A33D"
          strokeWidth="2"
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
