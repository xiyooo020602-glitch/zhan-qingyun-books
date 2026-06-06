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
  {
    id: "a-tree-grows-in-brooklyn",
    title: "布鲁克林有棵树",
    author: "贝蒂·史密斯",
    cover: "/covers/a-tree-grows-in-brooklyn.jpg",
    themes: ["文学与人生", "女性与成长"],
    tags: ["成长", "贫困", "阅读改变命运"],
    sourceType: "明确推荐",
    sourceTitle: "小红书｜詹青云讲《布鲁克林有棵树》",
    sourceUrl: "http://xhslink.com/o/AWI0EElffM",
    evidence: "詹青云在小红书“阿詹’s 讲书”合集发布《布鲁克林有棵树》相关内容，称这本书是“这是我更希望所有女孩去读的一本书”，并提到书中的“天堂树”象征主人公弗兰西一家在贫困绝境中依然生生不息、努力成长的力量，也强调弗兰西的妈妈和外婆坚信教育能够改变命运，执着地让孩子们读书。",
    readingValue: "适合理解贫困、成长、家庭支持与阅读如何改变一个人的命运。它提醒人：成长的意义不只在结果，也在于真实生活中持续坚持的过程。",
    verifyStatus: "已核验",
    difficulty: 2,
    status: "想读",
    notes: "可归入女性成长、文学与人生、阅读改变命运主题；詹青云强调它是一部很治愈的成长小说。"
  },
  {
    id: "twelve-christmas-stories",
    title: "十二个圣诞故事",
    author: "珍妮特·温特森",
    cover: "/covers/twelve-christmas-stories.jpg",
    themes: ["文学与人生"],
    tags: ["圣诞故事", "节日阅读", "轻松思考"],
    sourceType: "明确推荐",
    sourceTitle: "小红书｜詹青云讲《十二个圣诞故事》",
    sourceUrl: "http://xhslink.com/o/3DU3Sjev6mT",
    evidence: "詹青云在小红书“阿詹’s 讲书”合集发布《十二个圣诞故事》相关内容，视频文案为“圣诞节竟然是一个乱搅的节日”。她提到这本书的序言讨论了圣诞节的起源和演变，比如圣诞节日期的由来、圣诞老人形象的变迁等，并认为这本书适合在节假日期间轻松阅读，其中的小故事既有趣也引人思考。",
    readingValue: "适合节日期间阅读，通过圣诞故事理解传统、仪式感与节日背后的文化流变。",
    verifyStatus: "已核验",
    difficulty: 2,
    status: "想读",
    notes: "可归入文学与人生、节日阅读主题；詹青云强调这本书适合轻松阅读，但也能引出对传统和仪式的思考。"
  },
  {
    id: "why-be-happy-when-you-could-be-normal",
    title: "我要快乐，不必正常",
    author: "珍妮特·温特森",
    cover: "/covers/why-be-happy-when-you-could-be-normal.jpg",
    themes: ["女性与成长", "文学与人生"],
    tags: ["创伤疗愈", "自我接纳", "书写疗愈"],
    sourceType: "明确推荐",
    sourceTitle: "小红书｜詹青云讲《我要快乐，不必正常》",
    sourceUrl: "http://xhslink.com/o/2GGuoPCyYct",
    evidence: "詹青云在小红书“阿詹’s 讲书”合集发布《我要快乐，不必正常》相关内容。她提到这本书是一本“读这本自愈之书”，并讨论作者被领养、被宗教狂热母亲抚养、寻找亲生母亲的人生经历，以及如何与创伤和解。詹青云特别解释了书名的由来：当作者向母亲解释自己在爱中感到快乐时，母亲反问“如果你可以正常，你为什么要快乐？”，而作者用自己的一生选择回答了这个问题——与“正常”相比，她宁愿选择“快乐”。",
    readingValue: "适合在被原生家庭、创伤记忆或“正常人生”的期待困住时阅读。它提醒人：无法选择手里的牌，但如何打好这副牌，是每个人自己的选择。",
    verifyStatus: "已核验",
    difficulty: 3,
    status: "想读",
    notes: "可归入女性成长、自我接纳、创伤疗愈主题；詹青云强调它是一本关于自愈和选择快乐的书。"
  },
  {
    id: "we-should-have-met-every-day",
    title: "我们本该日日相逢",
    author: "聂鲁达",
    cover: "/covers/we-should-have-met-every-day.jpg",
    themes: ["文学与人生"],
    tags: ["诗歌", "爱与自然", "浪漫想象"],
    sourceType: "明确推荐",
    sourceTitle: "小红书｜詹青云读《我们本该日日相逢》",
    sourceUrl: "http://xhslink.com/o/7dvHsNV828A",
    evidence: "詹青云在小红书“阿詹’s 讲书”合集发布《我们本该日日相逢》相关内容，视频文案为“今日限定：阿詹为你读诗 我们本该日日相逢”。她朗读了聂鲁达的诗歌《我们本该日日相逢》，并通过朗读传递诗中对未能实现的相遇、海边住所、四季更迭、爱人与自然的想象。",
    readingValue: "适合在想要重新感受诗歌、爱情、自然与浪漫想象时阅读。它不是强情节作品，而是让人进入一种温柔、辽阔又略带遗憾的情绪。",
    verifyStatus: "已核验",
    difficulty: 2,
    status: "想读",
    notes: "可归入文学与人生、诗歌阅读主题；适合作为书单中“轻盈但有情感浓度”的诗歌条目。"
  },
  {
    id: "burden-of-talented-women-li-qingzhao",
    title: "才女之累：李清照及其接受史",
    author: "艾朗诺",
    cover: "/covers/burden-of-talented-women-li-qingzhao.jpg",
    themes: ["女性与成长", "文学与人生"],
    tags: ["女性创作者", "李清照", "女性力量"],
    sourceType: "明确推荐",
    sourceTitle: "小红书｜詹青云讲《才女之累：李清照及其接受史》",
    sourceUrl: "http://xhslink.com/o/5N3ZCEApDSt",
    evidence: "詹青云在小红书“阿詹’s 讲书”合集发布李清照相关内容，视频文案为“李清照不是‘思夫模板’，她是独立的勇者”。她围绕《才女之累：李清照及其接受史》展开，指出传统上对李清照的印象常把她塑造成情感细腻、思念丈夫的“思夫模板”，但这种解读更多反映的是不同时代的需求和偏好，而非真实完整的李清照。",
    readingValue: "适合理理解女性创作者如何被历史叙事和性别标签塑造，也适合重新认识李清照的独立、勇气与复杂生命经验。",
    verifyStatus: "已核验",
    difficulty: 3,
    status: "想读",
    notes: "可归入女性成长、文学与人生、女性创作者主题；詹青云强调，李清照不是单薄的“思夫”形象，而是充满力量、智慧与勇气的独立女性。"
  },
  {
    id: "the-moon-and-sixpence",
    title: "月亮和六便士",
    author: "威廉·萨默塞特·毛姆",
    cover: "/covers/the-moon-and-sixpence.jpg",
    themes: ["文学与人生", "自由与个体"],
    tags: ["理想与现实", "自我选择", "人生取舍"],
    sourceType: "明确推荐",
    sourceTitle: "小红书｜詹青云讲《月亮和六便士》",
    sourceUrl: "http://xhslink.com/o/9sgqAtOc7i8",
    evidence: "詹青云在小红书发布相关内容，视频文案为“她不是别人的‘六便士’，是自己的‘月亮’”。她在解读中强调，“月亮”和“六便士”并不是非此即彼的单选题，而是可以动态平衡的光谱；同时提醒读者不要为了别人的“月亮”或“六便士”而放弃自己。",
    readingValue: "适合理解理想与现实、艺术追求与生活责任之间的关系，也适合思考人在现实条件中如何保留自己的选择。",
    verifyStatus: "已核验",
    difficulty: 2,
    status: "读过",
    notes: "可归入文学与人生、自由与个体、自我选择主题；詹青云的解读重点在于重新理解“月亮”与“六便士”的关系。"
  },
  {
    id: "the-labyrinth",
    title: "迷宫：一场存在主义历险",
    author: "本·阿尔冈",
    cover: "/covers/the-labyrinth.jpg",
    themes: ["思辨与哲学", "自由与个体"],
    tags: ["存在主义", "自由", "人生意义"],
    sourceType: "明确推荐",
    sourceTitle: "小红书｜詹青云讲《迷宫：一场存在主义历险》",
    sourceUrl: "http://xhslink.com/o/suibX3apG8",
    evidence: "詹青云在小红书“阿詹’s 讲书”相关内容中讨论存在主义中关于自由、选择与责任的核心问题。她用“被抛入迷宫的老鼠”作比喻，说明人一旦意识到自己拥有选择的自由，也必须承担随之而来的责任；自由既能赋予人生意义，也可能成为焦虑的来源。",
    readingValue: "适合理解存在主义中“自由与责任”的关系，也适合在感到迷茫、焦虑或不知如何选择时阅读。",
    verifyStatus: "已核验",
    difficulty: 3,
    status: "读过",
    notes: "这本书形式相对轻松，适合作为存在主义入门读物，也适合放入自由与责任主题。"
  },
]
