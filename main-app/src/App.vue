<template>
  <div class="main-app">
    <div class="gnb">
      <a target="_blank" :href="orderUrl">单独打开订单应用</a> | <a target="_blank" :href="userUrl">单独打开用户应用</a>
    </div>
    <main>
      <Lnb />
      <div class="content">
        <div id="subapp-viewport"></div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Lnb from './components/lnbc.vue'

const orderUrl = ref(import.meta.env.VITE_ORDER_APP_URL)
const userUrl = ref(import.meta.env.VITE_USER_APP_URL)
</script>