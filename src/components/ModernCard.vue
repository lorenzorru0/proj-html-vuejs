<template>
    <div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="iconModernCard">
                        <i :class="data.icon"></i>
                    </div>
                    <h3>{{data.name}}</h3>
                    <p>{{data.text}}</p>
                </div>
                <div class="flip-card-back">
                    <h5>{{data.backName}}</h5> 
                    <p>{{data.text}}</p>
                    <button>GET A QUOTE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModernCard',
    props: ['data'],
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable.scss';

.flip-card {
    background-color: transparent;
    width: 100%;
    height: 21rem;
    border-radius: .9375rem;
    perspective: 62.5rem;

    p {
        color: $commonGray;
        line-height: 2rem;
    }

    h3, h5 {
        padding-top: .625rem;
        font-weight: lighter;
    }
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: .9375rem;
    text-align: center;
    transition: transform 0.3s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: .9375rem;
    padding: 1.875rem .9375rem;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: rgb(243, 243, 243);

    .iconModernCard { 
        @include iconModernCard;
    }
}

.flip-card-back {
    background-color: $commonYellow;
    transform: rotateY(180deg);

    button {
        @include button;
        @include smallButton;
        background-color: #ffe07b;

        &:hover {
            @include blackButton;
        }
    }
}

</style>