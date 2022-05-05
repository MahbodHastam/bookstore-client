import pic1 from '../public/img/books/pic1.jpg'
import pic2 from '../public/img/books/pic2.jpg'
import pic3 from '../public/img/books/pic3.jpg'
import pic4 from '../public/img/books/pic4.jpg'
import pic5 from '../public/img/books/pic5.jpg'
import picHaha from '../public/img/books/haha.jpg'

export const popularBooksRaw = [
  {
    title: 'علی پسری در مزرعه',
    cover: pic1,
    free: true,
    attributes: { pages: 12 },
  },
  {
    title: 'گوربه‌ای میان درختان',
    cover: pic2,
    free: true,
    attributes: { pages: 129 },
  },
  {
    title: 'گودرت خاک',
    cover: pic3,
    free: false,
    attributes: { pages: 75 },
  },
  {
    title: 'عمو پورنگ و خانه‌ی ما',
    cover: pic4,
    free: false,
    attributes: { pages: 193 },
  },
]

export const newestBooksRaw = [
  {
    title: 'علی پسری در مزرعه',
    cover: pic1,
    free: true,
    attributes: { pages: 12 },
  },
  {
    title: 'عمو پورنگ و خانه‌ی ما',
    cover: pic4,
    free: false,
    attributes: { pages: 193 },
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
    title: 'عمو پورنگ و خانه‌ی ما',
    cover: pic4,
    free: false,
    attributes: { pages: 193 },
  },
]

export default {
  popularBooksRaw,
  newestBooksRaw,
  nonFreeBooksRaw,
}
