import LayerPopup from '#/shared/Modal/LayerPopup';
import PreviewItemComponent from '@/components/PreviewItem';
import { createClient } from '@/utils/supabase/server';

export const generateStaticParams = async () => {
  const supabase = await createClient();
  const { data } = await supabase.from('Post').select('id');
  return data?.map(({ id }) => ({ params: { id: String(id) } })) ?? [];
};

export default async function PreviewPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { params } = props;

  return (
    <div>
      <LayerPopup>
        <PreviewItemComponent id={(await params).id} />
      </LayerPopup>
    </div>
  );
}
