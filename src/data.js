export const allBooksRaw = [
  {
    id: 1,
    title: 'ملت پرنده سه‌پا',
    cover: '/img/books/book1.jpg',
    free: true,
    attributes: { pages: 12 },
  },
  {
    id: 2,
    title: 'مکالمات روزمره انگلیسی',
    cover: '/img/books/book2.jpg',
    free: true,
    attributes: { pages: 129 },
  },
  {
    id: 3,
    title: 'مقدمه‌ای بر فیزیک هسته‌ای و ذرات',
    cover: '/img/books/book5.jpg',
    free: false,
    attributes: { pages: 340 },
  },
  {
    id: 4,
    title: 'ملودی سکوت',
    cover: '/img/books/book3.jpg',
    free: false,
    attributes: { pages: 75 },
  },
  {
    id: 5,
    title: 'هنر برنامه‌نویسی چند پردازنده‌ای - جلد اول',
    cover: '/img/books/book4.jpg',
    free: false,
    attributes: { pages: 193 },
  },
]

export const newestBooksRaw = [allBooksRaw[0], allBooksRaw[3]]

export const nonFreeBooksRaw = [allBooksRaw[4], allBooksRaw[1]]

export default {
  popularBooksRaw: allBooksRaw,
  newestBooksRaw,
  nonFreeBooksRaw,
}
