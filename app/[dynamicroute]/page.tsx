import Link from "next/link";

export default function Route({
  params,
}: {
  params: { dynamicroute: string };
}) {
  return (
    <h1>
      Dynamic route created with square bracket {params.dynamicroute}
      <Link href={`/blog/${params.dynamicroute}`}>Blog</Link>
    </h1>
  );
}
