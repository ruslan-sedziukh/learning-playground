// This file must be in the same directory as `app` directory
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// Optimized library for Next.js middleware
import { decodeJwt } from 'jose'

export function middleware(request: NextRequest) {
  // 1. Get the token from cookies
  const token = request.cookies.get('accessToken')?.value

  // 2. Define protected paths
  const isInternalPage = request.nextUrl.pathname.startsWith('/user-space')

  if (isInternalPage) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      // 3. DECODE the token (no secret key needed)
      const payload: { role?: string } = decodeJwt(token)

      // 4. Check the role
      if (payload.role !== 'user') {
        // Redirect if they are not an admin
        return NextResponse.redirect(new URL('/unauthorized', request.url))
      }
    } catch {
      // If token is malformed
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

// Routes to run this middleware on
export const config = {
  matcher: ['/user-space/:path*', '/dashboard/:path*'],
}
