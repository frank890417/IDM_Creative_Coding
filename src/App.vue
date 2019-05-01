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
  padding-top: 50px
  padding-bottom: 50px
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
</style>
