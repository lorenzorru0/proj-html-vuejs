<template>
    <div>
        <div class="iconContainer" :style="`background-color: ${dataValues.color}`">
            <i :class="dataValues.icon"></i>
        </div>
        <h4>{{dataValues.name}}</h4>
        <hr>
        <p>{{dataValues.description}}</p>
    </div>
</template>

<script>
export default {
    name: 'CoreValuesCard',
    props: ['dataValues']
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

div {
    h4, p {
        text-align: center;
        color: $commonGray;
    }

    .iconContainer {
        @include iconCoreValues;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background-color: $commonYellow!important;
        }
    }

    .iconContainer:hover + h4{
        color: $commonYellow;
    }

    h4 {
        font-weight: lighter;
        margin: .625rem 0;
        transition: all 0.3s;
    }

    p {
        line-height: 2rem;
    }

    hr {
        margin: 1.25rem auto;
        width: 3.125rem;
    }
}
</style>