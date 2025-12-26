import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  contentHtml: string;
  year: string;
  month: string;
  url: string;
}

export interface PostMeta {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  year: string;
  month: string;
  url: string;
}

export function getSortedPostsData(): PostMeta[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = matterResult.data as any;

      // Extract year and month from date
      const date = new Date(data.date);
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      
      // Generate URL
      const url = `/${year}/${month}/${id}.html`;

      // Combine the data with the id and URL info
      return {
        id,
        year,
        month,
        url,
        ...data,
      } as PostMeta;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(): Array<{ year: string; month: string; slug: string }> {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = matterResult.data as any;
      
      const date = new Date(data.date);
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      
      return { year, month, slug: `${slug}.html` };
    });
}

export async function getPostData(slug: string): Promise<PostData> {
  // Remove .html extension if present
  const cleanSlug = slug.replace(/\.html$/, '');
  const fullPath = path.join(postsDirectory, `${cleanSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = matterResult.data as any;

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Extract year and month from date
  const date = new Date(data.date);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  
  // Generate URL
  const url = `/${year}/${month}/${slug}.html`;

  // Combine the data with the id and contentHtml
  return {
    id: slug,
    year,
    month,
    url,
    contentHtml,
    ...data,
  } as PostData;
}
