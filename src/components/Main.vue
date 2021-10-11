<template>
    <main>
        <Jumbotron/>
        <SectionProject/>
    </main>
</template>

<script>
import Jumbotron from './Jumbotron.vue';
import SectionProject from './SectionProject.vue';

export default {
    name: 'Main',
    components: {
        Jumbotron,
        SectionProject
    }
}
</script>

<style lang="scss" scoped>


</style>