import { useMemo } from 'react'
import type { CSSProperties } from 'react'
import type { Book } from '../data/books'

type AuthorCloudProps = {
  books: Book[]
}

export function AuthorCloud({ books }: AuthorCloudProps) {
  const authors = useMemo(() => {
    const counts = new Map<string, number>()

    books.forEach((book) => {
      counts.set(book.author, (counts.get(book.author) ?? 0) + 1)
    })

    const sortedAuthors = [...counts].sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-CN'),
    )
    const maxCount = Math.max(...sortedAuthors.map(([, count]) => count), 1)
    const minCount = Math.min(...sortedAuthors.map(([, count]) => count), 1)
    const hasFrequencyRange = maxCount > minCount

    return sortedAuthors.map(([author, count]) => {
      const weight = hasFrequencyRange
        ? (count - minCount) / (maxCount - minCount)
        : 0.35

      return { author, count, weight }
    })
  }, [books])

  return (
    <section className="author-cloud-section" aria-labelledby="author-cloud-title">
      <div className="section-heading author-cloud-heading">
        <div>
          <p className="section-index">05 / AUTHOR CLOUD</p>
          <h2 id="author-cloud-title">作者词云</h2>
        </div>
        <p>从作者名字看这份书单的关注方向</p>
      </div>

      <div className="author-cloud" aria-label="作者出现频次">
        {authors.map(({ author, count, weight }, index) => (
          <span
            className="author-cloud-name"
            key={author}
            title={`${count} 本书`}
            style={{
              '--author-weight': weight,
              color:
                index % 3 === 0
                  ? 'var(--green-dark)'
                  : index % 3 === 1
                    ? '#476455'
                    : '#666b63',
            } as CSSProperties}
          >
            {author}
            <small>{count}</small>
          </span>
        ))}
      </div>
    </section>
  )
}
