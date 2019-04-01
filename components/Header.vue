<template>
  <header>
    <h1>
      We are all
      <strike>imposters</strike>.
      <span>human</span>
    </h1>
    <Nav/>
  </header>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: { Nav }
}
</script>

<style scoped>
h1 {
  margin: 0;
  text-align: center;
  font-size: 2.5em;
  padding: 1em 1em 0 1em;
}
span {
  font-family: 'Lovers Quarrel', cursive;
  font-size: 2em;
  transform: rotate(10deg);
  display: inline-block;
  background-color: #c850c0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  background-clip: text;
  color: transparent;
}
</style>
