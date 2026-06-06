import type { Book } from '../data/books'

type StatsPanelProps = {
  books: Book[]
  topicCount: number
}

export function StatsPanel({ books, topicCount }: StatsPanelProps) {
  const authorCount = new Set(books.map((book) => book.author)).size
  const verifiedCount = books.filter(
    (book) => book.verifyStatus === '已核验',
  ).length

  return (
    <section className="stats-panel" aria-label="书单统计">
      <p>
        <span>
          共 <strong>{books.length}</strong> 本书
        </span>
        <i aria-hidden="true">·</i>
        <span>
          <strong>{authorCount}</strong> 位作者
        </span>
        <i aria-hidden="true">·</i>
        <span>
          <strong>{topicCount}</strong> 个主题
        </span>
        <i aria-hidden="true">·</i>
        <span>
          已核验 <strong>{verifiedCount}</strong> 本
        </span>
      </p>
    </section>
  )
}
