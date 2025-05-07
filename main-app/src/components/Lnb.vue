<template>
  <div class="lnb">
    <ul>
      <li
        v-for="route in routeList"
        :key="route.path"
        :class="{ active: isActive(route.path) || hasActiveChild(route.children) }"
      >
        <router-link :to="route.path">{{ route.name }}</router-link>
        <ul>
          <li
            v-for="child in route.children"
            :key="child.path"
            :class="{ active: isActive(child.path) }"
          >
            <router-link :to="child.path">{{ child.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const routeList = [
  {
    name: '订单应用',
    path: '/order/',
    children: [
      {
        name: '订单应用Home',
        path: '/order/home',
      },
      {
        name: '订单应用About',
        path: '/order/about',
      },
    ],
  },
  {
    name: '用户应用',
    path: '/user/',
    children: [
      {
        name: '用户应用Home',
        path: '/user/home',
      },
      {
        name: '用户应用About',
        path: '/user/about',
      },
    ],
  },
];
const route = useRoute()
const isActive = (path) => route.path === path
const hasActiveChild = (children = []) => {
  return children.some(child => route.path === child.path)
}
</script>
<style>
.active > a {
  font-weight: bold;
  color: #42b983;
}
</style>