<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-book" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
            <poem-form :addpoem="addpoem" addPoemBtnTitle="Add A Poem" @addPoem-is-created-updated="submitPoem"></poem-form>
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
                addpoem: {title:'', author:'', content:''},
                messagetitle: 'Add A Poem',
            }
        },
        components: {
            'poem-form': PoemForm,
        },
        methods: {
            submitPoem: function (addpoem) {
                PoemService.addMyPoem(addpoem)
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
