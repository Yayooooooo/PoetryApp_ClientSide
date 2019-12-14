<template>
  <div class="hero">
    <h1 class="vue-title">Poetry Webapp</h1>
    <table align="center" style="padding-left: -200px">
      <tr>
        <td>
          <p class="lead"><b>Daily Recommendation</b>
          <p style="font-size: xx-large"><i>On Crime and Punishment</i></p>
          <p>by Kahlil Gibran</p>
          <p style="font-size: larger; text-align: left; padding-left: 250px"> It is when your spirit goes wandering upon the wind,<br>
            That you, alone and unguarded, commit a wrong unto others and therefore unto yourself.<br>
            And for that wrong committed must you knock and wait a while unheeded at the gate of the blessed.<br>
            <br>
            Like the ocean is your god-self;<br>
            It remains for ever undefiled.<br>
            And like the ether it lifts but the winged. Even like the sun is your god-self;<br>
            It knows not the ways of the mole nor seeks it the holes of the serpent.<br>
            But your god-self dwells not alone in your being.<br>
            Much in you is still man, and much in you is not yet man,<br>
            But a shapeless pigmy that walks asleep in the mist searching for its own awakening.<br>
            And of the man in you would I now speak.<br>
            For it is he and not your god-self nor the pigmy in the mist, that knows crime and the punishment of crime.<br>
            ……<br><br>
            The murdered is not unaccountable for his own murder,<br>
          And the robbed is not blameless in being robbed.<br>
          The righteous is not innocent of the deeds of the wicked,<br>
          And the white-handed is not clean in the doings of the felon.<br>……<br><br>
            Click <a href ="#/LookPoem/" id="lookPoem">here</a> to read the whole poem.
          </p>
        </td>
        <td>
          <!--<transition name="slide-fade">
            <p v-if="show">
              <img src="../assets/homer.gif" alt="This is a Home gif" />
            </p>
          </transition>-->
        </td>
      </tr>
    </table>

<!--    <video autoplay muted loop id="myVideo">-->
<!--      <source src="../assets/background.mp4" type="video/mp4">-->
<!--    </video>-->
  </div>
</template>

<script>

    export default {
        name: 'Home',
        data () {
            return {
                show: true
            }
        }
    }
</script>

<style>

/*  #myVideo {
    position: fixed;
    opacity: 50%;
    z-index: 100;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }*/
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
