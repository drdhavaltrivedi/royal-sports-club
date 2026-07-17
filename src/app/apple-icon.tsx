import { ImageResponse } from 'next/og';
 
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: '#0F3D2E',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#B89B5E',
          fontFamily: 'serif',
          border: '6px solid #B89B5E',
          borderRadius: '32px',
        }}
      >
        R
      </div>
    ),
    {
      ...size,
    }
  );
}
