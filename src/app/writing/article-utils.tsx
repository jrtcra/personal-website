import fs from 'fs';
import path from 'path';

type Metadata = {
    title: string
    created: string
}

function readMdFile(filePath: string){
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const lines = fileContent.split('\n')
    const metadata: Partial<Metadata> = {}
    const contentLines: string[] = []
    let inFrontmatter = false
    let foundFirstDash = false
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()
      
      if (trimmed === '---') {
        if (!foundFirstDash) {
          inFrontmatter = true
          foundFirstDash = true
        } else {
          inFrontmatter = false
        }
        continue
      }
      
      if (inFrontmatter) {
        const colonIndex = line.indexOf(':')
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim()
            let value = line.substring(colonIndex + 1).trim()
            if (value.startsWith("'") && value.endsWith("'")) {
              value = value.substring(1, value.length - 1)
            }
            metadata[key as keyof Metadata] = value
        }
      } else {
        contentLines.push(line)
      }
    }
    
    return { 
      metadata: metadata as Metadata, 
      content: contentLines.join('\n').trim() 
    }
}

export function getArticles() {
    let dir = path.join(process.cwd(), 'src', 'app', 'writing', 'articles')
    let mdFiles = fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
    
    return mdFiles.map((file) => {
        let { metadata, content } = readMdFile(path.join(dir, file))
        let slug = path.basename(file, path.extname(file))
    
        return {
          metadata,
          slug,
          content,
        }
      })
}


