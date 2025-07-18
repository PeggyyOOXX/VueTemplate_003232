<template>
  <Header></Header>
  <div class="animate-me opacity-0 transition">
    （GSAP）
    <div class="box">Hello</div>
  </div>
  <BottomBar></BottomBar>
</template>



<script setup>
import Header from '@/components/basic/Header.vue'
import BottomBar from '@/components/basic/BottomBar.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.to('.animate-me', {
    x: 100,
    duration: 1,
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