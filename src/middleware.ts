import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware is working');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('middleware redirect');
    NextResponse.redirect(new URL('/products', request.url));
  }
}

export const config = {
  matcher: ['/products/:path+'], // 특정 url에서 미들웨어 실행되도록 설정
};
