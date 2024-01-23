import { NextResponse, NextRequest } from 'next/server';
import { isAuthenticated } from './utils';

export function middleware(request: NextRequest) {
  // If the user is authenticated, continue as normal
  if (isAuthenticated()) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: '/dashboard/:path*',
};
