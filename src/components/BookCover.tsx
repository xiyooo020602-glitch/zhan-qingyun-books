import { useState } from 'react'
import type { Book } from '../data/books'

type BookCoverProps = {
  book: Book
  size: 'card' | 'modal'
}

export function BookCover({ book, size }: BookCoverProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(book.cover) && !imageFailed

  return (
    <div className={`book-cover book-cover-${size}`}>
      {showImage ? (
        <img
          src={book.cover}
          alt={`${book.title}封面`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="cover-placeholder" aria-label={`${book.title}占位封面`}>
          <span className="cover-series">PRIVATE LIBRARY</span>
          <div className="cover-title">
            <strong>{book.title}</strong>
            <span>{book.author}</span>
          </div>
          <span className="cover-topic">{book.topic}</span>
        </div>
      )}
    </div>
  )
}
