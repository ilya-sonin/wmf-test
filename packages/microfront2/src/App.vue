<template>
	<div class="container">
		<button class="back-button" @click="goToHome">
			← Вернуться на главную
		</button>

		<div class="content">
			<ExampleComponent />

			<div class="card">
				<h2>Microfront 2</h2>
				<p>Это компонент из второго микрофронтенда</p>
				<button class="primary-button">Нажми меня</button>
			</div>
		</div>
	</div>
</template>

<script>
import ExampleComponent from '@mf/shared-components/ExampleComponent'

export default {
	name: 'App',
	components: {
		ExampleComponent,
	},
	methods: {
		goToHome() {
			window.location.href = 'http://localhost:8080'
		},
	},
}
</script>

<style>
.container {
	padding: 20px;
	max-width: 1200px;
	margin: 0 auto;
}

.back-button {
	background: none;
	border: none;
	padding: 10px 0;
	color: #666;
	cursor: pointer;
	font-size: 16px;
}

.back-button:hover {
	color: #333;
}

.content {
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.card {
	background: white;
	border-radius: 8px;
	padding: 20px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	max-width: 400px;
}

.card h2 {
	font-size: 24px;
	margin-bottom: 10px;
	color: #333;
}

.card p {
	color: #666;
	margin-bottom: 15px;
}

.primary-button {
	background-color: #4caf50;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 4px;
	cursor: pointer;
	font-size: 14px;
}

.primary-button:hover {
	background-color: #45a049;
}
</style>
