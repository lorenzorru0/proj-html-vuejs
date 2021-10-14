<template>
    <div class="container-fluid">
        <div class="curvedContainer"></div>
        <div class="small-container">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-3 text-center" v-for="(data, index) in dataNumbers.data" :key="index">
                        <i :class="data.icon"></i>
                        <h2>{{data.count}}</h2>
                        <p>{{data.title}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="curvedContainerRotate"></div>
    </div>
</template>

<script>
import dataNumbers from '../observable/Numbers';

export default {
    name: 'CurvedNumbersSection',
    data() {
        return {
            dataNumbers
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container-fluid {
    padding: 0;
    background-image: url('../assets/img/home.jpg');
    background-size: cover;

    .container {
        
        .row {
            padding: 9.375rem 0;
        }

        .col-3 {

            i {
                font-size: 3.5rem;
                margin-bottom: .3125rem;
            }

            h2 {
                font-size: 3rem;
            }

            h2, p {
                font-weight: lighter;
                margin-bottom: 0;
            }

            i, h2 {
                color: $commonYellow;
            }

            p {
                color: #fff;
            }
        }
    }
}
</style>