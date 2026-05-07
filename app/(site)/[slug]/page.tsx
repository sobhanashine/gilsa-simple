import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/wp';
import Image from 'next/image';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();
  return (
    <article className="prose mx-auto py-8">
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      {post.featuredImage?.node?.sourceUrl && (
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText || ''}
          width={1200}
          height={630}
          className="w-full h-auto mb-4"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
