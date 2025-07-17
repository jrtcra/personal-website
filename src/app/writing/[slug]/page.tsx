import { getArticles } from "../../article-utils"

export async function generateStaticParams() {
    let articles = getArticles()
  
    return articles.map((article) => ({
      slug: article.slug,
    }))
  }

export default async function articlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    let article = getArticles().find((article) => article.slug === slug)
    return <div>{article?.content}</div>
}