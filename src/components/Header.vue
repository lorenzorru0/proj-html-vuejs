<template>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col d-flex justify-content-between align-items-center">
                    <div>
                        <img src="../assets/img/construction_logo.png" alt="logo">
                    </div>
                    <nav>
                        <ul class="d-flex align-items-center">
                            <li v-for="(link, index) in dataHeader.link" :key="index"><a :class="{active : link.active}" href="#">{{link.name}}</a></li>
                            <li><button>GET QUOTE</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import dataHeader from '../observable/Header';

export default {
    name: 'Header',
    data() {
        return {
            dataHeader,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

header {
    padding: 1.875rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9;
    background-color: #fff;
    box-shadow: 0 1px 15px -2px rgb(224, 224, 224);


    img {
        width: 12.5rem;
    }

    ul {
        margin: 0;
        list-style: none;

        li {
            position: relative;
        }

        a {
            display: inline-block;
            text-decoration: none;
            padding: .5rem 1.25rem;
            margin: 0 .3125rem;
            color: #000;
            font-weight: lighter;
            transition: all 0.3s linear;

            &:hover {
                color: $commonYellow;
            }
        }

        .active {
            color: $commonYellow;
        }

        .active::after {
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            font-family: "Font Awesome 5 Free"; 
            font-weight: 900; 
            font-size: 2.4rem;
            content: "\f0d7";
            color: #fff;
            position: absolute;
            top: 3.6875rem;
            right: 2.21875rem;
        }

        button {
            @include button;
            @include smallButton;
            @include yellowButton;

            &:hover {
                @include blackButton;
            }
        }
    }
}
</style>