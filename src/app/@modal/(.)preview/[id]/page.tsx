import LayerPopup from '#/shared/Modal/LayerPopup';
import PreviewItemComponent from '@/components/PreviewItem';
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
    <LayerPopup isOpen={true} height={'90vh'} width={'90%'}>
      <PreviewItemComponent type="intercept" />
    </LayerPopup>
  );
}
