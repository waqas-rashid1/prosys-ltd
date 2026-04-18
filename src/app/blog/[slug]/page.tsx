import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";
import BlogArticleContent from "./BlogArticleContent";
import { ArticleSchema, BreadcrumbSchema } from "@/components/schema/PageSchema";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | PROSYS LTD Blog`,
      description: post.excerpt,
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        date={post.date}
        author={post.author?.name}
        category={post.category}
      />
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "/blog" },
          { label: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <Navbar />
      <BlogArticleContent slug={slug} />
      <Footer />
    </>
  );
}
