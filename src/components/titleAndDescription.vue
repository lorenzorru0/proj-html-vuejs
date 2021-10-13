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
        width: 200px;
        height: 2px;
        background-color: $commonYellow;
        margin: {
            top: 20px;
            bottom: 30px;
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