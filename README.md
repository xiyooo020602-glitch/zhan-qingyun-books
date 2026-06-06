# 詹青云推荐书籍大全

一个使用 Vite、React 和 TypeScript 构建的静态书籍档案网站，用于整理詹青云在公开节目、访谈、文章与分享中推荐、提及、引用讨论或相关延伸的书籍。

数据维护规范和表格模板见 [DATA_TEMPLATE.md](./DATA_TEMPLATE.md)。

## 如何新增一本书

1. 打开 `src/data/books.ts`。
2. 在 `books` 数组末尾复制一条现有对象。
3. 分配一个未使用的 `id`，并填写全部字段。
4. `themes` 和 `tags` 使用字符串数组，例如 `['公共表达', '自由']`。
5. 保存后运行 `npm run build` 和 `npm run lint` 检查数据格式。

字段含义、允许使用的枚举值以及可复制的表格模板见 [DATA_TEMPLATE.md](./DATA_TEMPLATE.md)。

## 如何添加封面

1. 将图片放入 `public/covers`。
2. 推荐使用书籍 `id` 命名，例如 `public/covers/13.jpg`。
3. 在书籍数据中填写 `cover: '/covers/13.jpg'`。
4. 没有封面时填写 `cover: ''`，页面会自动显示 MUJI 风占位封面。

建议使用竖版书封图片。页面会保持统一的 `2:3` 展示比例，不要在数据中填写本机绝对路径。

## 如何标记来源可信度

`sourceType` 使用以下值：

- `明确推荐`：一手来源能确认推荐语境。
- `公开提到`：公开内容中提到了书，但没有明确推荐。
- `引用讨论`：引用书中内容或观点展开讨论。
- `主题延伸`：相关议题的延伸阅读，不代表直接提到。

`verifyStatus` 使用以下值：

- `已核验`：已检查原始内容，来源和语境相符。
- `待核验`：尚未找到或尚未完整检查一手来源。

没有可靠来源时，应使用 `sourceType: '主题延伸'`、`verifyStatus: '待核验'`，并将 `sourceUrl` 留空。

## 如何运行网站

安装依赖：

```bash
npm install
```

启动本地开发服务器：

```bash
npm run dev
```

默认访问地址为 `http://127.0.0.1:5173/` 或终端中 Vite 显示的地址。

构建和检查：

```bash
npm run build
npm run lint
```
