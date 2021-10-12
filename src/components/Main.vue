<template>
    <main>
        <Jumbotron/>
        <SectionProject/>
        <SectionModern/>
    </main>
</template>

<script>
import Jumbotron from './Jumbotron.vue';
import SectionProject from './SectionProject.vue';
import SectionModern from './SectionModern.vue';

export default {
    name: 'Main',
    components: {
        Jumbotron,
        SectionProject,
        SectionModern
    }
}
</script>

<style lang="scss" scoped>


</style>