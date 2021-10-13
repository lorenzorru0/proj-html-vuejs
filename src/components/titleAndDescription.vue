<template>
    <div>
        <h3>{{data.title}}</h3>
        <div class="hr"></div>
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
    .hr {
        margin: auto;
        width: 12.5rem;
        height: .125rem;
        background-color: $commonYellow;
        margin: {
            top: 1.25rem;
            bottom: 1.875rem;
        };
    }

    h3 {
        text-align: center;
        font-weight: lighter;
    }

    p {
        line-height: 2rem;
        color: #747474;
    }
}

</style>