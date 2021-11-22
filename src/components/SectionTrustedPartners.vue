<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col text-center">
                <div class="small-container">
                    <TitleAndDescription :data="data"/>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row row-cols-5">
                <div class="col" v-for="(dataPartners, index) in dataTrustedPartners.data" :key="index">
                    <img :src="dataPartners.url" alt="Logo partners">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TitleAndDescription from './TitleAndDescription.vue';
import dataTrustedPartners from '../observable/TrustedPartners'

export default {
    name: 'SectionTrustedPartners',
    components: {
        TitleAndDescription
    },
    data() {
        return {
            data: {
                title: 'Trusted Partners',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci dolorem dolor tempora blanditiis! Quasi hic sit qui similique velit adipisci possimus maiores delectus at illum. Tempora animi aliquam beatae.'
            },
            dataTrustedPartners
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container-fluid {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;

    .container {

        .col {
            img {
                width: 100%;
            }
        }
    }
}
</style>
