<script setup>
	import SidebarCategory from './sidebar/SidebarCategory.vue';
	import SidebarLink from './sidebar/SidebarLink.vue';
	import ThemeToggle from './sidebar/ThemeToggle.vue';
	import { BIconDiscord, BIconCartFill } from 'bootstrap-icons-vue';
</script>

<template>
    <div class="bg-sidebar-light-bg dark:bg-sidebar-dark-bg drop-shadow-lg dark:drop-shadow-none hidden lg:block p-8 h-screen flex-none sticky top-0 overflow-y-auto">
		<div class="flex justify-center">
			<img src="/src/assets/yaws.svg" class="w-40 mb-4">
		</div>

		<SidebarCategory category="Introduction" id="section-introduction">
			<SidebarLink title="Yet Another Warning System" id="intro-yaws"></SidebarLink>
			<SidebarLink title="Async Usage" id="intro-async"></SidebarLink>
			<SidebarLink title="Some Ground Rules" id="intro-rules"></SidebarLink>
		</SidebarCategory>

		<SidebarCategory category="Warnings" id="section-warnings">
			<SidebarLink title="Fetch Warning by ID" id="warn-fetch-id"></SidebarLink>
			<SidebarLink title="Fetch Player's Warnings" id="warn-fetch-player"></SidebarLink>
			<SidebarLink title="Warn Player" id="warn-player"></SidebarLink>
			<SidebarLink title="Is Player immune" id="warn-immune"></SidebarLink>
			<SidebarLink title="Deleting Warnings" id="warn-remove"></SidebarLink>
		</SidebarCategory>
		<SidebarCategory category="Players" id="section-players">
			<SidebarLink title="Fetch Player Data" id="player-fetch"></SidebarLink>
			<SidebarLink title="Update Player Data" id="player-update"></SidebarLink>
		</SidebarCategory>
		<SidebarCategory category="Hooks" id="section-hooks">
			<SidebarLink title="Player Warned" id="hooks-warned"></SidebarLink>
			<SidebarLink title="Warn Deleted" id="hooks-warnremoved"></SidebarLink>
		</SidebarCategory>
		<SidebarCategory category="Data Structures" id="section-data">
			<SidebarLink title="Warning" id="data-warning"></SidebarLink>
			<SidebarLink title="Player" id="data-player"></SidebarLink>
		</SidebarCategory>

		<div class="flex justify-center pt-8">
			<ThemeToggle class="inline-block mx-2"></ThemeToggle>

			<button onclick="window.open('https://discord.gg/BSC4ZuD', '_blank').focus()">
				<BIconDiscord class="inline-block mx-2"></BIconDiscord>
			</button>
			<button onclick="window.open('https://www.gmodstore.com/market/view/c8dcc2bc-91cb-486d-9540-4d0890cacc6e', '_blank').focus()">
				<BIconCartFill class="inline-block mx-2"></BIconCartFill>
			</button>
		</div>

		<!-- this includes you mr president, so don't go nickin my designs again ya little shit -->
		<p class="text-center mt-4 text-xs text-text-light-copyright dark:text-text-dark-copyright">Copyright © Livaco</p>
		<p class="text-center text-xs text-text-light-copyright dark:text-text-dark-copyright">All Rights Reserved</p>
	</div>	
</template>