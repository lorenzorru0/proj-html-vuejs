<template>
    <div>
        <h3>{{data.title}}</h3>
        <hr>
        <p>{{data.description}}</p>
    </div>
</template>

<script>
export default {
    name: 'titleAndDescription',
    props: ['data']
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

div {
    hr {
        @include styleHr;
    }

    h3 {
        text-align: center;
        font-size: 2rem;
        font-weight: lighter;
    }

    p {
        line-height: 2rem;
        color: #747474;
    }
}

</style>