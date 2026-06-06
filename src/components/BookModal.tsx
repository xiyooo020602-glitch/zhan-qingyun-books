import { useEffect, useRef } from 'react'
import type { Book } from '../data/books'
import { BookCover } from './BookCover'

type BookModalProps = {
  book: Book
  onClose: () => void
}

export function BookModal({ book, onClose }: BookModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <section
        className="book-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-modal-title"
      >
        <button
          ref={closeButtonRef}
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="关闭书籍详情"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="modal-cover-wrap">
          <BookCover book={book} size="modal" />
        </div>

        <div className="modal-content">
          <p className="modal-kicker">BOOK ARCHIVE · {book.sourceType}</p>
          <h2 id="book-modal-title">{book.title}</h2>
          <p className="modal-author">{book.author}</p>

          <div className="modal-badges">
            <span className="source-type">{book.sourceType}</span>
            <span
              className={`verify-status ${
                book.verifyStatus === '已核验' ? 'verified' : ''
              }`}
            >
              {book.verifyStatus}
            </span>
            <span>{book.difficulty}</span>
            <span>{book.status}</span>
          </div>

          <div className="modal-tags">
            {[...new Set([...book.tags, ...book.themes])].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <dl className="modal-record">
            <div>
              <dt>来源标题</dt>
              <dd>{book.sourceTitle}</dd>
            </div>
            <div>
              <dt>证据说明</dt>
              <dd>{book.evidence}</dd>
            </div>
            <div>
              <dt>阅读价值</dt>
              <dd>{book.readingValue}</dd>
            </div>
            <div>
              <dt>个人备注</dt>
              <dd>{book.notes}</dd>
            </div>
            <div>
              <dt>来源链接</dt>
              <dd>
                {book.sourceUrl ? (
                  <a
                    href={book.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    查看来源
                  </a>
                ) : (
                  <span className="source-pending">来源待补充</span>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  )
}
