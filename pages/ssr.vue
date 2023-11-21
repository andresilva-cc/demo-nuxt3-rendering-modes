<script setup>
const backgroundColor = ref('#000')

const { data } = await useFetch('https://random-flat-colors.vercel.app/api/random?count=2')
backgroundColor.value = data.value.colors[0]

function handleClick() {
  alert('Clicked')
}
</script>

<template>
  <div class="page">
    <p class="page__name">Server-Side Rendering</p>
    <p>{{ backgroundColor }}</p>
    <button class="page__button" @click="handleClick">Click Me</button>
  </div>
</template>

<style scoped>
p {
  margin: 0;
  color: v-bind(backgroundColor);
  filter: invert(100%);
}

.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: v-bind(backgroundColor);
  text-transform: uppercase;
  font-weight: bold;
}

.page__name {
  font-size: 24px;
  margin-bottom: 32px;
}

.page__button {
  background-color: transparent;
  color: v-bind(backgroundColor);
  backdrop-filter: invert(100%);
  border: none;
  text-transform: uppercase;
  margin-top: 32px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;
  
}
</style>