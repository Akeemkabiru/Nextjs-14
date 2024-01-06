import Link from "next/link";
import { Metadata } from "next";
type paramsProps = {
  params: { dynamicroute: string };
};

export const dynamicMetadata = ({ params }: paramsProps) => {
  title: {
    `${params.dynamicroute}`;
  }
};
export default function Route({ params }: paramsProps) {
  return (
    <h1>
      Dynamic route created with square bracket {params.dynamicroute}
      <Link href={`/blog/${params.dynamicroute}`}>Blog</Link>
    </h1>
  );
}
