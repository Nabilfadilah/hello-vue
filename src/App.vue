<!-- script tempat menyimpan logic-logic/component -->
<script setup>
// import CompositionComponent from './components/CompositionComponent.vue'; // register component secara Global
// import MainButton from './components/MainButton.vue'; // register component secara Global
import { reactive, ref, computed } from 'vue';
import HelloWorld from './components/HelloWorld.vue' 
import HoleButton from './components/HoleButton.vue';
import MainButton from './components/MainButton.vue';
import OptionsComponent from './components/OptionsComponent.vue';
import TheWelcome from './components/TheWelcome.vue'

const name = 'Nabil Fadilah'

// templet syntax
const blogPost = '<p style="color:red;">Ini adalah BlogPost</p>'

// atribute bindings
const idBlog = 'blog1'

// shorthand
const blogClass = 'text-2xl flex-col'

// reactivity fundamaental
const count = ref(1)
setTimeout(() => {
  count.value++
}, 1000);
const increment = () => {
  count.value++
}

// reactive()
const user = reactive({name: 'Fadilah', age:'23'})
const orang = reactive(['Nmax', 49303, 'Bandung', 'Pasundan'])

// computed property
const author = reactive({
  name: 'JK Rowling',
  books: [
    'Harry Poter 1',
    'Harry Poter 2',
  ]
})

const count3 = ref(0)
const increment2 = () => {
  count3.value++
}

const isPublished = () => {
  console.log(author.books)
  return author.books.length > 0 ? 'Published yes': 'Published no'
}
const isPublished2 = computed(() => {
  console.log('test')
  return author.books.length > 0 ? 'Published yes': 'Published no'
})
const addBook = () => {
  author.books.push('Harry Sutisna 3')
}
// end--------------------------
// conditional redering
const showAuthor = ref(true) // authornya tampil jika bernilai true
// end--------------------------

</script>

<!-- template untuk merender tag html/dalam script -->
<template>
  <!-- menggunakn props -->
  <p>ini adalah contoh props button</p>
    <HoleButton v-bind:title="`test`" />
    <HoleButton :title="`+ Add Product`" />
  <p>------------------------------</p>

  <p>Reactivity</p>
  <button @click="increment">{{ count }}</button>
  <div>
    <h1>Nama : {{ user.name }}</h1>
    <h2>Umur : {{ user.age }}</h2>

    <h4>Motor : {{ orang[0] }}</h4>
    <h4>Kode Pos : {{ orang[1] }}</h4>
    <h4>Alamat : {{ orang[2] }}</h4>
    <h4>Univ : {{ orang[3] }}</h4>
  </div>
  <p>------------------------------</p>
  
  <p>compoted Property</p>
  <div>
    {{ author.books.length > 0 ? 'Published yes': 'Published no' }} 
  </div>
  <div>{{ isPublished() }}</div>
  <div>{{ isPublished2 }}</div>
  <button @click="increment2">{{ count3 }}</button>
  <button @click="addBook">{{ count3 }}</button>
  <p>------------------------------</p>

  <p>Conditional Rendering</p>
  <h1 v-if="showAuthor">Name : {{ author.name }}</h1>
  <h2>
    {{ author.name }}
    <span v-if="author.books.length > 1">Have more than one Book</span>
    <span v-else-if="author.books.length === 1">Have A Book</span>
    <span v-else>Don't Have a book</span>
  </h2>
  <p>------------------------------</p>
  
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    
    <p>Hello Ganteng</p>
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  </header>
  <p>------------------------------</p>

  <MainButton></MainButton>
  <p>{{ name }}</p>
  <MainButton/>
  <MainButton/>
  <MainButton v-bind:title="`test`"/>
  <p>------------------------------</p>

  <OptionsComponent />
  <CompositionComponent />
  <p>------------------------------</p>


  <main>

    Hello Alam Dunia
    <!-- <TheWelcome /> -->
  </main>
  <p>------------------------------</p>

  <!-- text Interpolation -->
  <!-- atributte binding = idBlog -->
  <!-- shorthand = v-bind:class -->
  <!-- bisa langsung pakai titik dua (:) -->
  <div :id="idBlog" v-bind:class="blogClass">
    text interpolation : {{ blogPost }}
  </div>
  <p>------------------------------</p>

  <!-- Row HTML -->
  <div v-html="blogPost"></div>
  <p>------------------------------</p>
</template>

<!-- style untuk tampilannya -->
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
