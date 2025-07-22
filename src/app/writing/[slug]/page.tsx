import { baseUrl } from "@/app/sitemap"
import { getArticles } from "../article-utils"

export async function generateStaticParams() {
  let articles = getArticles()

  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let article = getArticles().find((article) => article.slug === slug)
  if (!article) {
    return
  }

  let {
    title,
    created: publishedTime,
    summary: description,
  } = article.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${article.slug}`,
    },
  }
}


export default async function articlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let article = getArticles().find((article) => article.slug === slug)
  return <div>{article?.content}</div>
}