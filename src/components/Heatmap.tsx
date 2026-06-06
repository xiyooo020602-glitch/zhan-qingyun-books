import { Fragment, useMemo } from 'react'
import type { Book } from '../data/books'

type HeatmapProps = {
  books: Book[]
}

export function Heatmap({ books }: HeatmapProps) {
  const sourceTypes = useMemo(
    () => [...new Set(books.map((book) => book.sourceType))],
    [books],
  )
  const tags = useMemo(() => {
    const counts = new Map<string, number>()

    books.forEach((book) => {
      book.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1))
    })

    return [...counts]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-CN'))
      .slice(0, 8)
      .map(([tag]) => tag)
  }, [books])

  const getCount = (tag: string, sourceType: string) =>
    books.filter(
      (book) => book.sourceType === sourceType && book.tags.includes(tag),
    ).length

  return (
    <section className="heatmap-section" aria-labelledby="heatmap-title">
      <div className="section-heading">
        <div>
          <p className="section-index">02 / MAP</p>
          <h2 id="heatmap-title">标签与来源分布</h2>
        </div>
        <p>基于当前档案数据生成</p>
      </div>

      <div
        className="heatmap"
        style={{
          gridTemplateColumns: `150px repeat(${sourceTypes.length}, minmax(92px, 1fr))`,
        }}
        aria-label="标签与来源类型分布图"
      >
        <span className="heatmap-corner">标签 / 来源</span>
        {sourceTypes.map((sourceType) => (
          <span className="heatmap-column" key={sourceType}>
            {sourceType}
          </span>
        ))}

        {tags.map((tag) => (
          <Fragment key={tag}>
            <span className="heatmap-label">{tag}</span>
            {sourceTypes.map((sourceType) => {
              const count = getCount(tag, sourceType)
              const intensity =
                count >= 2 ? 'strong' : count === 1 ? 'medium' : ''

              return (
                <span
                  className={`heatmap-cell ${intensity}`}
                  key={`${tag}-${sourceType}`}
                  title={`${tag} · ${sourceType}：${count} 本`}
                >
                  {count || ''}
                </span>
              )
            })}
          </Fragment>
        ))}
      </div>
      <div className="heatmap-legend" aria-hidden="true">
        <span>0</span>
        <i className="legend-block" />
        <i className="legend-block medium" />
        <i className="legend-block strong" />
        <span>2+</span>
      </div>
    </section>
  )
}
