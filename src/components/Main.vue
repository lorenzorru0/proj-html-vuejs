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
        <SectionTrustedPartners/>
        <SectionBuildingSpaces/>
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
import SectionTrustedPartners from './SectionTrustedPartners.vue';
import SectionBuildingSpaces from './SectionBuildingSpaces.vue';

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
        SectionLatestNews,
        SectionTrustedPartners,
        SectionBuildingSpaces
    }
}
</script>

<style lang="scss" scoped>


</style>