import { useMemo, useState } from 'react'
import './App.css'
import { BookCard } from './components/BookCard'
import { BookModal } from './components/BookModal'
import { FilterBar } from './components/FilterBar'
import { Heatmap } from './components/Heatmap'
import { StatsPanel } from './components/StatsPanel'
import { books } from './data/books'
import type { Book } from './data/books'

function App() {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('全部')
  const [sourceType, setSourceType] = useState('全部')
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const topics = useMemo(
    () => ['全部', ...new Set(books.map((book) => book.topic))],
    [],
  )
  const sourceTypes = useMemo(
    () => ['全部', ...new Set(books.map((book) => book.sourceType))],
    [],
  )

  const filteredBooks = useMemo(() => {
    const keyword = query.trim().toLowerCase()

    return books.filter((book) => {
      const matchesTopic = topic === '全部' || book.topic === topic
      const matchesSource =
        sourceType === '全部' || book.sourceType === sourceType
      const matchesQuery =
        !keyword ||
        [
          book.title,
          book.author,
          book.topic,
          book.notes,
          book.sourceType,
          book.sourceTitle,
          book.evidence,
          book.readingValue,
          ...book.tags,
          ...book.themes,
        ].some((value) => value.toLowerCase().includes(keyword))

      return matchesTopic && matchesSource && matchesQuery
    })
  }, [query, sourceType, topic])

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          ZQ<span>·</span>BOOKS
        </a>
        <span className="header-note">一份持续整理的阅读清单</span>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">READING ARCHIVE · 2026</p>
        <h1>
          詹青云推荐
          <br />
          书籍大全
        </h1>
        <p className="intro">
          从文学、历史到社会与哲学，整理詹青云在访谈、节目与公开分享中提及的书。
          在观点之外，循着阅读抵达更广阔的世界。
        </p>
      </section>

      <aside className="archive-notice" aria-label="档案说明">
        <span>档案说明</span>
        <p>
          本网站整理詹青云在公开节目、访谈、文章与分享中明确推荐、提及或引用讨论过的书籍。
          部分条目仍在核验中，仅作为阅读线索参考。
        </p>
      </aside>

      <FilterBar
        query={query}
        topic={topic}
        topics={topics}
        sourceType={sourceType}
        sourceTypes={sourceTypes}
        onQueryChange={setQuery}
        onTopicChange={setTopic}
        onSourceTypeChange={setSourceType}
      />

      <StatsPanel books={books} topicCount={topics.length - 1} />

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
                onSelect={setSelectedBook}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>没有找到匹配的书。</p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setTopic('全部')
                setSourceType('全部')
              }}
            >
              清除筛选
            </button>
          </div>
        )}
      </section>

      <Heatmap books={books} />

      <footer>
        <p>詹青云推荐书籍大全</p>
        <p>资料持续整理中 · 仅供阅读参考</p>
      </footer>

      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </main>
  )
}

export default App
