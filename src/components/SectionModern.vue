<template>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <div class="small-container">
                    <TitleAndDescription :data="data"/>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="(data, index) in dataModern.data" :key="index" class="col-3">
                <ModernCard :data="data"/>
            </div>
        </div>
    </div>
</template>

<script>
import ModernCard from './ModernCard.vue';
import dataModern from '../observable/SectionModern';
import TitleAndDescription from './TitleAndDescription.vue';

export default {
    name: 'SectionModern',
    components: {
        ModernCard,
        TitleAndDescription
    },
    data() {
        return {
            dataModern,
            data: {
                title: 'Specialist In Modern Costruction',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci dolorem dolor tempora blanditiis! Quasi hic sit qui similique velit adipisci possimus maiores delectus at illum. Tempora animi aliquam beatae.'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container {
    margin-top: 6.25rem;
    padding-bottom: 1.875rem;

    hr {
        margin: auto;
        width: 12.5rem;
        border: .125rem solid $commonYellow;
        background-color: $commonYellow;
        margin: {
            top: 1.25rem;
            bottom: 1.875rem;
        };
    }

    h3 {
        font-size: 2rem;
        font-weight: lighter;
    }

    p {
        line-height: 2rem;
        color: #747474;
    }

    .small-container {
        margin-bottom: 6.25rem;
    }
}
</style>