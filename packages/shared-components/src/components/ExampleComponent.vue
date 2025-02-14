<template>
  <div class="shared-card">
    <h2>Shared Component</h2>
    <p>Это компонент из shared-components</p>
    <button class="secondary-button">Shared Button</button>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent'
}
</script>

<style>
.shared-card {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 400px;
}

.shared-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.shared-card p {
  color: #666;
  margin-bottom: 15px;
}

.secondary-button {
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.secondary-button:hover {
  background-color: #1976D2;
}
</style> 