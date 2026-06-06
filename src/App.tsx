import { useMemo, useState } from 'react'
import './App.css'
import { AuthorCloud } from './components/AuthorCloud'
import { BookCard } from './components/BookCard'
import { BookModal } from './components/BookModal'
import { FilterBar } from './components/FilterBar'
import { SpiritMap } from './components/SpiritMap'
import { StatsPanel } from './components/StatsPanel'
import { ThemeBarChart } from './components/ThemeBarChart'
import { ThemeShelves } from './components/ThemeShelves'
import { books } from './data/books'
import type { Book } from './data/books'

function App() {
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState('全部')
  const [sourceType, setSourceType] = useState('全部')
  const [verifyStatus, setVerifyStatus] = useState('全部')
  const [readingStatus, setReadingStatus] = useState('全部')
  const [modalBook, setModalBook] = useState<Book | null>(null)

  const themes = useMemo(
    () => ['全部', ...new Set(books.flatMap((book) => book.themes))],
    [],
  )
  const sourceTypes = ['全部', '明确推荐', '公开提到', '引用讨论', '主题延伸']
  const verifyStatuses = ['全部', '已核验', '待核验']
  const readingStatuses = ['全部', '想读', '在读', '读过', '暂不确定']

  const clearFilters = () => {
    setQuery('')
    setTheme('全部')
    setSourceType('全部')
    setVerifyStatus('全部')
    setReadingStatus('全部')
  }

  const filteredBooks = useMemo(() => {
    const keyword = query.trim().toLowerCase()

    return books.filter((book) => {
      const matchesTheme = theme === '全部' || book.themes.includes(theme)
      const matchesSource =
        sourceType === '全部' || book.sourceType === sourceType
      const matchesVerify =
        verifyStatus === '全部' || book.verifyStatus === verifyStatus
      const matchesReading =
        readingStatus === '全部' || book.status === readingStatus
      const matchesQuery =
        !keyword ||
        [
          book.title,
          book.author,
          book.sourceTitle,
          book.evidence,
          book.readingValue,
          ...book.tags,
          ...book.themes,
        ].some((value) => value.toLowerCase().includes(keyword))

      return (
        matchesTheme &&
        matchesSource &&
        matchesVerify &&
        matchesReading &&
        matchesQuery
      )
    })
  }, [query, readingStatus, sourceType, theme, verifyStatus])

  const selectBook = (book: Book) => {
    setModalBook(book)
  }

  return (
    <main className="archive-workspace">
      <div className="workspace-grid">
        <aside className="library-panel" aria-label="书籍档案与筛选">
          <header className="site-header">
            <a className="brand" href="#top" aria-label="返回首页">
              ZQ<span>·</span>BOOKS
            </a>
            <span className="header-note">阅读档案工作台</span>
          </header>

          <div className="library-heading" id="top">
            <p className="eyebrow">READING ARCHIVE · 2026</p>
            <h1>詹青云推荐书籍大全</h1>
            <p>一份持续整理的阅读清单</p>
          </div>

          <FilterBar
            query={query}
            theme={theme}
            themes={themes}
            sourceType={sourceType}
            sourceTypes={sourceTypes}
            verifyStatus={verifyStatus}
            verifyStatuses={verifyStatuses}
            readingStatus={readingStatus}
            readingStatuses={readingStatuses}
            onQueryChange={setQuery}
            onThemeChange={setTheme}
            onSourceTypeChange={setSourceType}
            onVerifyStatusChange={setVerifyStatus}
            onReadingStatusChange={setReadingStatus}
            onClear={clearFilters}
          />

          <StatsPanel
            books={books}
            topicCount={new Set(books.flatMap((book) => book.themes)).size}
          />

          <section className="books-section" aria-labelledby="books-title">
            <div className="section-heading">
              <div>
                <p className="section-index">01 / BOOKS</p>
                <h2 id="books-title">推荐书目</h2>
              </div>
              <p>共找到 {filteredBooks.length} 本</p>
            </div>

            {filteredBooks.length > 0 ? (
              <div className="book-grid">
                {filteredBooks.map((book, index) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    index={index}
                    onSelect={selectBook}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>暂时没有找到符合条件的书，也许可以换个关键词试试。</p>
                <button type="button" onClick={clearFilters}>
                  清除筛选
                </button>
              </div>
            )}
          </section>
        </aside>

        <section className="atlas-panel" aria-label="阅读图谱">
          <section className="hero">
            <p className="eyebrow">PRIVATE READING ATLAS</p>
            <h2>
              阅读不是一条直线，
              <br />
              而是一张缓慢展开的地图。
            </h2>
            <p className="intro">
              整理詹青云公开讲书中反复出现的女性、自由、文学与社会议题。
            </p>
          </section>

          <aside className="archive-notice" aria-label="档案说明">
            <span>档案说明</span>
            <p>
              本网站整理詹青云在公开节目、访谈、文章与分享中明确推荐、提及或引用讨论过的书籍。
              部分条目仍在核验中，仅作为阅读线索参考。
            </p>
          </aside>

          <ThemeShelves books={books} onSelect={selectBook} />
          <SpiritMap books={books} />
          <ThemeBarChart books={books} />
          <AuthorCloud books={books} />

          <footer>
            <p>詹青云推荐书籍大全</p>
            <p>资料持续整理中 · 仅供阅读参考</p>
          </footer>
        </section>

      </div>

      {modalBook && (
        <BookModal book={modalBook} onClose={() => setModalBook(null)} />
      )}
    </main>
  )
}

export default App
