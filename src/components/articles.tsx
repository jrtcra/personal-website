import fs from 'fs';
import path from 'path';

export function Articles() {
    return (
        <div>
            {
                // TODO: add link to each article
                fs.readdirSync(path.join(process.cwd(), 'src','app', 'articles')).filter((file) => path.extname(file) === '.mdx')
            }
        </div>
    )
}