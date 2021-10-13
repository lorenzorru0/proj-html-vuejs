<template>
    <div>
        <div class="overlay">
            <img :src="dataNews.url" alt="Img News">
            <div class="divHover">
                <div class="iconsContainer">
                    <div class="icons"><i class="fas fa-link"></i></div>
                    <div class="icons"><i class="fas fa-search"></i></div>
                </div>
                <h5>{{dataNews.title}}</h5>
                <p>{{dataNews.categories}}</p>
            </div>
        </div>
        <div class="container-fluid">
            <h3>{{dataNews.title}}</h3>
            <p>{{dataNews.date}}</p>
            <hr>
            <p class="description">{{dataNews.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LatestNewsCard',
    props: ['dataNews']
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

div {

    .overlay {
        position: relative;
        width: 100%;

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
                text-align: center;
                font-weight: lighter;
                color: #fff;
            }

            &:hover {
                opacity: 1;
            }
        }
    }

    img {
        width: 100%;
    }

    .container-fluid {
        padding: 1.875rem 1.25rem;
        background-color: #fff;

        h3, .description {
            font-weight: lighter;
            line-height: 2.5rem;
        }

        h3 {
            letter-spacing: .125rem;
        }

        p {
            color: #545454;
        }
    }
}
</style>