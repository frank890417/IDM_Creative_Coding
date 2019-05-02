<template lang="pug">
.page.page-tut
  .progressBar(:style="{width: (percentage+'vw'), 'background-color': percentage>=100?'#f91854':'black'}"
                ) 
    span {{chapterTitle}}
    span(v-if="percentage<100") {{ parseInt(percentage) }}%
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
        h3 How to draw a circle?
      .col-sm-6
        codearea(v-model="code1")
      .col-sm-6
        h4 Drawing Is easy
        p A glance into our first p5.js program, lets start with drawing a simple circle in code!! 
        p with program, you are like talking with a painter who act exact the same command you tell him, so, you can tell him to draw a circle with orange, just say "fill('orange')", and then, write ellipse with position and size. You get a circle!
        p There are three basic command to remember, the first one is createCanvas, which create an area for us to draw on
        pre
          | createCanvas( SIZEX , SIZEY );
        p Coding is just like talking, but with a little stricter grammar constraint. For example, to run a command you can just type background, then pass what color you want to fill in a pair of parenthesis () right after that, if the data we passing are not any of the standard command, we have to add a pair of double quote to tell the computer it is some data, not a command to run!
        pre
          | background('black');
          | fill('orange');

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
          chaperTitle: "Basic Shapes - Points, Lines and Shapes",
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

