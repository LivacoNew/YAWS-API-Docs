<script>
    import { BIconMoonFill, BIconSunFill } from 'bootstrap-icons-vue';

    export default {
        components: {
            BIconMoonFill,
            BIconSunFill,
        },
        methods: {
            swap() {
                if(localStorage.theme === 'dark') {
                    localStorage.theme = 'light';
                    document.documentElement.classList.remove('dark');
                } else {
                    localStorage.theme = 'dark';
                    document.documentElement.classList.add('dark');
                }
            },
        }
    };
</script>


<template>
    <button @click="swap">
        <BIconMoonFill class="inline-block dark:hidden"></BIconMoonFill>
        <BIconSunFill class="hidden dark:inline-block"></BIconSunFill>
    </button>
</template>