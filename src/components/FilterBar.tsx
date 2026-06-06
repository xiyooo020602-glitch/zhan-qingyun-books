type FilterBarProps = {
  query: string
  theme: string
  themes: string[]
  sourceType: string
  sourceTypes: string[]
  verifyStatus: string
  verifyStatuses: string[]
  readingStatus: string
  readingStatuses: string[]
  onQueryChange: (value: string) => void
  onThemeChange: (value: string) => void
  onSourceTypeChange: (value: string) => void
  onVerifyStatusChange: (value: string) => void
  onReadingStatusChange: (value: string) => void
  onClear: () => void
}

type FilterGroupProps = {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

function FilterGroup({
  label,
  value,
  options,
  onChange,
}: FilterGroupProps) {
  return (
    <div className="filter-group">
      <span className="filter-label">{label}</span>
      <div className="filter-options">
        {options.map((item) => (
          <button
            className={item === value ? 'active' : ''}
            type="button"
            key={item}
            aria-pressed={item === value}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export function FilterBar({
  query,
  theme,
  themes,
  sourceType,
  sourceTypes,
  verifyStatus,
  verifyStatuses,
  readingStatus,
  readingStatuses,
  onQueryChange,
  onThemeChange,
  onSourceTypeChange,
  onVerifyStatusChange,
  onReadingStatusChange,
  onClear,
}: FilterBarProps) {
  const hasActiveFilters =
    Boolean(query) ||
    [theme, sourceType, verifyStatus, readingStatus].some(
      (value) => value !== '全部',
    )

  return (
    <section className="filter-bar" aria-label="书籍筛选">
      <div className="filter-top">
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
            placeholder="搜索书名、作者、主题、标签或来源"
          />
        </label>
        <button
          className="clear-filters"
          type="button"
          onClick={onClear}
          disabled={!hasActiveFilters}
        >
          清空筛选
        </button>
      </div>

      <div className="filter-groups">
        <FilterGroup
          label="主题"
          value={theme}
          options={themes}
          onChange={onThemeChange}
        />
        <FilterGroup
          label="来源"
          value={sourceType}
          options={sourceTypes}
          onChange={onSourceTypeChange}
        />
        <FilterGroup
          label="核验"
          value={verifyStatus}
          options={verifyStatuses}
          onChange={onVerifyStatusChange}
        />
        <FilterGroup
          label="阅读"
          value={readingStatus}
          options={readingStatuses}
          onChange={onReadingStatusChange}
        />
      </div>
    </section>
  )
}
