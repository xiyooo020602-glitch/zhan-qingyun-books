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
  const pendingCount = books.length - verifiedCount

  return (
    <section className="stats-panel" aria-label="书单统计">
      <div className="stat">
        <p className="stat-value">{books.length}</p>
        <p className="stat-label">收录书籍 / BOOKS</p>
      </div>
      <div className="stat">
        <p className="stat-value">{authorCount}</p>
        <p className="stat-label">作者数量 / AUTHORS</p>
      </div>
      <div className="stat">
        <p className="stat-value">{topicCount}</p>
        <p className="stat-label">阅读主题 / TOPICS</p>
      </div>
      <div className="stat">
        <p className="stat-value">{verifiedCount}</p>
        <p className="stat-label">已核验 / VERIFIED</p>
      </div>
      <div className="stat">
        <p className="stat-value">{pendingCount}</p>
        <p className="stat-label">待核验 / PENDING</p>
      </div>
    </section>
  )
}
