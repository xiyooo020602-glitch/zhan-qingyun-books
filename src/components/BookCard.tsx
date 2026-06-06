import type { Book } from '../data/books'

type BookCardProps = {
  book: Book
  index: number
  onSelect: (book: Book) => void
}

export function BookCard({ book, index, onSelect }: BookCardProps) {
  return (
    <article
      className="book-card"
      role="button"
      tabIndex={0}
      aria-label={`查看《${book.title}》详情`}
      onClick={() => onSelect(book)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect(book)
        }
      }}
    >
      <div className="book-cover" style={{ backgroundColor: book.coverColor }}>
        {book.cover && <img src={book.cover} alt={`${book.title}封面`} />}
        <small>{String(index + 1).padStart(2, '0')}</small>
        <strong>{book.title}</strong>
        <small>{book.year > 0 ? book.year : `公元前 ${Math.abs(book.year)}`}</small>
      </div>
      <div className="book-meta">
        <div className="book-badges">
          <span className="book-topic">{book.topic}</span>
          <span className="source-type">{book.sourceType}</span>
          <span className={`verify-status ${book.verifyStatus === '已核验' ? 'verified' : ''}`}>
            {book.verifyStatus}
          </span>
        </div>
        <h3>{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <div className="book-details">
          <p>
            <span>收录依据</span>
            {book.evidence}
          </p>
          <p>
            <span>阅读价值</span>
            {book.readingValue}
          </p>
        </div>
      </div>
    </article>
  )
}
