<template>
  <div class="min-h-screen bg-base-100 p-4">
    <div class="flex flex-col gap-4">
      <h1 class="text-2xl font-bold">Shared Components Development</h1>
      
      <div class="divider">Example Component Preview</div>
      
      <ExampleComponent />
    </div>
  </div>
</template>

<script>
import ExampleComponent from './components/ExampleComponent.vue'

export default {
  name: 'App',
  components: {
    ExampleComponent
  }
}
</script> 