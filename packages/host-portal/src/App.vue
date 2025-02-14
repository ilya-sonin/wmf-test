<template>
  <div class="min-h-screen bg-base-100">
    <nav class="navbar bg-base-200">
      <div class="flex-1">
        <router-link to="/" class="btn btn-ghost normal-case text-xl">Host Portal</router-link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><router-link to="/micro1">Microfront 1</router-link></li>
          <li><router-link to="/micro2">Microfront 2</router-link></li>
        </ul>
      </div>
    </nav>
    <main class="container mx-auto p-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script> 