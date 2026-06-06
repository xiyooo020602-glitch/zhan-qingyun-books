import type { Book } from '../data/books'
import { BookCover } from './BookCover'

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
      <div className="book-cover-wrap">
        <BookCover book={book} size="card" />
        <span className="book-number">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="book-meta">
        <div className="book-badges">
          {book.themes.map((theme) => (
            <span className="book-topic" key={theme}>
              {theme}
            </span>
          ))}
          <span className="source-type">{book.sourceType}</span>
          <span
            className={`verify-status ${
              book.verifyStatus === '已核验' ? 'verified' : ''
            }`}
          >
            {book.verifyStatus}
          </span>
        </div>
        <h3>{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <div className="book-card-tags">
          {book.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="book-value">{book.readingValue}</p>
      </div>
    </article>
  )
}
