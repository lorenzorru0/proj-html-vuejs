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
            <div class="col-4" v-for="(dataWork, index) in dataRecentWork.data" :key="index">
                <RecentWorkCard :dataWork="dataWork"/>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="hr"></div>
            </div>
            <div class="col-4">
                <button>VIEW ALL PROJECTS</button>
            </div>
            <div class="col-4">
                <div class="hr"></div>
            </div>
        </div>
    </div>
</template>

<script>
import TitleAndDescription from './TitleAndDescription.vue';
import RecentWorkCard from './RecentWorkCard.vue';
import dataRecentWork from '../observable/RecentWork';

export default {
    name: 'SectionRecentWork',
    components: {
        TitleAndDescription,
        RecentWorkCard
    },
    data() {
        return {
            data: {
                title: 'Explore Recent Work',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci dolorem dolor tempora blanditiis! Quasi hic sit qui similique velit adipisci possimus maiores delectus at illum. Tempora animi aliquam beatae.'
            },
            dataRecentWork
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container {
    margin-bottom: 6.25rem;

    .small-container {
        margin-bottom: 3.125rem;
    }

    .col-4 {

        .hr {
            width: 100%;
            height: .125rem;
            background-color: #e4e4e4;
            margin-top: 1.625rem;
        }

        button {
            @include button;
            width: 100%;
            padding: .9375rem 0;
            letter-spacing: .125rem;
            background-color: #fff;

            &:hover {
                @include yellowButton;
            }
        }
    }
}

</style>