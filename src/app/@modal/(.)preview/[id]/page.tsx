import LayerPopup from '#/shared/Modal/LayerPopup';
import PreviewItemComponent from '@/components/PreviewItem';
export default async function PreviewPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <LayerPopup isOpen={true} height={'90vh'} width={'90%'}>
        <PreviewItemComponent type="intercept" />
      </LayerPopup>
    </div>
  );
}
