# Personal Blog with Next.js

This is a personal blog built with Next.js, featuring markdown-based content with frontmatter support, dynamic routing, and modern web development best practices.

## Features

- **Markdown-based posts**: Write blog posts in markdown with frontmatter metadata
- **Dynamic routing**: Automatic routing for blog posts based on file names
- **SEO optimization**: Meta tags and Open Graph support for each post
- **Responsive design**: Mobile-first design with Tailwind CSS
- **Dark mode support**: Built-in dark mode styling
- **Static generation**: Fast loading with Next.js static generation
- **Interlinking**: Easy linking between blog posts

## Project Structure

```
src/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Dynamic post page
│   │   └── page.tsx              # Blog listing page
│   ├── layout.tsx                # Root layout with navigation
│   └── page.tsx                  # Homepage
├── components/
│   ├── Navigation.tsx            # Site navigation
│   ├── PostContent.tsx           # Individual post display
│   └── PostList.tsx              # Post listing component
├── lib/
│   └── posts.ts                  # Markdown processing utilities
└── posts/                        # Markdown blog posts
    ├── getting-started-with-nextjs.md
    ├── advanced-nextjs-patterns.md
    └── building-a-blog-with-nextjs.md
```

## Adding New Posts

1. Create a new markdown file in the `posts/` directory
2. Add frontmatter metadata at the top of the file:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
excerpt: "A brief description of your post"
tags: ["tag1", "tag2", "tag3"]
---

# Your Post Content

Write your post content here in markdown...
```

3. The post will automatically appear in the blog listing and be accessible at `/blog/your-filename`

## Post Frontmatter

Each post should include the following frontmatter fields:

- `title` (required): The post title
- `date` (required): Publication date in YYYY-MM-DD format
- `excerpt` (optional): Brief description for post previews
- `tags` (optional): Array of tags for categorization

## Interlinking Posts

To link between posts, use relative URLs:

```markdown
Check out our [Advanced Next.js Patterns](/posts/advanced-nextjs-patterns) post for more details.
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update component styles in individual component files
- The blog uses Tailwind CSS for styling

### Navigation
- Edit `src/components/Navigation.tsx` to modify the site navigation

### Post Processing
- Modify `src/lib/posts.ts` to change how markdown files are processed
- Add new frontmatter fields by updating the TypeScript interfaces

## Dependencies

- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **gray-matter**: Frontmatter parsing
- **remark**: Markdown processing
- **remark-html**: Markdown to HTML conversion

## Deployment

This blog is configured for deployment on Cloudflare Pages using the OpenNext.js adapter. To deploy:

```bash
npm run deploy
```

The blog can also be deployed to other platforms like Vercel, Netlify, or any static hosting service.
