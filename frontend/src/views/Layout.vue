<template>
  <header :class="$style.Header">
    <div>Listen to your...</div>
  </header>
  <main>
    <div :class="$style.Layout">
      <slot></slot>
    </div>
  </main>
  <footer :class="$style.Footer">...favourite music!</footer>
</template>

<script setup></script>

<style module>
.Layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.Header,
.Footer {
  border: solid 0.0625rem aquamarine;
  border-radius: 1rem;
  background-color: transparent;
  padding: 2rem 0;
}
</style>
