<script>
    export default {
        props: {
            href: String,
            noRedir: {
                default: false,
                type: Boolean
            }
        }
    };
</script>

<template>
    <a class="text-light-highlight dark:text-dark-highlight" v-bind:href="href" v-bind:target="noRedir ? '' : '_blank'"><slot></slot></a>
</template>