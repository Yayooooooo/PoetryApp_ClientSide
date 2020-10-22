<template>
  <div class="hero">
     <div id="app1">

       <ul class="box">
         <li class="imgScream">
           <p id="title">The Scream</p>
           <p id="painter">       by Edvard Munch</p>
           <img id="scream" src="../../static/img/Scream.jpg"/>
         </li>
         <li >
           <div class="ins">
           <p id="ins">Source of Inspiration</p>
           <P id="bgKnow">In his diary in an entry headed "Nice 22 January 1892", Munch wrote:<br><br>
             "One evening I was walking along a path, the city was on one side and the fjord below.
             I felt tired and ill. I stopped and looked out over the fjord—the sun was setting,
             and the clouds turning blood red. I sensed a scream passing through nature;
             it seemed to me that I heard the scream. I painted this picture,
             painted the clouds as actual blood. The color shrieked. This became The Scream.
             He later described his inspiration for the image:
             I was walking along the road with two friends – the sun was setting –
             suddenly the sky turned blood red – I paused, feeling exhausted, and leaned on the fence –
             there was blood and tongues of fire above the blue-black fjord and the city –
             my friends walked on, and I stood there trembling with anxiety – and
             I sensed an infinite scream passing through nature."
           </P>
           </div>
         </li>
       </ul>
<!--       <img src="../../static/img/Edvard Munch.png" width="100">-->
     </div>
  </div>
</template>

<script>
    export default {
        name: "Scream"
    }
</script>

<style scoped>
  .hero {
    height: 900px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  #app1 {
    margin-left: 14rem;
    margin-top: 6rem;
    text-align: justify;
  }
  #painter{
    font-family: Lucida Handwriting;
    /*font-size: ;*/
    margin-top: -0.5rem;
    margin-left: 9rem;
  }
  #title{
    font-family: Lucida Handwriting;
    font-size: x-large;
  }
  #bgKnow{
    font-family: Arvo;
    padding-right: 23rem;
    padding-top: 2rem;
    font-size: large;
  }
  #ins{
    font-size: x-large;
    font-family: Lucida Handwriting;
  }
  .ins{
    margin-left: -10rem;
  }
  .imgScream{
    margin: 0;
  }
  ul,li{
    list-style: none;
    padding: 0;
    width: 100%;
  }
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-between;
  }
  .box li{
    width: calc(50% - 5px);
    height: 100px;
    margin: 5px 0;
  }
</style>
