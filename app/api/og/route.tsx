/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const fontData = await fetch(
    new URL('../../../lib/fonts/Inter-Medium.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '1200px',
          height: '630px',
          backgroundColor: '#f9fafb',
          padding: '60px 80px',
          fontFamily: 'Inter',
          fontWeight: 'bolder',
        }}
      >
        <img
          src="https://ashvinpanicker.com/AP2.png"
          alt="Ashvin Panicker"
          style={{
            borderRadius: '9999px',
            width: '280px',
            height: '280px',
            objectFit: 'cover',
            marginRight: '80px',
            border: '4px solid #e5e7eb',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 56, fontWeight: 700, color: '#111827' }}>
            Ashvin Panicker
          </div>
          <div style={{ fontSize: 32, color: '#374151', marginTop: 12 }}>
            Senior Software Engineer
          </div>
          <div style={{ fontSize: 28, color: '#6B7280', marginTop: 16 }}>
            Web Dev • UI/UX • SEO • Mobile
          </div>
          <div style={{ fontSize: 24, color: '#9CA3AF', marginTop: 10, fontWeight: 'lighter' }}>
            ashvinpanicker.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
