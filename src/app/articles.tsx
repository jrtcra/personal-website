import Link from 'next/link'
import { getArticles } from './writing/article-utils';

export function Articles() {
    let articles = getArticles()
    return (
        <div>
            {articles
                .sort((articleOne, articleTwo) => {
                    if (new Date(articleOne.metadata.created) > new Date(articleTwo.metadata.created)) {
                        return -1
                    }
                    return 1
                })
                .map((article) => (
                    <div className='w-full flex flex-row md:space-x-2' key={article.slug}>
                        <Link href={`/writing/${article.slug}`}>
                            <p>
                                {article.metadata.title}
                            </p>
                        </Link>
                        <p style={{ color: 'gray' }}>
                            {article.metadata.created}
                        </p>
                    </div>

                ))}
        </div>
    )
}