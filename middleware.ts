import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const token = request.cookies.get('token')?.value;
  const userInfo = request.cookies.get('userInfo')?.value;
  const userInfoParsed = userInfo ? JSON.parse(userInfo) : null;
  const userUploadImageStatus = userInfoParsed ? userInfoParsed.process_body_image_status : null;
  const tokenFromQuery = searchParams.get('token');
  console.log({ token, userInfoParsed, userUploadImageStatus });

  // If token is in query but not in cookies, set it and redirect (once)
  if (tokenFromQuery && !token) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('token'); // Remove token from URL
    const response = NextResponse.redirect(url);
    response.cookies.set('token', tokenFromQuery, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });
    return response;
  }

  // Allow public paths like /terms to be accessed without token
  if (pathname.startsWith('/terms')) {
    return NextResponse.next();
  }

  // Allow public paths like /auth to be accessed without token
  if (!token && !pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // // Prevent authenticated users from accessing /auth
  if (token && pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (token && userUploadImageStatus !== 2 && pathname !== '/personal-image-uploader') {
    return NextResponse.redirect(new URL('/personal-image-uploader', request.url));
  }

  if (token && userUploadImageStatus === 2 && pathname === '/personal-image-uploader') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|images|fonts|assets|static|screenshots|icons|logo.png|sw.js|sw.js.map|workbox-*.js|workbox-*.js.map).*)',
  ],
};
