<template>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <div class="small-container">
                    <h3>Specialist In Modern Costruction</h3>
                    <hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci dolorem dolor tempora blanditiis! Quasi hic sit qui similique velit adipisci possimus maiores delectus at illum. Tempora animi aliquam beatae.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="(data, index) in dataModern.data" :key="index" class="col-3">
                <ModernCard :data="data"/>
            </div>
        </div>
    </div>
        <!-- <div class="svgContainer"></div>
        <div class="curvedContainer"></div> -->
</template>

<script>
import ModernCard from './ModernCard.vue';
import dataModern from '../observable/SectionModern';

export default {
    name: 'SectionModern',
    components: {
        ModernCard,
    },
    data() {
        return {
            dataModern
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
        width: 200px;
        border: 2px solid $commonYellow;
        background-color: $commonYellow;
        margin: {
            top: 20px;
            bottom: 30px;
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
        margin-bottom: 100px;
    }

    .svgContainer {
        height: 100px;
        background-color: #fff;
        clip-path: ellipse(55% 100% at 50% 0%);
    }
    .curvedContainer {
        height: 100px;
        background-color: #fff;
        clip-path: ellipse(55% 100% at 50% 0%);
        transform: rotate(180deg);
    }
}
</style>