<script setup>
const backgroundColor = ref('#000')

const { data } = await useFetch('https://random-flat-colors.vercel.app/api/random?count=2')
backgroundColor.value = data.value.colors[0]
</script>

<template>
  <div class="page">
    <p class="page__name">Incremental Static Regeneration</p>
    <p>{{ backgroundColor }}</p>
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
</style>