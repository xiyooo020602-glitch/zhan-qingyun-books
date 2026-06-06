import { useMemo } from 'react'
import type { Book } from '../data/books'
import { BookCover } from './BookCover'

type ThemeShelvesProps = {
  books: Book[]
  onSelect: (book: Book) => void
}

const themeDescriptions: Record<string, string> = {
  女性与成长: '沿着女性经验、自我形成与成长过程，理解复杂处境。',
  文学与人生: '借故事与人物经验，辨认人生中细微而普通的感受。',
  自由与个体: '理解人在关系、制度与期待中如何保留自己的选择。',
  思辨与哲学: '通过概念与追问，重新理解生活中的判断与选择。',
  社会观察: '从日常关系、制度与历史环境中理解社会如何运转。',
  公共表达: '学习如何清楚表达，也在不同声音里保留倾听与回应。',
  法律与正义: '追问规则如何形成，以及正义如何在现实制度中被实践。',
}

const preferredThemeOrder = Object.keys(themeDescriptions)

export function ThemeShelves({ books, onSelect }: ThemeShelvesProps) {
  const shelves = useMemo(() => {
    const discoveredThemes = [
      ...new Set(books.flatMap((book) => book.themes)),
    ]
    const orderedThemes = [
      ...preferredThemeOrder,
      ...discoveredThemes.filter(
        (theme) => !preferredThemeOrder.includes(theme),
      ),
    ]

    return orderedThemes
      .map((theme) => ({
        theme,
        description:
          themeDescriptions[theme] ?? '从这个主题进入书单，继续展开阅读线索。',
        books: books.filter((book) => book.themes.includes(theme)),
      }))
      .filter((shelf) => shelf.books.length > 0)
  }, [books])

  return (
    <section className="theme-shelves-section" aria-labelledby="shelves-title">
      <div className="section-heading theme-shelves-heading">
        <div>
          <p className="section-index">02 / THEME SHELVES</p>
          <h2 id="shelves-title">主题书架</h2>
        </div>
        <p>从主题进入这份书单</p>
      </div>

      <div className="theme-shelves">
        {shelves.map((shelf) => (
          <section className="theme-shelf" key={shelf.theme}>
            <div className="theme-shelf-heading">
              <div>
                <h3>{shelf.theme}</h3>
                <p>{shelf.description}</p>
              </div>
              <span>{shelf.books.length} 本</span>
            </div>

            <div className="shelf-books">
              {shelf.books.map((book) => (
                <button
                  className="shelf-book"
                  type="button"
                  key={book.id}
                  onClick={() => onSelect(book)}
                  aria-label={`查看《${book.title}》详情`}
                >
                  <span className="shelf-cover">
                    <BookCover book={book} size="card" />
                  </span>
                  <strong>{book.title}</strong>
                  <span className="shelf-author">{book.author}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
