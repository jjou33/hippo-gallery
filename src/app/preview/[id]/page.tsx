import { createClient } from '@/utils/supabase/server';

export const generateStaticParams = async () => {
  const supabase = await createClient();
  const { data } = await supabase.from('Post').select('id');
  return data?.map(({ id }) => ({ params: { id: String(id) } })) ?? [];
};

export default async function PreviewPage({
  params,
}: {
  params: { id: string };
}) {
  // const supabase = await createClient(cookies());
  // const { data } = await supabase
  //   .from('Post')
  //   .select('*')
  //   .eq('id', Number(params.id));

  // if (!data || !data[0]) {
  //   return { notFound: true };
  // }

  // const { tags, ...rest } = data[0];
  return (
    <div>
      <h1>DEFAULT PAGE</h1>
      {/* <PreviewItemComponent /> */}
    </div>
  );
}
