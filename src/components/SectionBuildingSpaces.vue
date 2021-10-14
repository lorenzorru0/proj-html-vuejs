<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-8">
                    <h3>{{data.title}}</h3>
                    <div class="hr"></div>
                    <p>{{data.description}}</p>
                </div>
                <div class="col-3 d-flex align-items-center">
                    <div>
                        <button>GET A FREE QUOTE</button>
                        <p>Only takes a few seconds!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SectionBuildingSpaces',
    data() {
        return {
            data: {
                title: 'Building Inspiring Spaces',
                description: 'Vivamus sed consectetur tellus dolor sit amet, consectetur adipiscing lorem elit sadip ipsum ets ficilis uns.'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container-fluid {
    padding: 6.25rem 0;
    background-image: url('../assets/img/about-call-to-action-57862405.jpg');
    @include imgBg;
    border-bottom: .9375rem solid #3f3f3f;

    .container {
        color: #fff;

        .hr {
            width: 12.5rem;
            height: .125rem;
            background-color: $commonYellow;
            margin: 2.5rem 0;
        }  
        
        .col-3 {
            div {
                width: 100%
            }

            button {
                @include button;
                @include bigButton;
                width: 100%;
                @include yellowButton;
                margin-bottom: 1.25rem;
    
                &:hover {
                    @include blackButton;
                }
            }

            p {
                text-align: center;
                font-size: 1rem;
            }
        }
        
    }
}
</style>