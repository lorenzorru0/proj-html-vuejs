<template>
    <main>
        <Jumbotron/>
        <SectionProject/>
        <SectionModern/>
        <CurvedNumbersSection/>
        <SectionRecentWork/>
        <SectionCoreValues/>
        <CurvedOwnersSection/>
        <SectionLatestNews/>
    </main>
</template>

<script>
import Jumbotron from './Jumbotron.vue';
import SectionProject from './SectionProject.vue';
import SectionModern from './SectionModern.vue';
import CurvedNumbersSection from './CurvedNumbersSection.vue';
import SectionRecentWork from './SectionRecentWork.vue';
import SectionCoreValues from './SectionCoreValues.vue';
import CurvedOwnersSection from './CurvedOwnersSection.vue';
import SectionLatestNews from './SectionLatestNews.vue';

export default {
    name: 'Main',
    components: {
        Jumbotron,
        SectionProject,
        SectionModern,
        CurvedNumbersSection,
        SectionRecentWork,
        SectionCoreValues,
        CurvedOwnersSection,
        SectionLatestNews
    }
}
</script>

<style lang="scss" scoped>


</style>