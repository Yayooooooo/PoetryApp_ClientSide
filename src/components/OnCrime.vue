<template>
  <div class="hero">
    <div id="app1">
      <section>
        <ul class="box">
          <li id="leftli">
            <div align="left">
              <p class="lead">{{poem[0].title}}</p>
              <p class="author">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;by {{poem[0].author}}</p>
              <p class="content" v-for="(item) in poemResult">{{item}}</p><br>
              <audio style="text-align: left" :src="poem[0].audioSrc" controls="controls">
              </audio>
            </div>
          </li>
          <li id="righttli">
            <p class="lead">罪与罚</p>
            <p class="translator">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;by {{poem[0].translator}}</p>
            <p class="translation" v-for="(item) in transResult">{{item}}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
    import PoemService from "@/services/PoemService";

    export default {
        name: "OnCrime",
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
                PoemService.fetchPoemsByTitle("On Crime and Punishment")
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
            }
        }
    }
</script>

<style scoped>
  .hero {
    height: 5000px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  #app1 {
    width: 80%;
    margin: 0 auto;
  }
  .lead{
    font-family: Lucida Calligraphy;
    font-size: 2rem;
    text-align: left;
    align-self: center;
  }
  ul,li{
    list-style: none;
    margin: 0;
    padding-right: 3rem;
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
