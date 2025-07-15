import Link from 'next/link'

export function Navigation() {
    return (
        <div>
            <Link href="/">home </Link>
            <Link href="/writing">writing</Link>
        </div>
    )
}