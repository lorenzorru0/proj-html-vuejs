<template>
    <main>
        <Jumbotron/>
        <SectionProject/>
        <SectionModern/>
        <CurvedNumbersSection/>
    </main>
</template>

<script>
import Jumbotron from './Jumbotron.vue';
import SectionProject from './SectionProject.vue';
import SectionModern from './SectionModern.vue';
import CurvedNumbersSection from './CurvedNumbersSection.vue';

export default {
    name: 'Main',
    components: {
        Jumbotron,
        SectionProject,
        SectionModern,
        CurvedNumbersSection
    }
}
</script>

<style lang="scss" scoped>


</style>