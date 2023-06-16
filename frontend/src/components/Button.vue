<template>
  <div :class="$style.BackButton" @click="onClick">
    Check a different artist!
  </div>
</template>

<script setup>
const emit = defineEmits(["onClick"]);

const onClick = event => {
  emit("onClick", event);
};
</script>

<style module>
.BackButton {
  margin: 2rem auto 0 auto;
  border: 0.0625rem solid white;
  border-radius: 1rem;
  width: fit-content;
  padding: 2rem;
  transition: all 0.75s;
  cursor: pointer;
}

.BackButton:hover {
  color: aquamarine;
  background-color: rgba(139, 0, 139, 0.99);
}
</style>
