<script>
const author = reactive({
  name: 'JK Rowling',
  books: [
    {
      title: 'Harry Poter 1',
      releaseDate: '1999',
      reviews: [5,5,5],
      avgReview: 5
    },
    {
      title: 'Harry Poter 2',
      releaseDate: '2001',
      reviews: [1,2,3],
      avgReview: 2
    },
  ]
})
// end--------------------------
</script>

<template>
    <p>List Rendering</p>
  <h2>Books:</h2>
  <ul>
    <!-- mapping -->
    <li v-for="book in author.books" :key="book.title">
       {{ book.releaseDate }}
    </li>
    <li v-for="(book, index) in author.books" :key="`${index}`">
       {{ book.title }}
    </li>
  
    <li v-for="({title, releaseDate}, index) in author.books" :key="`book-${index}`">
       {{ title }} - {{ releaseDate }}
       <span v-for="(review, reviewIndex) in reviews" :key="`review-${reviewIndex}`">
        {{ review }}
       </span>
    </li>
  </ul>

  <ul>
    <li v-for="(data, key, index) in author" :key="key">
      {{ index }}. {{ key }}: {{ data }}
    </li>
  </ul>

  <ol>
    <li v-for="(item, index) in 10" :key="index">
     {{ item }} Nabil Fadilah
    </li>
  </ol>

  <ul>
    <template v-for="(item, index) in author.books" :key="index">
      <li v-if="item.avgReview > 3">{{ item.title }}</li>
      <MainButton v-if="item.avgReview >3" :title="item.title" />
    </template>
  </ul>
</template>