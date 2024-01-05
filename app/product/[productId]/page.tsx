import NotFound from "@/app/not-found";

export default function ProductId({
  params,
}: {
  params: { productId: string | number };
}) {
  if (params.productId == 3) return <NotFound />;
  else return <div>Products Details {params.productId}</div>;
}
