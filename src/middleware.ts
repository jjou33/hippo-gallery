import { NextRequest, NextResponse } from 'next/server';
import { createClient } from './utils/supabase/middleware';

export async function middleware(request: NextRequest) {
  // Supabase 클라이언트 생성
  const { supabase, response } = createClient(request);

  // 현재 사용자 정보 가져오기
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 사용자가 인증되지 않은 경우 관리자 페이지로 리다이렉트
  if (user?.role !== 'authenticated')
    return NextResponse.redirect(new URL('/admin', request.url));

  // 인증된 사용자인 경우 요청 계속 진행
  return response;
}

export const config = {
  matcher: '/write',
};
