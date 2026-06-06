import { useMemo } from 'react'
import type { Book } from '../data/books'

type SpiritMapProps = {
  books: Book[]
}

const directions = [
  {
    name: '法律与正义',
    keywords: ['法律与正义', '法律', '正义', '制度', '权力'],
    description: '追问规则如何形成，以及正义如何在现实制度中被实践。',
  },
  {
    name: '公共表达',
    keywords: ['公共表达', '公共讨论', '话语权', '辩论', '传播', '媒体'],
    description: '练习在公共空间中清楚表达、认真倾听并回应分歧。',
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
    description: '理解个体如何在限制中作出选择，并承担选择的重量。',
  },
  {
    name: '文学与人生',
    keywords: ['文学与人生', '文学', '原生家庭', '家庭期待', '人生'],
    description: '借故事与人物经验，辨认人生中细微而普遍的感受。',
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
    description: '看见女性经验、自我形成与成长过程中的复杂处境。',
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
    description: '从日常关系、制度和历史环境中理解社会如何运转。',
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
    description: '通过概念与论证，持续检视我们习以为常的判断。',
  },
]

export function SpiritMap({ books }: SpiritMapProps) {
  const items = useMemo(
    () =>
      directions.map((direction) => {
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
      }),
    [books],
  )

  return (
    <section className="spirit-section" aria-labelledby="spirit-map-title">
      <div className="section-heading">
        <div>
          <p className="section-index">02 / SPIRIT MAP</p>
          <h2 id="spirit-map-title">书单精神地图</h2>
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
              {item.relatedKeywords.length > 0 ? (
                item.relatedKeywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))
              ) : (
                <span>暂无匹配条目</span>
              )}
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
