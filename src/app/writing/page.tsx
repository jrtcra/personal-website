import { Articles } from "../articles"

export const metadata = {
    title: 'articles',
    description: 'articles description',
}

export default function Writing() {
    return (
        <div>
            <h1>
                writing
            </h1>
            <div>
                <Articles />
            </div>
        </div>
    )
}