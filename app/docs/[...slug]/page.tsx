export default function Docs({ params }: { params: { slug: string[] } }) {
  return <h1>Doc {params.slug[1]}</h1>;
}
