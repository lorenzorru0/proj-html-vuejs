<template>
    <div class="overlay">
        <img :src="dataWork.url" alt="Project 2">
        <div class="divHover">
            <div class="iconsContainer">
                <div class="icons"><i class="fas fa-link"></i></div>
                <div class="icons"><i class="fas fa-search"></i></div>
            </div>
            <h5>{{dataWork.title}}</h5>
            <p>{{dataWork.category}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecentWorkCard',
    props: ['dataWork']
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.overlay {
    position: relative;
    margin-bottom: 6.25rem;

    img {
        width: 100%;
    }

    .divHover {
        @include divHover;

        .iconsContainer {
            display: flex;
            margin-bottom: .9375rem;

            .icons {
                @include divIcon;
            }
        }

        h5, p {
            font-weight: lighter;
        }
    }

    &:hover > .divHover {
        opacity: 1;
    }
}
</style>