import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('__cf_bm')
  console.log('token - ', request.cookies)

  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')

  if (token && isAuthPage) {
    const redirectUrl = new URL('/', request.url)
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}