<template>
    <div class="container">
        <img :src="`${dataOwners.url}`" alt="Owners image">
        <p> <i>"{{dataOwners.description}}"</i> </p>
        <h5> {{dataOwners.name}} </h5>
    </div>
</template>

<script>
export default {
    name: 'OwnersCard',
    props: ['dataOwners']
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container {

    img {
        display: block;
        margin: auto;
        border-radius: 50%;
        margin-bottom: 1.25rem;
    }

    h5, p {
        text-align: center;
        letter-spacing: .1875rem;
    }

}
</style>