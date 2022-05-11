<script>
    import IntroductionSection from "./sections/IntroductionSection.vue";
    import WarningsSection from "./sections/WarningsSection.vue";
    import DataSection from "./sections/DataSection.vue";
    import HooksSection from "./sections/HooksSection.vue";
    import PlayerSection from "./sections/PlayerSection.vue";

    export default {
        components: {
            IntroductionSection,
            WarningsSection,
            DataSection,
            HooksSection,
            PlayerSection
        }
    };
</script>

<template>
    <div class="flex-1 p-8 bg-light-bg dark:bg-dark-bg">
        <img src="/src/assets/yaws.svg" class="w-96 mb-16">

        <IntroductionSection></IntroductionSection>
        <WarningsSection></WarningsSection>
        <PlayerSection></PlayerSection>
        <HooksSection></HooksSection>
        <DataSection></DataSection>

        <p class="text-center text-xs text-text-light-copyright dark:text-text-dark-copyright">hi, your at the end</p>
    </div>
</template>
