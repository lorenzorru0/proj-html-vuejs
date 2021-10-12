<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
    <div class="toTop"> <a href="#"><i class="fas fa-angle-up"></i></a> </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  }
}
</script>

<style lang="scss">
@import '~@fortawesome/fontawesome-free/css/all.css';
@import './assets/style/common.scss';

#app {

  .toTop {
    position: fixed;
    bottom: 0;
    right: 1.25rem;
    width: 60px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    overflow: hidden;

    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(207, 207, 207);
      text-decoration: none;
      font-size: 30px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: $commonYellow;
        color: #fff;
      }
    }
  }
}

</style>
