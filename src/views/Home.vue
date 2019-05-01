<template lang="pug">
.page
  .container-fluid
    .row
      .col-sm-12
        h1.text-center.font-weight-bold(style="background-color: black; color: white;") IDM Creative Coding
    div.row( v-for="(section,sid) in sections")
      router-link.inner_container(:to="`/section/${sid+1}`")
        .row.row-section
          .col-5
            codearea(v-if="section.demoCode", v-model="section.demoCode",hidecode="true")
          .col-7
            .number.font-weight-bold {{ sid+1 }}
            h2(v-html='section.title')
            p.mt-3(v-html='section.content')
            label(v-html='section.homework')
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted(){

  },
  data(){
    return {
      sections: [
        {
          title: "The Begin Point - What is Creative Coding",
          content: "Creative Coding is a way to express yourself, but Why we code to make Arts when we can do it in Photoshop?",
          demoCode:
`
function setup(){
  createCanvas(windowWidth,windowHeight)
  background(250)
}
function draw(){
  background(255)
  stroke(230)
  for(var i=0;i<100;i++){
    stroke(i%5==0?200:230)
    line(0,i*10,width,i*10)
    line(i*10,0,i*10,height)
  }
  fill('#f24')
  ellipse(mouseX,mouseY,80,80)
  fill('#ffee5e')
  rect(30,height-50,50,50)
  translate(width/2,height/2)
  beginShape()
  fill("#499bff")
  rotate(frameCount/20)
  for(var i=0;i<3;i++){
    vertex(50*cos(i/3*2*PI),50*sin(i/3*2*PI))
  }
  
  endShape(CLOSE)
}
`
        },
        {
          title: "Start with p5.js",
          content: "Writing Codes on your broswer and experience the magic!"
        },
        {
          title: "Basic Shapes - Points, Lines and Shapes",
          content: "Draw by code is not so difficult. How should we actually draw something in code by sketch?",
          homework: "Sol Lewitt drawing exercise."
        },
        {
          title: "Work smarter 1- Variables"
        },
        {
          title: "Work smarter 2- Condition and Loops"
        },
        {
          title: "Basic Interactions- Mouse and Keyboard"
        },
        {
          title: "Beautify the World - Colors and different modes"
        },
        {
          title: "Working with Multimedia - Video / Image / Sound "
        },
        {
          title: "Pack the actions - Functions"
        },
        {
          title: "Data visualization and API’s"
        },
        {
          title: "Typography"
        },
        {
          title: "Let's Play in the real world - Physics in Coding"
        },
        {
          title: "Wrap all things up - OOP and particles"
        },
        {
          title: "DOM"
        },
        {
          title: "Special Topics: Subcanvas"
        },
        {
          title: "Special Topics: p5.play - gifs!!!!!"
        }
        


      ]
    }
  }
}
</script>
<style lang="sass">
.number
  font-size: 5rem
.row-section
  padding: 30px
img
  background-color: #eee
  border: solid 1px #555
  width: 100%
  min-height: 300px
h2
  text-decoration: underline
  background: linear-gradient(0deg,0% white, 100% black)
  line-height: 2
  font-weight: 900
.inner_container
  width: 100%
</style>

