<!-- script tempat menyimpan logic-logic/component -->
<script setup>
// import CompositionComponent from './components/CompositionComponent.vue'; // register component secara Global
// import MainButton from './components/MainButton.vue'; // register component secara Global
import HelloWorld from './components/HelloWorld.vue' 
import OptionsComponent from './components/OptionsComponent.vue';
import TheWelcome from './components/TheWelcome.vue'

const name = 'Nabil Fadilah'

// templet syntax
const blogPost = '<p style="color:red;">Ini adalah BlogPost</p>'

// atribute bindings
const idBlog = 'blog1'

// shorthand
const blogClass = 'text-2xl flex-col'

</script>

<!-- template untuk merender tag html/dalam script -->
<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <p>Hello Ganteng</p>
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  </header>

  <MainButton></MainButton>
  <p>{{ name }}</p>

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
