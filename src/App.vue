<!-- script tempat menyimpan logic-logic/component -->
<script setup>
// import CompositionComponent from './components/CompositionComponent.vue'; // register component secara Global
// import MainButton from './components/MainButton.vue'; // register component secara Global
import { reactive, ref, computed, provide } from 'vue';
import HelloWorld from './components/HelloWorld.vue' 
import HoleButton from './components/HoleButton.vue';
import MainButton from './components/MainButton.vue';
import OptionsComponent from './components/OptionsComponent.vue';
import TheWelcome from './components/TheWelcome.vue'
import InfoButton from './components/InfoButton.vue';
import SlotButton from './components/SlotButton.vue';
import CompositionComponent from './components/CompositionComponent.vue';

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
// const author = reactive({
//   name: 'JK Rowling',
//   books: [
//     'Harry Poter 1',
//     'Harry Poter 2',
//   ]
// })

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

// list rendering
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

//class & style binding
const disabled = ref(false);
const toggleDisable = () => {
  disabled.value = !disabled.value
}
//end---------------------------

// Event Handling
const count4 = ref(0); // inline handling 
const increment3 = () => { // method handling
  count4.value = count4.value + 1
} 
function say(message) { // calling method in inline handler
  alert(message)
}

function warn(message, event) { // accessing event argument in line handler
  // sekarang kita memiliki akses ke acara asli
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
//end---------------------------

// Form Input binding</p>
const nama = ref('Nadia')
const desc = ref('')
const checked = ref(false)
const checkedNames = ref([])
//end---------------------------

// Provide & Inject
function updateName() { // untuk update name
  nama.value = "Nadia Putri Bahtera"
}

provide('name', { 
  nama, updateName
});
//end---------------------------
 
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
  <p>------------------------------</p>

  <p>class & style binding</p>
  <InfoButton />
  <InfoButton @click="toggleDisable" :disabled="disabled" />
  <p>------------------------------</p>

  <p>Event Handling</p>
  <!-- inline handling = eventnya langsung dijalankan -->
  <h5>inilne handling</h5>
  <button @click="count4++">{{ count4 }}</button>
  
  <!-- method handling = lebih kompleks -->
  <h5>method handling</h5>
  <button @click="increment3">{{ count4 }}</button>

  <!-- calling method in inline handler -->
  <h5>calling method in inline</h5>
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>

  <!-- Accessing Event Argument in Inline Handlers -->
  <!-- menggunakan $event special variable -->
  <h5>Accessing Event in Inline</h5>
  <button @click="(event) => console.log(event)" @mouseover="increment3">
    {{ count4 }}
  </button>

  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  <!-- menggunakan inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>

  <!-- key modifiers -->
  <h5>Key Modifiers</h5>
  <input @keyup.enter="() => console.log('test up')">
  <input @keydown="() => console.log('test down')">
  
  <!-- stystem modifier keys -->
  <!-- Alt + Enter -->
  <input @keyup.alt.enter="clear" />

  <!-- Ctrl + Click -->
  <div @click.ctrl="doSomething">Do something</div>

  <p>------------------------------</p>

  <p>Fallthrough Attribute</p>
  <HoleButton class="button-saya" />
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

  <p>Form Input binding</p>
  <h5>{{ nama }}</h5>
  <!-- lebih ringkas dengan v-model -->
  <input type="text" v-model="nama"> 
  
  <!-- Text -->
  <br><br>
  <input type="text" :value="nama" @input="(event) => (nama = event.target.value)" />
  
  <!-- Multiline Text -->
  <br><br>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ desc }}</p>
  <textarea v-model="desc" placeholder="add multiple lines"> </textarea>

  <!-- Checkbox -->
  <br><br>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <br><br>
  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>

  <!-- Radio -->
  <br><br>
  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <!-- Select -->
  <br><br>
  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <!-- Value Binding -->
  <br><br>
  <!-- `picked` is a string "a" when checked -->
  <input type="radio" v-model="picked" value="a" />

  <!-- `toggle` is either true or false -->
  <input type="checkbox" v-model="toggle" />

  <!-- `selected` is a string "abc" when the first option is selected -->
  <select v-model="selected">
    <option value="abc">ABC</option>
  </select>

  <!-- Checkbox -->
  <br><br>
  <input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no" />

  <input
  type="checkbox"
  v-model="toggle"
  :true-value="dynamicTrueValue"
  :false-value="dynamicFalseValue" />

  <!-- Radio -->
  <br><br>
  <input type="radio" v-model="pick" :value="first" />
  <input type="radio" v-model="pick" :value="second" />

  <!-- Select Options -->
  <select v-model="selected">
    <!-- inline object literal -->
    <option :value="{ number: 123 }">123</option>
  </select>

  <!-- Modifiers -->
  <!-- synced after "change" instead of "input" -->
  <input v-model.lazy="msg" />
  <input v-model.number="age" />
  <input v-model.trim="msg" />
  <br><br>
  <p>------------------------------</p>

  <p>Slot Outlet</p>
  <SlotButton>Ini Slot Button</SlotButton>
  <br><br>

  <SlotButton>
    <template #header>
      <h1>HOLLA</h1>
      <h2>Test slot</h2>
    </template>
  </SlotButton>

  <!-- Conditional Slot -->
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    
    <div v-if="$slots.default" class="card-content">
      <slot></slot>
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
  <p>------------------------------</p>

  <p>Provide & Inject</p>
  <CompositionComponent />
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
