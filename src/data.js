import pic1 from '../public/img/books/pic1.jpg'
import pic2 from '../public/img/books/pic2.jpg'
import pic3 from '../public/img/books/pic3.jpg'
import pic4 from '../public/img/books/pic4.jpg'
import pic5 from '../public/img/books/pic5.jpg'
import picHaha from '../public/img/books/haha.jpg'

import book1 from '../public/img/books/book1.jpg'
import book2 from '../public/img/books/book2.jpg'
import book3 from '../public/img/books/book3.jpg'
import book4 from '../public/img/books/book4.jpg'

export const popularBooksRaw = [
  {
    title: 'ملت پرنده سه‌پا',
    cover: book1,
    free: true,
    attributes: { pages: 12 },
  },
  {
    title: 'مکالمات روزمره انگلیسی',
    cover: book2,
    free: true,
    attributes: { pages: 129 },
  },
  {
    title: 'ملودی سکوت',
    cover: book3,
    free: false,
    attributes: { pages: 75 },
  },
  {
    title: 'هنر برنامه‌نویسی چند پردازنده‌ای - جلد اول',
    cover: book4,
    free: false,
    attributes: { pages: 193 },
  },
]

export const newestBooksRaw = [
  {
    title: 'ملت پرنده سه‌پا',
    cover: book1,
    free: true,
    attributes: { pages: 12 },
  },
  {
    title: 'مکالمات روزمره انگلیسی',
    cover: book2,
    free: true,
    attributes: { pages: 129 },
  },
]

export const nonFreeBooksRaw = [
  {
    title: 'گودرت خاک',
    cover: pic3,
    free: false,
    attributes: { pages: 75 },
  },
  {
    title: 'مکالمات روزمره انگلیسی',
    cover: book2,
    free: true,
    attributes: { pages: 129 },
  },
]

export default {
  popularBooksRaw,
  newestBooksRaw,
  nonFreeBooksRaw,
}
