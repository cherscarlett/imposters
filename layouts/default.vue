<template>
  <Header/>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: { Header },
  head() {
    return {
      title: `Imposters`,
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Lovers+Quarrel|Josefin+Slab'
        }
      ]
    }
  }
}
</script>

<style>
:root {
  --colorCeramic: #fcf8f1;
  --colorBlack: rgba(21, 21, 21, 0.8);
}
body {
  background: var(--colorCeramic);
  color: var(--colorBlack);
  padding: 0;
  margin: 0;
  font-family: 'Josefin Slab', serif;
}
strike {
  text-decoration: none;
  position: relative;
}
strike:after {
  content: '/';
  font-family: 'Lovers Quarrel', cursive;
  position: absolute;
  transform: rotate(10deg) scale(11, 1) translateY(0.25em);
  transform-origin: 0% 0%;
  left: 0;
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
