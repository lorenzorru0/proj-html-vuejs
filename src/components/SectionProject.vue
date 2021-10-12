<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <p>Do You Have A Project We Can Help With?</p>
                <button>GET A FREE QUOTE</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionProject',
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.container-fluid {
    background-color: $commonYellow;

    .col {
        position: relative;
        text-align: center;
        padding: 3.125rem 0;

        p {
            font-size: 2.2rem;
            font-weight: lighter;
            margin-bottom: 0;
        }

        button {
            @include button;
            @include smallButton;
            @include blackButton;
            position: absolute;
            border: .125rem solid #fff;
            bottom: -1.4375rem;
            left: calc(50% - 5.78375rem);

            &:hover {
                background-color: #fff;
                color: #000;
                border-color: #000;
            }
        }
    }
}
</style>