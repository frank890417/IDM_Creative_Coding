<template lang="pug">
.page
  .progressBar(:style="{width: (percentage+'vw'), 'background-color': percentage>=100?'#f91854':'black'}"
                ) 
    span Basic Shapes - Points, Lines and Shapes 
    span(v-if="percentage<100") {{ parseInt(percentage) }}%
    span(v-else)
      i.fa.fa-check
  .container
    .row
      .col-sm-12
        router-link.btn.btn-light(to="/") 
          i.fa.fa-angle-left
          span &nbsp;&nbsp;back to the main menu
        h1.mt-5 The Begin Point - What is Creative Coding
        p Writing Codes on your broswer and experience the magic!
    section.row.mt-5
      .col-sm-12
        h3 How to draw a circle?
      .col-sm-6
        codearea(v-model="code1")
      .col-sm-6
        h3 Drawing Is easy
        p A glance into our first p5.js program, lets start with drawing a simple circle in code!! 
          | with program, you are like talking with a studpid painter who act exact the same command you tell him, so, you can tell him to draw a circle with orange, just say "fill('orange')", and then, write ellipse with position and size. You get a circle!
    section.row
      .col-sm-12
        h3 Draw a Point and a Line
      .col-sm-6
        codearea(v-model="code2")
      .col-sm-6
    section.row
      .col-sm-12
        h3 Draw rectangles and circles
        
      .col-sm-6
        codearea(v-model="code3")
      .col-sm-6
        p There are a lot of useful shape functions in p5.js, e.g. rect, ellipse, line... etc.
          | things in "setup" function will be excuted once since the sketch start, if we want to make animations or any movement in the sketch, which need to draw a tons of new image as the time progressing, we will have to put our drawing codes into the drawing function, which will be run again and again for about 30 times a second! it's like the clock-erasing artwork in the airport, or you can think it like stop motion animations- which is made by lots of frames play in a high speed which made an illusion of continuous animation.
    section.row
      .col-sm-12
        h3 Colorify! fill and stroke
      .col-sm-6
        codearea(v-model="code4")
    section.row
      .col-sm-12
        h3 Draw crazy shapes!!
      .col-sm-6
        codearea(v-model="code5")
    section.row
      .col-sm-12
        h2 Write texts on the screen!
      .col-sm-6
        codearea(v-model="code6")
    section.row
      .col-sm-12
        h2 What can we do with this?
    section.row
      .col-sm-12
        h3 A little Extention - frameCount and mouse
      .col-sm-6
        codearea(v-model="code7")
    section.row
      .col-sm-12
        h3 Exercise
        
</template>
<script>
export default {
    data(){
        return {
            code1:  
`function setup(){
    //create a canvas to draw on
    createCanvas( windowWidth,windowHeight);

    // make the background grey
    background('black');
    fill('orange');

    //draw an ellipse with position x,y and width height
    ellipse( 80,80,100,100);
}`,
code2:  
`function setup(){
    createCanvas( windowWidth,windowHeight);
    point(50,50);
    line(20,20,100,100);
}`,
code3:  
`function setup(){
  createCanvas( windowWidth,windowHeight);
    
}
function draw(){
  //Try to uncomment the following line
  //draw function will run 30 times a second
  // background(0)
  ellipse( mouseX, mouseY,50,50);
}
`,
code4:  
`function setup(){
  createCanvas( windowWidth,windowHeight);
}
function draw(){
  background(0)

  //set the paint fill to orange, then draw the shape
  fill('orange');
  rect(width/2,height/2,70,70);

  //set stroke weight then draw the circle
  fill('red');
  stroke('white');
  strokeWeight(5);
  ellipse( mouseX, mouseY,60,60);
}
`,
code5:  
`function setup(){
  createCanvas( windowWidth,windowHeight);
    
}
function draw(){
  beginShape()
  vertex(50,0)
  vertex(65,40)
  vertex(115,55)
  vertex(65,75)
  vertex(50,115)
  vertex(40,75)
  vertex(0,65)
  vertex(40,40)
  endShape(CLOSE)
}
`,
code6:`function setup(){
  createCanvas(windowWidth,windowHeight)
}
function draw(){
  background("black")
  
  // set the color and size, then draw text at specific position
  fill("white")
  textSize(60)
  text(frameCount,50,100)

  fill("chocolate")
  textSize(120)
  text("Hello!",50,250)
}
`,
code7:
`
function setup(){
  createCanvas(windowWidth,windowHeight)
}
function draw(){
  ellipse( frameCount*5,height/2,100,100)
}`,
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
h3
  font-size: 2rem
  margin-bottom: 30px
  margin-top: 50px

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

