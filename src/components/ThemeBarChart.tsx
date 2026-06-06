import { useMemo } from 'react'
import type { Book } from '../data/books'

type ThemeBarChartProps = {
  books: Book[]
}

export function ThemeBarChart({ books }: ThemeBarChartProps) {
  const themeCounts = useMemo(() => {
    const counts = new Map<string, number>()

    books.forEach((book) => {
      const bookTerms = new Set([...book.themes, ...book.tags])
      bookTerms.forEach((term) => counts.set(term, (counts.get(term) ?? 0) + 1))
    })

    return [...counts]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-CN'))
      .slice(0, 8)
  }, [books])

  const maxCount = Math.max(...themeCounts.map(([, count]) => count), 1)

  return (
    <section className="theme-chart-section" aria-labelledby="theme-chart-title">
      <div className="section-heading theme-chart-heading">
        <div>
          <p className="section-index">04 / THEME CHART</p>
          <h2 id="theme-chart-title">当前收录主题</h2>
        </div>
        <p>基于目前收录书籍的关键词统计</p>
      </div>

      <div className="theme-chart">
        {themeCounts.map(([theme, count]) => (
          <div className="theme-bar-row" key={theme}>
            <span className="theme-bar-label">{theme}</span>
            <div className="theme-bar-track" aria-hidden="true">
              <span
                className="theme-bar-fill"
                style={{ width: `${(count / maxCount) * 100}%` }}
              />
            </div>
            <strong>{count}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
