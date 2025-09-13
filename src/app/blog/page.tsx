import { getSortedPostsData } from '@/lib/posts';
import PostList from '@/components/PostList';
import Link from 'next/link';

export default function Blog() {
  const posts = getSortedPostsData();
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog Posts
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Thoughts, tutorials, and insights about web development and technology.
        </p>
        <div className="mt-4">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
      
      <PostList posts={posts} />
    </div>
  );
}