import { useMemo } from 'react'
import type { Book } from '../data/books'

type SpiritMapProps = {
  books: Book[]
}

const directions = [
  {
    name: '法律与正义',
    keywords: ['法律与正义', '法律', '正义', '制度', '权力'],
    description: '从规则与现实的缝隙里，看看我们如何理解公平与正义。',
  },
  {
    name: '公共表达',
    keywords: ['公共表达', '公共讨论', '话语权', '辩论', '传播', '媒体'],
    description: '学习把话说清楚，也在不同声音里保留倾听与回应。',
  },
  {
    name: '自由与个体',
    keywords: [
      '自由与个体',
      '自由',
      '内在自由',
      '自我认同',
      '身份认同',
      '责任',
    ],
    description: '在现实的边界里辨认自己，慢慢找到选择与自由的位置。',
  },
  {
    name: '文学与人生',
    keywords: ['文学与人生', '文学', '原生家庭', '家庭期待', '人生'],
    description: '跟随故事和人物，看见那些细小、真实又彼此相通的人生感受。',
  },
  {
    name: '女性与成长',
    keywords: [
      '女性与成长',
      '女性成长',
      '女性主义',
      '女性权利',
      '性别',
    ],
    description: '沿着女性的生活与成长经验，理解自我如何一点点形成。',
  },
  {
    name: '社会观察',
    keywords: [
      '社会观察',
      '社会',
      '社会关系',
      '基层社会',
      '社会发展',
      '社会秩序',
      '社会规训',
    ],
    description: '从日常生活出发，看看人与制度、时代和彼此怎样发生联系。',
  },
  {
    name: '思辨与哲学',
    keywords: [
      '思辨与哲学',
      '生活哲学',
      '哲学',
      '安住当下',
      '思考方式',
    ],
    description: '借一些古老与当代的思考，重新打量习以为常的生活。',
  },
]

export function SpiritMap({ books }: SpiritMapProps) {
  const items = useMemo(
    () =>
      directions
        .map((direction) => {
          const matchedBooks = books.filter((book) => {
            const terms = new Set([...book.themes, ...book.tags])
            return direction.keywords.some((keyword) => terms.has(keyword))
          })
          const relatedKeywords = direction.keywords.filter((keyword) =>
            matchedBooks.some((book) =>
              [...book.themes, ...book.tags].includes(keyword),
            ),
          )

          return {
            ...direction,
            count: matchedBooks.length,
            relatedKeywords,
          }
        })
        .filter((item) => item.count > 0),
    [books],
  )

  return (
    <section className="spirit-section" aria-labelledby="spirit-map-title">
      <div className="section-heading">
        <div>
          <p className="section-index">03 / SPIRIT MAP</p>
          <h2 id="spirit-map-title">精神地图</h2>
        </div>
        <p>从主题与标签中归纳阅读方向</p>
      </div>

      <div className="spirit-grid">
        {items.map((item) => (
          <article className="spirit-card" key={item.name}>
            <div className="spirit-card-heading">
              <h3>{item.name}</h3>
              <span>{item.count} 本</span>
            </div>
            <div className="spirit-keywords">
              {item.relatedKeywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
