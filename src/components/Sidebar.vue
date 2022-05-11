<script setup>
	import SidebarCategory from './sidebar/SidebarCategory.vue';
	import SidebarLink from './sidebar/SidebarLink.vue';
	import ThemeToggle from './sidebar/ThemeToggle.vue';
	import { BIconDiscord, BIconCartFill } from 'bootstrap-icons-vue';
</script>

<template>
    <div class="bg-sidebar-light-bg dark:bg-sidebar-dark-bg drop-shadow-lg dark:drop-shadow-none p-8 h-screen flex-none flex-col sticky top-0">
		<div class="flex justify-center">
			<img src="/src/assets/yaws.svg" class="w-40 mb-4">
		</div>

		<SidebarCategory category="Introduction">
			<SidebarLink title="Yet Another Warning System" id="intro-yaws"></SidebarLink>
			<SidebarLink title="Async Usage" id="intro-async"></SidebarLink>
			<SidebarLink title="Some Ground Rules" id="intro-rules"></SidebarLink>
		</SidebarCategory>

		<SidebarCategory category="Warnings">
			<SidebarLink title="Fetch Warning by ID" id="warn-fetch-id"></SidebarLink>
			<SidebarLink title="Fetch Player's Warnings" id="warn-fetch-player"></SidebarLink>
			<SidebarLink title="Deleting Warnings" id="warn-remove"></SidebarLink>
		</SidebarCategory>
		<SidebarCategory category="Players">
			<SidebarLink title="Fetch Player Data" id="player-fetch"></SidebarLink>
			<SidebarLink title="Update Player Data" id="player-update"></SidebarLink>
		</SidebarCategory>
		<SidebarCategory category="Hooks">
			<SidebarLink title="Player Warned" id="hooks-warned"></SidebarLink>
			<SidebarLink title="Warn Deleted" id="hooks-warnremoved"></SidebarLink>
		</SidebarCategory>
		<SidebarCategory category="Data Structures">
			<SidebarLink title="Warning" id="data-warning"></SidebarLink>
			<SidebarLink title="Player" id="data-player"></SidebarLink>
		</SidebarCategory>

		<div class="flex justify-center pt-8">
			<ThemeToggle class="inline-block mx-2"></ThemeToggle>

			<button onclick="window.open('https://discord.gg/BSC4ZuD', '_blank').focus()">
				<BIconDiscord class="inline-block mx-2"></BIconDiscord>
			</button>
			<button onclick="window.open('https://www.gmodstore.com/market/view/yet-another-warning-system-yaws-user-warning-and-punishment-system', '_blank').focus()">
				<BIconCartFill class="inline-block mx-2"></BIconCartFill>
			</button>
		</div>

		<!-- this includes you mr president, so don't go nickin my designs again ya little shit -->
		<p class="text-center mt-4 text-xs text-text-light-copyright dark:text-text-dark-copyright">Copyright © Livaco</p>
		<p class="text-center text-xs text-text-light-copyright dark:text-text-dark-copyright">All Rights Reserved</p>
	</div>	
</template>