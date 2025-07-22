<template>
  <div class="header sticky px-2 py-2 text-white">
    <!-- Logo + 通知鈴 -->
    <div class="relative  mb-1 h-8">
      <div class="absolute inset-0 flex items-center justify-center">
        <img src="/img/101logo.png" alt="Logo" class="h-6 mx-auto" />
      </div>
      <div v-if="isLoggedIn" class="absolute right-0 top-1 flex items-center pr-2">
        <button class="relative">
          <img src="/img/icon/notify.png" alt="notify" class="h-6 w-6" />
          <div class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
        </button>
      </div>
    </div>

    <!-- 使用者操作區 -->
    <div class="w-full">
      <!-- 未登入 -->
      <div v-if="!isLoggedIn" class="flex justify-center space-x-1 py-1">
        <a href="#" class="btn-secondary px-3 py-1 relative rounded-full z-[1]">Login</a>
        <a href="#" class="btn-primary px-3 py-1 relative rounded-full z-[1]">Register</a>
      </div>

      <!-- 已登入 -->
      <div v-else class="flex justify-between items-center">
        <div>
          <div class="text-sm font-medium">{{ username }}</div>
          <div class="flex items-center text-yellow-400 font-bold space-x-1">
            <span>{{ balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</span>
            <Icon icon="mdi:refresh" class="text-white" width="24" height="24" />
          </div>
        </div>
        <div class="flex space-x-1">
          <a href="#" class="btn-primary px-3 py-1 relative rounded-full z-[1]">Deposit</a>
          <a href="#" class="btn-secondary px-3 py-1 relative rounded-full z-[1]">Withdraw</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const isLoggedIn = ref(true)
const username = ref('Username')
const balance = ref(100000000.00)
</script>
