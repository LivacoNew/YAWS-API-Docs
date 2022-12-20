<script setup>
	import Sidebar from './components/Sidebar.vue';
	import Topbar from './components/Topbar.vue';
	import MainContent from './components/MainContent.vue';
	import { BIconList } from 'bootstrap-icons-vue';

	// export default {
    //     data() {
	// 		return {
	// 			showSidebar: false
	// 		}
	// 	}
    // };
</script>

<template>
	<div class="text-text-light-main dark:text-text-dark-main">
		<Topbar></Topbar>

		<div class="flex max-w-[100vw]">
			<Sidebar></Sidebar>
			<MainContent></MainContent>
		</div>
	</div>
</template>