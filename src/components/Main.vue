<template>
    <main>
        <Jumbotron/>
        <SectionProject/>
        <SectionModern/>
        <CurvedNumbersSection/>
        <SectionRecentWork/>
    </main>
</template>

<script>
import Jumbotron from './Jumbotron.vue';
import SectionProject from './SectionProject.vue';
import SectionModern from './SectionModern.vue';
import CurvedNumbersSection from './CurvedNumbersSection.vue';
import SectionRecentWork from './SectionRecentWork.vue';

export default {
    name: 'Main',
    components: {
        Jumbotron,
        SectionProject,
        SectionModern,
        CurvedNumbersSection,
        SectionRecentWork
    }
}
</script>

<style lang="scss" scoped>


</style>