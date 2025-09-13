import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import PostList from "@/components/PostList";

export default function Home() {
  const posts = getSortedPostsData();
  const recentPosts = posts.slice(0, 3); // Show only the 3 most recent posts

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            A place where I share thoughts, tutorials, and insights about web development, 
            technology, and the ever-evolving world of software engineering.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Read All Posts
            </Link>
            <Link
              href="#recent-posts"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Recent Posts
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div id="recent-posts" className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Recent Posts
            </h2>
            <PostList posts={recentPosts} />
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                View All Posts →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            About This Blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            This blog is built with Next.js and showcases modern web development practices. 
            It features markdown-based content, dynamic routing, and optimized performance. 
            Each post is carefully crafted to provide value and insights into the world of 
            software development.
          </p>
        </div>
      </div>
    </div>
  );
}
