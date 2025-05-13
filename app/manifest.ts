import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'چی بپوشم',
    short_name: 'چی بپوشم',
    description: 'هر روز شیک تر از دیروز',
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
      "src": "icons/appicon-16x16.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "icons/appicon-32x32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "icons/appicon-48x48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "icons/appicon-64x64.png",
      "sizes": "64x64",
      "type": "image/png"
    },
    {
      "src": "icons/appicon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "icons/appicon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "icons/appicon-1024x1024.png",
      "sizes": "1024x1024",
      "type": "image/png"
    }
  ],
  screenshots: [
    {
      "src": "screenshots/desktop1.png",
      "sizes": "1917x1079",
      "type": "image/png",
      "platform": "windows",
      "label": "صفحه اصلی - دسکتاپ",
      "form_factor": "wide",
    },
    {
      "src": "screenshots/desktop2.png",
      "sizes": "1917x1079",
      "type": "image/png",
      "platform": "windows",
      "label": "کمد من - دسکتاپ",
      "form_factor": "wide",
    },
    {
      "src": "screenshots/iphone1.png",
      "sizes": "1179x2556",
      "type": "image/png",
      "platform": "ios",
      "label": "لودینگ - ایفون",
      "form_factor": "narrow",
    },
    {
      "src": "screenshots/iphone2.png",
      "sizes": "1179x2556",
      "type": "image/png",
      "platform": "ios",
      "label": "صفحه اصلی - ایفون",
      "form_factor": "narrow",
    },
    {
      "src": "screenshots/iphone3.png",
      "sizes": "1179x2556",
      "type": "image/png",
      "platform": "ios",
      "label": "کمد من - ایفون",
      "form_factor": "narrow",
    },
  ]
  }
}