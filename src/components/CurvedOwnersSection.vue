<template>
    <div class="container-fluid">
        <div class="curvedContainer"></div>
        <div class="small-container">
            <TitleAndDescription :data="data"/>
            <OwnersCard :dataOwners="dataOwners.data[indexOwners]"/>
            <div>
                <div class="circle" :class=" indexOwners == 0 ? 'active' : null" @click="changeOwner()"></div>
                <div class="circle" :class=" indexOwners == 1 ? 'active' : null" @click="changeOwner()"></div>
            </div>
        </div>
        <div class="curvedContainerRotate"></div>
    </div>
</template>

<script>
import TitleAndDescription from './TitleAndDescription.vue';
import OwnersCard from './OwnersCard.vue';
import dataOwners from '../observable/Owners'

export default {
    name: 'CurvedOwnersSection',
    components: {
        TitleAndDescription,
        OwnersCard
    },
    data() {
        return {
            data: {
                title: 'Our Home Owners Say',
            },
            dataOwners,
            indexOwners: 0
        }
    },
    methods: {
        changeOwner() {
            if ( this.indexOwners == 0 ) {
                this.indexOwners = 1;
            } else {
                this.indexOwners = 0;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container-fluid {
    padding: 0;
    background-image: url('../assets/img/home-parallax.jpg');
    background-size: cover;
    background-position: center;

    .curvedContainer, .curvedContainerRotate {
        background-color: #f5f5f5;
    }

    .small-container {
        margin-top: 6.25rem;
        color: #fff;

        h3 {
            text-align: center;
        }

        div {
            text-align: center;
        }

        .circle {
            display: inline-block;
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
            margin: 3.125rem .3125rem;
            border: .1875rem solid #fff;
            cursor: pointer;

            &:hover {
                background-color: #fff;
            }
        }

        .active {
            background-color: #fff;
        }
    }
}

</style>