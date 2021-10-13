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
            <div class="row">
                <div class="col-4" v-for="(dataNews, index) in dataLatestNews.data" :key="index">
                    <LatestNewsCard :dataNews="dataNews"/>
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
    </div>
</template>

<script>
import TitleAndDescription from './TitleAndDescription.vue';
import LatestNewsCard from './LatestNewsCard.vue';
import dataLatestNews from '../observable/LatestNews';

export default {
    name: 'SectionLatestNews',
    components: {
        TitleAndDescription,
        LatestNewsCard
    },
    data() {
        return {
            data: {
                title: 'Latest News',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci dolorem dolor tempora blanditiis! Quasi hic sit qui similique velit adipisci possimus maiores delectus at illum. Tempora animi aliquam beatae.'
            },
            dataLatestNews
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container-fluid {
    background-color: #f5f5f5;

    .container {
        margin-top: 3.125rem;

        .hr {
            width: 100%;
            height: .125rem;
            background-color: #fff;
            margin-top: 1.625rem;
        }

        button {
            @include button;
            width: 100%;
            padding: .9375rem 0;
            letter-spacing: 2px;
            background-color: #f5f5f5;

            &:hover {
                @include yellowButton;
            }
        }

        .row:last-child {
            padding: 3.125rem 0;
        }
    }
}

</style>