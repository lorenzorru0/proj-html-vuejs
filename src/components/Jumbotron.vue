<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col d-flex justify-content-center align-items-center">
                <div>
                    <h2>BUILDING INSPIRING SPACES</h2>
                    <p>We Build Inspiring Residential & Commercial Spaces</p>
                    <button class="blackButton">EXPLORE RECENT WORK</button>
                    <button class="yellowButton">GET A QUOTE TODAY</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Jumbotron',
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container-fluid {
    height: 62.5rem;
    background-image: url('../assets/img/jumbotron.png');
    background-size: cover;
    background-position: center;

    .row {
        height: 100%; 

        .col {
            height: 100%;
            text-align: center;

            h2 {
                color: #fff;
                font-size: 3.5rem;
            }

            p {
                color: $commonYellow;
                font-weight: lighter;
                padding: .9375rem 0;
                font-size: 1.2rem;
            }

            button {
                @include button;
                @include bigButton;
                margin: 0 .3125rem;
                letter-spacing: 2px;
                font-size: 1.2rem;
            }

            .blackButton {
                @include blackButton;

                &:hover {
                    @include yellowButton;
                }
            }

            .yellowButton {
                @include yellowButton;

                &:hover {
                    @include blackButton;
                }
            }
        }
    }
}
</style>