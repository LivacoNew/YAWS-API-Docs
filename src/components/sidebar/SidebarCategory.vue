<script>
    import { BIconArrowRightShort } from "bootstrap-icons-vue";
    export default {
        props: {
            category: String,
            id: String
        },
        components: {
            BIconArrowRightShort
        }
    };
</script>


<template>
    <div class="pt-4">
        <a v-bind:href="'#' + id" class="font-semibold"><BIconArrowRightShort class="inline-block"></BIconArrowRightShort> {{ category }}</a>

        <slot></slot>
    </div>
</template>