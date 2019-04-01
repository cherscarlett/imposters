<template>
  <nav>
    <ul>
      <li>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="50">The Invisible</text>
          </svg>
        </a>
      </li>
      <li>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg">
            <text text-anchor="end" x="90%" y="0">The Unicorn</text>
          </svg>
        </a>
      </li>
      <li>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg">
            <text x="40%" y="60%">The Observer</text>
          </svg>
        </a>
      </li>
      <li>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg">
            <text text-anchor="end" x="90%" y="80%">The Prodigy</text>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  height: 92vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: transparent no-repeat;
  background-image: url(~assets/brain.png);
  background-size: contain;
  background-position: center;
}
li {
  list-style: none;
}
a {
  display: block;
  transition: all 600ms ease-in-out;
  height: 100%;
  width: 100%;
  background-color: var(--colorCeramic);
  mix-blend-mode: hue;
  font-family: 'Lovers Quarrel', cursive;
  text-transform: lowercase;
  font-size: 3em;
}
a:hover {
  background-color: transparent;
}

a:hover text {
  background-color: transparent;
  animation: draw 3s forwards ease-in-out;
}
svg {
  height: 100%;
  width: 100%;
}
text {
  fill: transparent;
  stroke: black;
  stroke-dashoffset: 300px;
  stroke-dasharray: 300px;
  background-clip: text;
  transform: rotate(-3deg);
}

li:nth-child(2) text {
  transform: rotate(20deg);
}

li:nth-child(3) text {
  transform: rotate(13deg);
}

li:nth-child(4) text {
  transform: rotate(6deg);
}

@keyframes draw {
  50% {
    stroke-dashoffset: 0;
    fill: black;
  }
  100% {
    stroke-dashoffset: 0;
    fill: black;
    stroke: transparent;
  }
}
</style>
