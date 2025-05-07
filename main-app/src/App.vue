<template>
  <div class="main-app">
    <div class="gnb">
      <a target="_blank" :href="orderUrl">单独打开订单应用</a> | <a target="_blank" :href="userUrl">单独打开用户应用</a>
    </div>
    <main>
      <div class="lnb">
        <ul>
          <li><router-link to="/order">订单应用</router-link></li>
          <li><router-link to="/user">用户应用</router-link></li>
        </ul>
      </div>
      <div class="content">
        <div id="subapp-viewport"></div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const orderUrl = ref(import.meta.env.VITE_ORDER_APP_URL)
const userUrl = ref(import.meta.env.VITE_USER_APP_URL)
</script>