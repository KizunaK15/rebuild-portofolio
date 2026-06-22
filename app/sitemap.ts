import { MetadataRoute } from "next";
import { getAllBlogPosts, getAllProjects } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://primaaji.dev";

  const posts = await getAllBlogPosts();
  const projects = await getAllProjects();

  const blogUrls = posts.map((post: { slug: string; dateModified?: string }) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.dateModified ? new Date(post.dateModified) : new Date(),
  }));

  const projectUrls = projects.map((project: { slug: string; dateCreated?: string }) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.dateCreated ? new Date(project.dateCreated) : new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...blogUrls,
    ...projectUrls,
  ];
}