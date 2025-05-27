<template>
  <div>
    <main>
      <template v-if="!isQiankun">
        <div class="lnb">
          <router-link to="/home">Home</router-link> |
          <router-link to="/about">about</router-link>
        </div>
      </template>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script setup>
import { qiankunWindow } from 'vite-plugin-qiankun/es/helper'
const isQiankun = qiankunWindow.__POWERED_BY_QIANKUN__
</script>