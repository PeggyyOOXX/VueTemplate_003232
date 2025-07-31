<template>
  <Header></Header>
  <div class="animate-me opacity-0">
    <img src="/images/home/banner.png" class="h-auto w-full max-w-full" />
    （GSAP）
    <div class="box">Hello</div>
    <Icon icon="mdi:home" class="text-red-500" width="24" height="24" />
  </div>
</template>



<script setup>
import Header from '@/components/basic/Header.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { useHead } from '#imports'
import { Icon } from '@iconify/vue'


onMounted(() => {
  gsap.to('.animate-me', {
    duration: 2,
    opacity: 1,
  })
})
</script>


<style lang="scss" scoped>
$main-color: #003232;

.box {
  color: $main-color;
  &:hover {
    background: lighten($main-color, 20%);
  }
}
</style>