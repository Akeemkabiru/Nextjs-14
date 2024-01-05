export default function Slug({ params }: { params: { slug: string[] } }) {
  return <div>page {params.slug[1]}</div>;
}
