<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  bodyAttrs: {
    class: 'theme-light'
  }
})
</script>
