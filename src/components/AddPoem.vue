<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-book" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
            <poem-form :poem="poem" addPoemBtnTitle="Add A Poem" @addPoem-is-created-updated="submitPoem"></poem-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
    <dfooter></dfooter>
  </div>
</template>

<script>
    import PoemService from '@/services/PoemService'
    import PoemForm from '@/components/PoemForm'

    export default {
        name:'AddPoem',
        data () {
            return {
                poem: {title:'', author:'', content:''},
                messagetitle: 'Add A Poem',
            }
        },
        components: {
            'poem-form': PoemForm,
        },
        methods: {
            submitPoem: function (poem) {
                PoemService.addMyPoem(poem)
                    .then(response => {
                        console.log(response)
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
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  #app1 {
    width: 95%;
    height: 100vh;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
