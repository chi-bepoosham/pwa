import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'چی بپوشم',
    short_name: 'چی بپوشم',
    description: 'اولین اپلیکیشن حرفه ای در زمینه مد و پوشاک',
    categories: [
    "fashion",
     "clothing",
      "shopping",
      "AI",
      "Online Peru",
      "Online Shopping"
    ],
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FFFFFF',
    theme_color: '#4141F9',
    icons: [
    {
      "src": "appicon-16x16.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "appicon-32x32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "appicon-48x48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "appicon-64x64.png",
      "sizes": "64x64",
      "type": "image/png"
    },
    {
      "src": "appicon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "appicon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "appicon-1024x1024.png",
      "sizes": "1024x1024",
      "type": "image/png"
    }
  ],
  }
}