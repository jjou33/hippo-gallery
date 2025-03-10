import { Database } from '@/types/supabase';
import { createServerClient } from '@supabase/ssr';
import { type ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export const createClient = (
  cookies?: ReadonlyRequestCookies,
  legacyCookies?: Partial<{
    [key: string]: string;
  }>
) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return (
            cookies?.get(name)?.value ??
            legacyCookies?.[name]
          );
        },
      },
    }
  );
};
