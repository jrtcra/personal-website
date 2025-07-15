import Link from 'next/link'
import { getArticles } from './article-utils';

export function Articles() {
    let articles = getArticles()
    return (
        <div>
            {articles
                .sort((articleOne, articleTwo) => {
                    if (
                        new Date(articleOne.metadata.created) > new Date(articleTwo.metadata.created)
                    ) {
                        return -1
                    }
                    return 1
                })
                .map((article) => (
                    <Link
                        key={article.slug}
                        href={`/${article.slug}`}
                        target="_blank"
                    >
                        <div>
                            <p>
                                {article.metadata.title} - {article.metadata.created}
                            </p>
                        </div>
                    </Link>
                ))}
        </div>
    )
}