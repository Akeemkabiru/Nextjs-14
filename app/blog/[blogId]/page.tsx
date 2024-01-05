interface paramsProps {
  params: {
    blogId: string;
  };
}

export default function BlogList({ params }: paramsProps) {
  return <div>Blog {params.blogId} </div>;
}
