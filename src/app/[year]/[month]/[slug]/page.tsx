import { getPostData, getAllPostIds } from '@/lib/posts';
import PostContent from '@/components/PostContent';
import Link from 'next/link';
import { Metadata } from 'next';

interface PostPageProps {
  params: Promise<{
    year: string;
    month: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const postIds = getAllPostIds();
  return postIds.map(({ year, month, slug }) => ({
    year,
    month,
    slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  
  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on our blog`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on our blog`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function Post({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
      
      <PostContent post={post} />
    </div>
  );
}
