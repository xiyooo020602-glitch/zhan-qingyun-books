type FilterBarProps = {
  query: string
  topic: string
  topics: string[]
  sourceType: string
  sourceTypes: string[]
  onQueryChange: (value: string) => void
  onTopicChange: (value: string) => void
  onSourceTypeChange: (value: string) => void
}

export function FilterBar({
  query,
  topic,
  topics,
  sourceType,
  sourceTypes,
  onQueryChange,
  onTopicChange,
  onSourceTypeChange,
}: FilterBarProps) {
  return (
    <section className="filter-bar" aria-label="书籍筛选">
      <label className="search-box">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" />
          <path d="m16 16 4 4" stroke="currentColor" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="搜索书名、作者或关键词"
        />
      </label>

      <div className="filter-groups">
        <div className="filter-group">
          <span className="filter-label">按主题</span>
          {topics.map((item) => (
            <button
              className={item === topic ? 'active' : ''}
              type="button"
              key={item}
              aria-pressed={item === topic}
              onClick={() => onTopicChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="filter-group">
          <span className="filter-label">按来源</span>
          {sourceTypes.map((item) => (
            <button
              className={item === sourceType ? 'active' : ''}
              type="button"
              key={item}
              aria-pressed={item === sourceType}
              onClick={() => onSourceTypeChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
