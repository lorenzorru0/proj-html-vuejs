<template>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <div class="small-container">
                    <h3>Explore Recent Work</h3>
                    <hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam adipisci dolorem dolor tempora blanditiis! Quasi hic sit qui similique velit adipisci possimus maiores delectus at illum. Tempora animi aliquam beatae.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="overlay">
                    <img src="../assets/img/project2-featured-15013609-400x400.jpg" alt="Project 2">
                    <div class="divHover">
                        <div class="iconsContainer">
                            <div class="icons"><i class="fas fa-link"></i></div>
                            <div class="icons"><i class="fas fa-search"></i></div>
                        </div>
                        <h5>Florida Health Facility</h5>
                        <p>Commercial</p>
                    </div>
                </div>

                <div class="hr"></div>
            </div>
            <div class="col-4">
                <div class="overlay">
                    <img src="../assets/img/project1-featured-294276386-400x400.jpg" alt="Project 1">
                    <div class="divHover">
                        <div class="iconsContainer">
                            <div class="icons"><i class="fas fa-link"></i></div>
                            <div class="icons"><i class="fas fa-search"></i></div>
                        </div>
                        <h5>Maine Modernity</h5>
                        <p>Residential</p>
                    </div>
                </div>

                <button>VIEW ALL PROJECTS</button>
            </div>
            <div class="col-4">
                <div class="overlay">
                    <img src="../assets/img/project3-featured-189023420-400x400.jpg" alt="Project 3">
                    <div class="divHover">
                        <div class="iconsContainer">
                            <div class="icons"><i class="fas fa-link"></i></div>
                            <div class="icons"><i class="fas fa-search"></i></div>
                        </div>
                        <h5>Exclusive Urban Living</h5>
                        <p>Commercial</p>
                    </div>
                </div>

                <div class="hr"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionRecentWork',
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container {
    margin-bottom: 6.25rem;

    .small-container {
        margin-bottom: 3.125rem;

        hr {
            @include styleHr;
        }

        h3 {
        font-size: 2rem;
        font-weight: lighter;
        }

        p {
            line-height: 2rem;
            color: #747474;
        }
    }

    .col-4 {

        .overlay {
            position: relative;
            margin-bottom: 100px;

            img {
                width: 100%;
            }

            .divHover {
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background-color: $commonYellow;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color: #fff;
                opacity: 0;
                transition: opacity 0.3s ease-in;

                .iconsContainer {
                    display: flex;
                    margin-bottom: .9375rem;

                    .icons {
                        display: inline-block;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 .3125rem;
                        background-color: #fff;
                        color: $commonYellow;
                        font-size: 20px;
                        cursor: pointer;
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

        .hr {
            width: 100%;
            height: .125rem;
            background-color: #e4e4e4;
            margin-top: 127px;
        }

        button {
            @include button;
            width: 100%;
            padding: .9375rem 0;
            letter-spacing: 2px;
            background-color: #fff;

            &:hover {
                @include yellowButton;
            }
        }
    }
}

</style>