<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col text-center">
                <div class="small-container">
                    <titleAndDescription :data="data"/>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div v-for="(dataValues, index) in dataSectionCoreValues.data" :key="index" class="col-3">
                    <CoreValuesCard :dataValues="dataValues"/> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import titleAndDescription from './titleAndDescription.vue';
import CoreValuesCard from './CoreValuesCard.vue';
import dataSectionCoreValues from '../observable/SectionCoreValues';

export default {
    name: 'SectionCoreValues',
    components: {
        titleAndDescription,
        CoreValuesCard
    },
    data() {
        return {
            data: {
                title: 'Our Core Values',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci dolorem dolor tempora blanditiis! Quasi hic sit qui similique velit adipisci possimus maiores delectus at illum. Tempora animi aliquam beatae.'
            },
            dataSectionCoreValues
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container-fluid {
    padding-top: 6.25rem;
    background-color: #f5f5f5;

    .small-container {
        margin-bottom: 6.25rem;
    }
}
</style>