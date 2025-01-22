<!-- script tempat menyimpan logic-logic/component -->
<script setup>
// import CompositionComponent from './components/CompositionComponent.vue'; // register component secara Global
// import MainButton from './components/MainButton.vue'; // register component secara Global
import { reactive, ref } from 'vue';
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


  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <p>Hello Ganteng</p>
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  </header>

  <MainButton></MainButton>
  <p>{{ name }}</p>
  <MainButton/>
  <MainButton/>
  <MainButton v-bind:title="`test`"/>

  <OptionsComponent />
  <CompositionComponent />

  <main>

    Hello Alam Dunia
    <!-- <TheWelcome /> -->
  </main>

  <p>------------</p>
  <!-- text Interpolation -->
  <!-- atributte binding = idBlog -->
  <!-- shorthand = v-bind:class -->
  <!-- bisa langsung pakai titik dua (:) -->
  <div :id="idBlog" v-bind:class="blogClass">
    text interpolation : {{ blogPost }}
  </div>

  <!-- Row HTML -->
  <div v-html="blogPost"></div>
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
