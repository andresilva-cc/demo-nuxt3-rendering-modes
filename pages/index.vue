<template>
  <div class="home">
    <NuxtLink to="/csr">CSR</NuxtLink>
    <NuxtLink to="/ssr">SSR</NuxtLink>
    <NuxtLink to="/ssg">SSG</NuxtLink>
    <NuxtLink to="/isr">ISR</NuxtLink>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>