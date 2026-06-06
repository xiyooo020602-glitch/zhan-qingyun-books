export type BookSourceType =
  | '明确推荐'
  | '公开提到'
  | '引用讨论'
  | '主题延伸'

export type VerifyStatus = '已核验' | '待核验'
export type ReadingStatus = '想读' | '在读' | '读过' | '暂不确定'

export type Book = {
  id: string
  title: string
  author: string
  cover: string
  themes: string[]
  tags: string[]
  sourceType: BookSourceType
  sourceTitle: string
  sourceUrl: string
  evidence: string
  readingValue: string
  verifyStatus: VerifyStatus
  difficulty: number
  status: ReadingStatus
  notes: string
}

export const books: Book[] = [
  {
    id: 'everything-i-never-told-you',
    title: '无声告白',
    author: '伍绮诗',
    cover: '/covers/everything-i-never-told-you.jpg',
    themes: ['文学与人生'],
    tags: ['原生家庭', '自我认同', '家庭期待'],
    sourceType: '明确推荐',
    sourceTitle: '小红书｜詹青云读《无声告白》',
    sourceUrl: 'http://xhslink.com/o/3CWofpficeJ',
    evidence:
      '詹青云于 2024-08-06 在小红书“阿詹’s 讲书”合集发布《无声告白》相关内容，并写道“请别对我抱有自以为是的期待，放过我，谢谢……”。',
    readingValue:
      '适合理解原生家庭、父母期待与个体自我认同之间的拉扯。',
    verifyStatus: '已核验',
    difficulty: 2,
    status: '想读',
    notes:
      '华裔女作家的第一本小说；可作为家庭关系与自我寻找主题书目。',
  },
  {
    id: 'sexing-the-cherry',
    title: '给樱桃以性别',
    author: '珍妮特·温特森',
    cover: '/covers/sexing-the-cherry.jpg',
    themes: ['文学与人生', '女性与成长'],
    tags: ['女性成长', '性别', '身份认同'],
    sourceType: '明确推荐',
    sourceTitle: '小红书｜詹青云读《给樱桃以性别》',
    sourceUrl: 'http://xhslink.com/o/35834mz01np',
    evidence:
      '詹青云于 2026-02-03 在小红书发布《给樱桃以性别》相关内容，并写道“珍妮特·温特森的奇幻之作：《给樱桃以性别》”。',
    readingValue:
      '适合理解女性成长、性别标签、身份认同与童话叙事中的自我重塑。',
    verifyStatus: '已核验',
    difficulty: 3,
    status: '想读',
    notes: '可归入女性主义文学、奇幻文学与“撕掉女性标签”主题。',
  },
  {
    id: 'a-vindication-of-the-rights-of-woman',
    title: '女性的权利',
    author: '玛丽·沃斯通克拉夫特',
    cover: '/covers/a-vindication-of-the-rights-of-woman.jpg',
    themes: ['女性与成长', '自由与个体'],
    tags: ['女性主义', '女性权利', '话语权'],
    sourceType: '明确推荐',
    sourceTitle: '小红书｜詹青云读《女性的权利》',
    sourceUrl: 'http://xhslink.com/o/AHw3z7FNQQm',
    evidence:
      '詹青云于 2026-02-17 在小红书“阿詹’s 讲书”合集发布《女性的权利》相关内容，标题为“阿詹读玛丽·沃斯通克拉夫特《女性的权利》”，并配有女性成长、女性自由、女性话语权等标签。',
    readingValue:
      '适合理解女性主义思想的早期源流，以及女性如何争取教育、自由、话语权与主体价值。',
    verifyStatus: '已核验',
    difficulty: 4,
    status: '想读',
    notes:
      '可作为女性主义经典入门书，也适合放入“女性与成长”“自由与个体”主题。',
  },
  {
    id: 'zhuangzi',
    title: '庄子',
    author: '庄子',
    cover: '/covers/zhuangzi.jpg',
    themes: ['思辨与哲学', '自由与个体'],
    tags: ['生活哲学', '安住当下', '内在自由'],
    sourceType: '明确推荐',
    sourceTitle: '小红书｜詹青云读《庄子》：心宽一点，烦恼自然就少了',
    sourceUrl: 'http://xhslink.com/o/6AbBkDmfeYQ',
    evidence:
      '詹青云于 2026-05-08 在小红书“阿詹’s 讲书”合集发布《庄子》相关内容，标题为“阿詹读《庄子》：心宽一点，烦恼自然就少了”。她在视频中提到，《庄子》提供了一种更开阔的精神视角，让人从日常焦虑和局限中解脱出来；以《逍遥游》为例，大鹏和小鸟并不是高低贵贱之分，重点在于万物各安其性。',
    readingValue:
      '适合在焦虑、内耗、总是和别人比较时阅读。它不是为了积累国学知识，而是帮助人意识到：自己的人生节奏只是万千可能中的一种，安住自己的本性，也是一种自由。',
    verifyStatus: '已核验',
    difficulty: 4,
    status: '想读',
    notes:
      '可归入“生活哲学”“自由与个体”“安住当下”主题；重点不是鸡汤式心宽，而是从《庄子》的精神空间里理解不比较、不执着、各安其性。',
  },
  {
    id: "letters-from-an-afghan-woman",
    title: "一个阿富汗女人的来信",
    author: "哈迪亚·海达里",
    cover: "/covers/letters-from-an-afghan-woman.jpg",
    themes: ["女性与成长", "社会观察"],
    tags: ["女性处境", "阿富汗", "女性教育"],
    sourceType: "明确推荐",
    sourceTitle: "小红书｜詹青云讲《一个阿富汗女人的来信》",
    sourceUrl: "http://xhslink.com/o/2pLZrTHctP9",
    evidence: "詹青云在小红书“阿詹’s 讲书”合集发布《一个阿富汗女人的来信》相关内容，视频文案为“用一本书，看见阿富汗女性的困境”。她提到这本书记录了一位阿富汗女性及身边女性的真实生活经历，呈现她们在塔利班政权下所面临的困境。",
    readingValue: "适合理解阿富汗女性在教育、工作与日常生活中面临的现实处境，也适合放入女性议题和社会观察主题。",
    verifyStatus: "已核验",
    difficulty: 3,
    status: "想读",
    notes: "詹青云特别提到，购买实体书比阅读不完整电子版更能支持作者。"
  },
]
