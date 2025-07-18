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
            <svg
              class="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_211_98163)">
                <path
                  d="M19.9321 13.0407C19.7433 14.4806 19.166 15.842 18.2622 16.9788C17.3585 18.1157 16.1623 18.985 14.802 19.4937C13.4418 20.0024 11.9687 20.1312 10.5407 19.8663C9.11282 19.6013 7.78395 18.9527 6.69664 17.99C5.60933 17.0272 4.8046 15.7867 4.36876 14.4013C3.93292 13.016 3.8824 11.5381 4.22264 10.1263C4.56287 8.7144 5.28102 7.42178 6.30006 6.38703C7.3191 5.35229 8.60059 4.61446 10.0071 4.25268C13.9061 3.25268 17.9421 5.25968 19.4321 8.99968"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 4V9H15"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_211_98163">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
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

const isLoggedIn = ref(true)
const username = ref('Username')
const balance = ref(100000000.00)
</script>
