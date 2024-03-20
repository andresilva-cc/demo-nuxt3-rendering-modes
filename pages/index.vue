<template>
  <main class="home">
    <h1>Rendering Modes Demo</h1>
    <NuxtLink to="/csr">Client-Side Rendering (CSR)</NuxtLink>
    <NuxtLink to="/ssr">Server-Side Rendering (SSR)</NuxtLink>
    <NuxtLink to="/ssg">Static Site Generation (SSG)</NuxtLink>
    <NuxtLink to="/isr">Incremental Static Regeneration (ISG)</NuxtLink>
  </main>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  background-color: #2f2b42;
}

h1 {
  color: #ffb633;
}

a {
  color: #aaa3cc
}
</style>