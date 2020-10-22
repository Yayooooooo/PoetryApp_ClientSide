<template>
  <div class="hero">
    <p class="lead" ><b>Welcome to Art Collection</b></p>
    <div class="container">
      <div id="poem">
        <p id="date">{{month}}{{day}}</p>
        <p id="content"><a href="#/poem/On Crime and Punishment" style="color:black">The murdered is not unaccountable<br>
          for his own murder,<br>
          And the robbed is not blameless in <br>
          being robbed.<br>
          The righteous is not innocent of the <br>
          deeds of the wicked,<br>
          And the white-handed is not clean in<br>
          the doings of the felon.
        </a></p>
        <p class="author" style="padding-right: 25%;">
          -- On Crime and Punishment<br>
          by Kahlil Gibran
        </p>

      </div>
      <div>
        <p><a href="#/painting/Scream"><img id="scream" src="../../imgs/Scream.jpg"/></a></p>
        <p class="author" style="padding-right: 35%;">-- The Scream<br>by Edvard Munch</p>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'Home',
        data () {
            return {
                show: true,
                month:"",
                day:""
            }
        },
        created: function () {
            let month = new Date().getMonth()+1;
            this.day = new Date().getDate();
            if(month== 1) this.month = "Jan";
            if(month== 2) this.month = "Feb";
            if(month== 3) this.month = "Mar.";
            if(month== 4) this.month = "Apr.";
            if(month== 5) this.month = "May.";
            if(month== 6) this.month = "Jun.";
            if(month== 7) this.month = "Jul.";
            if(month== 8) this.month = "Aug.";
            if(month== 9) this.month = "Sep.";
            if(month== 10) this.month = "Oct.";
            if(month== 11) this.month = "Nov.";
            if(month== 12) this.month = "Dec.";
        }
    }
</script>

<style scoped>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .lead {
    margin-top: 4rem;
  }
  .hero .lead {
    font-weight: 400;
    font-size: 2.5rem;
    font-family:'Segoe Print';
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
  .container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    margin-top: 6%;
  }
  #date{
    font-family: Lucida Handwriting;
    font-size: 2rem;
    font-style: italic;
    font-weight: bold;
    text-align:left;
    padding-left: 2%;
  }
  #content{
    font-family: Gabriola;
    font-weight: bold;
    text-align:left;
    font-size: 1.7rem;
    padding-left: 10%;
  }
  .author{
    font-family: Gabriola;
    font-style: oblique;
    font-weight: bold;
    text-align:right;
    font-size: 1.5rem;
  }
  #scream{
    padding-top: 10%;
    text-align:left;
    padding-right: 35%;
  }
</style>
