<template>
  <div class="hero">
    <div id="app1">

      <ul class="box">
        <li class="imgScream">
          <p id="title">David</p>
          <p id="painter">       by Michelangelo di Lodovico Buonarroti Simoni</p>
          <img id="scream" src="../../static/img/David.png"/>
        </li>
      </ul>
      <div class="ins">
        <p id="ins">Sculptor Introduction</p>
        <P id="bgKnow">Michelangelo di Lodovico Buonarroti Simoni
          (Italian: [mikeˈlandʒelo di lodoˈviːko ˌbwɔnarˈrɔːti siˈmoːni];6 March 1475 – 18 February 1564),
          known best as simply Michelangelo (English: /ˌmaɪkəlˈændʒəloʊ, ˌmɪk-/[1]),
          was an Italian sculptor, painter, architect and poet of the High Renaissance born in the Republic of
          Florence, who exerted an unparalleled influence on the development of Western art.
          Considered by many the greatest artist of his lifetime,
          and by some the greatest artist of all time, his artistic versatility was of such a
          high order that he is often considered a contender for the title of the archetypal Renaissance man,
          along with his rival, the fellow Florentine and client of the Medici, Leonardo da Vinci.[2]
        </P>
      </div>
      <!--       <img src="../../static/img/Edvard Munch.png" width="100">-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "David"
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
    font-size: xx-large;
  }
  #bgKnow{
    font-family: Arvo;
    padding-right: 23rem;
    font-size: large;
  }
  #ins{
    font-size: x-large;
    font-family: Lucida Handwriting;
  }
  .ins{
    margin-left: -10rem;
    margin-top: 25rem;
    padding-left: 10rem;
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
