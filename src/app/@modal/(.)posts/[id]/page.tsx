import DetailModal from "@/app/_component/DetailModal";

export default function Detail({ params }: { params: { id: string } }) {
  const { id } = params;
  return <DetailModal id={id} />;
}
