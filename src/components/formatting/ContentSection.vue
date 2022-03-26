<script>
    import { BIconLink } from "bootstrap-icons-vue";
    export default {
        props: {
            title: String,
            id: String
        },
        components: {
            BIconLink
        },
        methods: {
            copy() {
                navigator.clipboard.writeText(window.location.host + "/#" + this.id);
                alert("Link copied to clipboard.");
            },
        }
    };
</script>

<template>
    <div v-bind:id="id" class="mb-16">
        <h2 class="text-2xl font-semibold mb-4"><BIconLink class="inline-flex align-center mr-1 text-light-theme hover:cursor-pointer" v-on:click="copy"></BIconLink>{{ title }}</h2>
        <slot></slot>
    </div>
</template>