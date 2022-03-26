<script>
    export default {
        props: {
            title: String,
            id: String
        }
    }
</script>

<template>
    <a v-bind:href="'#' + id" class="block"><span class="w-4 inline-block"></span> {{ title }}</a>
</template>