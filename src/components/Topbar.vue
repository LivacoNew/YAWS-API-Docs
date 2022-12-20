<script>
	import SidebarCategory from './sidebar/SidebarCategory.vue';
	import SidebarLink from './sidebar/SidebarLink.vue';
	import ThemeToggle from './sidebar/ThemeToggle.vue';
	import { BIconList, BIconDiscord, BIconCartFill } from 'bootstrap-icons-vue';
	
	export default {
		data() {
			return {
				expanded: false
			}
		},
		components: {
			SidebarCategory,
			SidebarLink,
			ThemeToggle,
			BIconList,
			BIconDiscord,
			BIconCartFill
		},
		created: function() {
			addEventListener('hashchange', (event) => {
				this.expanded = false;
			});
		},
		destroyed: function() {
			removeEventListener('hashchange', (event) => {
				this.expanded = false;
			});
		}
	};
</script>

<template>
	<div class="flex flex-col sticky top-0">
		<div class="lg:hidden flex-initial flex justify-end bg-sidebar-light-bg dark:bg-sidebar-dark-bg drop-shadow-lg dark:drop-shadow-none p-6">
			<div class="flex-auto">
				<img src="/src/assets/yaws.svg" class="w-36 flex-initial">
			</div>
			<div class="flex-initial flex items-center justify-center">
				<BIconList class="w-10 text-3xl text-light-theme hover:cursor-pointer" @click="expanded = !expanded"></BIconList>
			</div>
	
		</div>
		<div v-if="expanded" class="flex-auto bg-sidebar-light-bg dark:bg-sidebar-dark-bg drop-shadow-lg dark:drop-shadow-none px-8">
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

			<div class="pb-8">
				<div class="flex justify-center pt-4">
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
		</div>
	</div>
</template>