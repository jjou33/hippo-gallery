import { Database } from '@/types/supabase';
import { createServerClient } from '@supabase/ssr';
import { cookies as getCookies } from 'next/headers';

export const createClient = async (
  cookies?: ReturnType<typeof getCookies>,
  legacyCoookies?: Partial<{ [key: string]: string }>
) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name: string) {
          const resolvedCookies = await cookies;
          return resolvedCookies?.get(name)?.value ?? legacyCoookies?.[name];
        },
      },
    }
  );
};
