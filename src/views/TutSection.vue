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
        h3 Draw a Point and a Line
      .col-sm-6
        codearea(v-model="code2")
      .col-sm-6
        p Shapes can break into basic units - lines and points, for each point, we need to provide the x and y position, which means how far is it away from the top of the canvas and also from the left side. 
        pre
          | point(x,y)
        p Obviously, extended from a point, when we want to draw a line, which needs two points in total, we have to pass four values, x1,y1,x2,y2 to the "line" methods in p5js
        pre
          | line (x1,x2,y1,y2)
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
      .col-sm-6
        p When we are drawing shapes, there are two component that we can modify - stroke and the fill color. In p5.js, we excute the codes line-by-line, which means if we want to have a red circle, we set the fill to red first - which is the default color of the next shape we draw. Then we draw the circle. the color will remain effecting the shapes we draw in the following lines till we change it by fill function again.
        p There're also some useful keyword that can get specific data in p5.js directly, e.g. if we want to get the width of the canvas, we can simple type width, so does the height. To extend, drawing a circle in the middle of the canvas is no longer hard to caculate something like 1000/2 by ourself, but width/2 will caculate the center point what ever size we specified when we initialized the canvas.
        pre
          | fill("red")
          | ellipse(50,50,60,60)
          | ellipse(width/2,height/2,60,60)
        p Mouse positions can get by also variales - mouseX and mouseY
        pre
          | ellipse(mouseX,mouseY,60,60)
        
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
        h3 Exercise - recreate an art
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
  text('Move your mouse around',20,20);
  ellipse( mouseX, mouseY,50,50);
}
`,
code4:  
`function setup(){
  createCanvas( windowWidth,windowHeight);
}
function draw(){
  //Try to draw background with transparency!
  background(0);
  //Comment the previous line and uncomment next line
  //background(0,5); 

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
h1
  font-size: 3rem
  font-weight: 800
h3
  font-size: 2rem
  margin-bottom: 30px
  margin-top: 50px
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

