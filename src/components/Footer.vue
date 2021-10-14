<template>
    <footer>
        <div class="footer-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3">
                        <img src="../assets/img/footer-logo.png" alt="Logo Footer">
                        <p>{{dataFooter.data[0].description}}</p>
                        <button>LEARN MORE</button>
                    </div>
                    <div class="col-3">
                        <h5>{{dataFooter.data[1].title}}</h5>
                        <div class="d-flex align-items-start">
                            <img class="logoTwitter" src="../assets/img/3a74ce3d0532b7773b174c45ca3bd05a_normal.png" alt="Logo twitter">
                            <div class="contentTwitter">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <div class="text-title">ThemeFusion</div>
                                        <div>@Theme_Fusion</div>
                                    </div>
                                    <div>
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-white">Do you need sublime WordPress hosting for your next website? Take advantage of exclusive partner offers that we have secured just for you & launch your site in seconds with <a href="#">#avada</a> on WP Engine hosting & get 30% Off this Black Friday <a href="#">bit.ly3kjLLE2#BlackFriday2021</a></p>
                                </div>
                                <img src="../assets/img/tweet.png" alt="Tweet img">
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <h5>{{dataFooter.data[2].title}}</h5>
                        <div class="d-flex" v-for="(contact, index) in dataFooter.data[2].info" :key="index">
                            <div> <i :class="contact.icon"></i> </div>
                            <p>{{contact.description}}</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <h5>{{dataFooter.data[3].title}}</h5>
                        <img src="../assets/img/map.png" alt="Map img">
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <div>
                    <p>COPYRIGTH BY BOOLEAN CLASSE 40 2021 | CREATED BY LORENZO ORRU'</p>
                </div>
                <div>
                    <i v-for="(icon, index) in iconBottom" :key="index" :class="icon"></i>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import dataFooter from '../observable/Footer';

export default {
    name: 'Footer',
    data() {
        return {
            dataFooter,
            iconBottom: [
                'fab fa-facebook-f',
                'fab fa-twitter',
                'fab fa-youtube',
                'fab fa-instagram'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

footer {

    .footer-top {
        background-color: #1e1e1e;
        padding: 6.25rem 0;

        .col-3:first-child {
            padding: 0 1.875rem;

            p {
                margin-top: 1.875rem;
                line-height: 2rem;
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

        .col-3 {
            color: #747474;

            i {
                margin-top: .25rem;
                margin-right: .9375rem;
            }

            p {
                font-size: 1.1rem;
            }

            h5 {
                margin-bottom: 1.25rem;
                color: $commonYellow;
            }
        }

        .col-3:nth-child(2) {


            .logoTwitter {
                border-radius: 50%;
            }

            .contentTwitter {
                width: 100%;
                padding-left: .625rem;

                i {
                    font-size: 1.25rem;
                }

                .text-white,
                .text-title {
                    color: #fff;
                }

                img {
                    width: 100%;
                }
            }
        }

        .col-3:nth-child(4) {
            img {
                width: 100%;
            }
        }
    }

    .footer-bottom {
        background-color: #111111;
        color: $commonGray;
        padding: 1.875rem 0;

        p {
            font-size: 1rem;
            font-weight: normal;
            margin: 0;
        }

        i {
            font-size: 1.25rem;
            margin-left: 1.25rem;
            cursor: pointer;

            &:hover {
                color: #555;
            }
        }
    }
}

</style>