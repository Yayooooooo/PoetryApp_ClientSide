<template>
  <div class="hero">
    <div id="app1">
      <section>
        <ul class="box">
          <li>
            <div align="left">
              <p class="lead">Sonnet 18</p>
              <p class="author">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;by {{poem[0].author}}</p>
              <p class="content" v-for="(item) in poemResult">{{item}}</p>
<!--              <div style="text-align: right; margin-right: 5rem">-->
<!--               </div>-->
               <audio style="text-align: center; width: 400px" :src="poem[0].audioSrc" controls="controls">
              </audio>
              <p  style="margin-left: 350px; margin-top: 1rem;" class="fa fa-thumbs-up fa-10x" @click="like(poem[0]._id)">&ensp;{{poem[0].likes.length}}</p>

              <!--              <img style="vertical-align: unset" src="../../static/img/save.png" @click="savePoem()">-->
            </div>
          </li>
          <li>
            <p class="lead">Sonnet 18</p>
            <p class="translator">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;by {{poem[0].translator}}</p>
            <p class="translation" v-for="(item) in transResult">{{item}}</p>
          </li>
        </ul>
      </section>
      <section class="background">
        <b style="font-family: Arvo; font-size: x-large">Background: </b>
        <p >{{poem[0].background}}</p>
      </section>

    </div>
  </div>
</template>

<script>
    import PoemService from "@/services/PoemService";

    export default {
        name: "Sonnet18",
        data () {
            return {
                poem: [],
                imgName:[],
                props: ['_id'],
                poemNames:[[]],
                errors: [],
                poemResult:'',
                transResult:''

        }
        },
        // Fetches Donations when the component is created.
        created () {
            this.loadPoem()
        },
        methods: {
            loadPoem: function () {
                PoemService.fetchPoemsByTitle("Sonnet 18")
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.poem = response.data
                        console.log(this.poem)
                        this.poemResult = this.poem[0].content.split(/[.,?\/#!$%\^&\*;:{}=\-_`~()]/g);
                        this.transResult = this.poem[0].translation.split(/[，。?\/#!$%\^&\*;:{}=\-_`~()]/g);
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            like: function (id) {
                PoemService.increasePoemLikes(id)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        if(response.data.message == 'You have already liked this poem!'){
                            this.$swal({
                                title: 'You have already liked this poem!',
                                text: 'This action will cancel your like.',
                                type: 'warning',
                                showCancelButton: true,
                                showCloseButton: true
                            })
                            PoemService.decreasePoemLikes(id)
                                .then(response =>{
                                    this.loadPoem()
                                })
                        }
                        else if(response.data.message == 'You haven\'t login. Please login first.'){
                            this.$swal({
                                title: 'You haven\'t login. ',
                                text: 'Please login first.',
                                type: 'warning',
                                showCancelButton: true,
                                showCloseButton: true
                            })
                        }
                        else {
                            this.loadPoems()
                            console.log(response)
                        }
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>
  .hero {
    height: 1200px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .lead{
    font-family: Lucida Calligraphy;
    margin-top: 4rem;
    font-size: 2rem;
    text-align: left;
    align-self: center;
  }
  ul,li{
    list-style: none;
    margin: 0;
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
  .author{
    font-family:Lucida Handwriting;
    font-size: small;
    text-align: left;
    margin-top: -0.5rem;
    margin-bottom: 2rem;
  }
  .content{
    font-family: Lucida Calligraphy;
    text-align: left;
  }
  .translator{
    font-family: 华文新魏;
    font-size: 1rem;
    text-align: left;
    margin-top: -0.5rem;
    margin-bottom: 2rem;
  }
  .translation{
    font-size: 1.3rem;
    font-family: 华文新魏;
    text-align: left;
  }
  .background{
    margin-top: 900px;
    text-align: justify;
  }
  /*.hero{*/
  /*  background: url('../assets/bgok.jpg');*/
  /*}*/
</style>
