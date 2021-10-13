<template>
    <div class="container-fluid">
        <div class="curvedContainer"></div>
        <div class="small-container">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-3">
                        <i class="fas fa-suitcase"></i>
                        <h2>3534</h2>
                        <p>PLANNING APPLICATIONS</p>
                    </div>
                    <div class="col-3">
                        <i class="far fa-building"></i>
                        <h2>896</h2>
                        <p>COMPLETED PROJECTS</p>
                    </div>
                    <div class="col-3">
                        <i class="fas fa-users"></i>
                        <h2>172</h2>
                        <p>TRAINED PROFESSIONALS</p>
                    </div>
                    <div class="col-3">
                        <i class="fas fa-globe"></i>
                        <h2>19</h2>
                        <p>INTERNATIOL OFFICES</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="curvedContainerRotate"></div>
    </div>
</template>

<script>
export default {
    name: 'CurvedNumbersSection'
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
            text-align: center;

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