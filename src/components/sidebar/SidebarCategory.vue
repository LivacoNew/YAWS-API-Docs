<script>
    import { BIconArrowRightShort } from "bootstrap-icons-vue";
    export default {
        props: {
            category: String
        },
        components: {
            BIconArrowRightShort
        }
    };
</script>


<template>
    <div class="pt-4">
        <p class="font-semibold"><BIconArrowRightShort class="inline-block"></BIconArrowRightShort> {{ category }}</p>

        <slot></slot>
    </div>
</template>