import { Articles } from "../articles"

export const metadata = {
    title: 'articles',
    description: 'articles description',
}

export default function Writing() {
    return (
        <div>
            <h2>
                writing
            </h2>
            <div>
                <Articles />
            </div>
        </div>
    )
}