<script setup>
	import Sidebar from './components/Sidebar.vue';
	import MainContent from './components/MainContent.vue';
</script>

<template>
	<div class="flex text-text-light-main dark:text-text-dark-main">
		<Sidebar></Sidebar>
		<MainContent></MainContent>
	</div>
</template>