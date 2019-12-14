<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <login-form :login="login" loginBtnTitle="Login"
                         @login-is-created-updated="submitLogin"></login-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
    import PoemService from '@/services/PoemService'
    import LoginForm from '@/components/LoginForm'

    export default {
        data () {
            return {
                login: {logemail: '', logpassword: ''},
                messagetitle: ' Login '
            }
        },
        components: {
            'login-form': LoginForm
        },
        methods: {
            submitLogin: function (login) {
                PoemService.postLogin(login)
                    .then(response => {
                        if(response.data.message == "Wrong email or password!"){
                            this.$swal({
                                title: 'Wrong email or password!',
                                text: 'Maybe you haven\'t register.',
                                type: 'warning',
                                showCancelButton: true,
                                showCloseButton: true
                            })
                        }
                        else{
                            this.$swal({
                                title: 'Successfully Login',
                                text: 'Welcome to the poetry world.',
                                showCancelButton: true,
                                showCloseButton: true,
                                type:'success'
                            })
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
