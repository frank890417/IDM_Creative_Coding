<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i')
html,body
  font-family: 'Source Sans Pro'
.page
  padding-top: 40px
  padding-bottom: 40px
  background-color: #fff
h2
  line-height: 2
a
  color: initial !important
  text-decoration: none !important
  &:hover
    color: initial !important
    text-decoration: none
section
  margin-top: 50px
.page-tut
  h1
    font-size: 3rem
    font-weight: 800
  h3
    font-size: 2rem
    margin-bottom: 30px
    margin-top: 50px
    font-weight: 700
  p
    line-height: 1.7
  pre
    background-color: #f4f4f4
    padding: 10px
  .progressBar
    position: fixed
    color: white
    background-color: black
    padding: 5px
    padding-left: 10px
    white-space: nowrap
    bottom: 0px
    left: 0px
    z-index: 10
    font-size: 0.8rem
    overflow: hidden
</style>
