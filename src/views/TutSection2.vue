<template lang="pug">
.page.page-tut
  .progressBar(:style="{width: (percentage+'vw'), 'background-color': percentage>=100?'#f91854':'black'}"
                ) 
    span {{chapterTitle}} 
    span(v-if="percentage<100")  {{ parseInt(percentage) }}%
    span(v-else)
      i.fa.fa-check
  .container
    .row
      .col-sm-12
        router-link.btn.btn-light(to="/") 
          i.fa.fa-angle-left
          span &nbsp;&nbsp;back to the main menu
        h1.mt-5 {{chapterTitle}}
        p Writing Codes on your broswer and experience the magic!
    section.row.mt-5
      .col-sm-12
        h3 How to use p5.js?
      //.col-sm-6
        codearea(v-model="code1")
      .col-sm-12
        h4 Code instantly after opening a website!
        p To start coding, you will not have to install a lot of text editors or stuff. We can take the advantage of broswer! In the following chapter, we will encourage you to practice along with the materiel in the onlne coding site - <a href="https://www.openprocessing.org" target="_blank">OpenProcessing</a>. 
        img(src="/img/open_processing_index.png")
    section.row.mt-5
      .col-sm-12
        h4 See others' works and manage your own
        p After you register for an account, you will have your own profile to demo and arrange works, the advantage of online coding platform is that you can also see others' works! A good coder is not a person remember all the command, but who can take idea from inspiration, collect essential tools or code from resources then transform into their own work. Don't put so much pressure to think that you have to do all the things on your own. Though you have to practice to master coding by your own, we encourage you to dig in the examples you love and try to look their codes and get the idea.
        img(src="/img/open_processing_works.png")
    section.row.mt-5
      .col-sm-12
        h4 Open a New Sketch
        p There's no need to setup any complex options to start coding. Simply click on "Create a new Sketch" and you can open a sketch with default template. If you want to see what is the code looks like when they are running, click on the play button
          i.fa.fas-play
          | will execute your code. Then, click on the code button, you can come back to the editor mode and keep modifying.
        p In normal situations, these actions switching between excute and code.
          b don't forget to click the save button to save your own sketch! Once you quit the broswer without saving your work, it will permantently disappear.
        img(src="/img/open_proessing_new_sketch.gif")
    section.row.mt-5
      .col-sm-12
        h4 Now, let's start your journey of Creative Coding!
    section.row
      .col-sm-12
        router-link.btn.btn-light(to="/") 
          i.fa.fa-angle-left
          span &nbsp;&nbsp;back to the main menu
</template>
<script>
export default {
    data(){
        return {
          chapterTitle: "Start with p5.js and Open Processing",
          code1: ``,
          percentage: 0
        }
    },
    methods: {
      pageScroll(){
        // console.log(window.scrollY)
        this.percentage = 100* (window.scrollY )/ (document.body.offsetHeight-  window.outerHeight)
      }
    },
    mounted(){
      window.addEventListener("scroll",this.pageScroll)
    }
}
</script>

<style scoped lang="sass">
</style>

