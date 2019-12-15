<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <edit-form :poem="poem" addPoemBtnTitle="Update Poem" @addPoem-is-created-updated="updateEditedPoem"></edit-form>
          </template>
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
        data () {
            return {
                poem: {},
                childDataLoaded: false,
                temp: {},
                messagetitle: ' Update Poem ',
            }
        },
        components: {
            'edit-form': PoemForm
        },
        created () {
            this.getPoem()
        },
        methods: {
            getPoem: function () {
                // PoemService.fetchPoems(this.$store.getters['user/user'].uid, this.$router.params)
                PoemService.fetchPoemsById(this.$router.params)
                    .then(response => {
                        console.log(response)
                        this.temp = response.data
                        this.poem = this.temp[0]
                        this.childDataLoaded = true
                        console.log('Getting poem in poem: ' + JSON.stringify(this.poem, null, 5))
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            updateEditedPoem: function (poem) {
                PoemService.putEditedPoem(this.$router.params, poem)
                    .then(response => {
                        console.log(response)
                        console.log('AFTER PUT ' + JSON.stringify(poem, null, 5))
                        this.$router.push('MyPoems')
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
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
