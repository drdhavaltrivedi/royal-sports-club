import { ImageResponse } from 'next/og';
 
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: '#0F3D2E',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#B89B5E',
          fontFamily: 'serif',
          border: '1px solid #B89B5E',
          borderRadius: '4px',
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
