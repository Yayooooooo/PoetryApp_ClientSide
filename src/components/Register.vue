<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <register-form :register="register" registerBtnTitle="Make Register"
                         @register-is-created-updated="submitRegister"></register-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
   <!-- <g-signin-button
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in with Google
    </g-signin-button>-->
  </div>
</template>

<script>
    import PoemService from '@/services/PoemService'
    import RegisterForm from '@/components/RegisterForm'

    export default {
        data () {
            return {
                register: {username: '', email:'', password: '', passwordConf: '', gender:''},
                messagetitle: ' Make Registration ',
                googleSignInParams: {
                    client_id: 'YOUR_APP_CLIENT_ID.apps.googleusercontent.com'
                }
            }
        },
        components: {
            'register-form': RegisterForm
        },
        methods: {
            submitRegister: function (register) {
                PoemService.postRegister(register)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            onSignInSuccess (googleUser) {
                // `googleUser` is the GoogleUser object that represents the just-signed-in user.
                // See https://developers.google.com/identity/sign-in/web/reference#users
                const profile = googleUser.getBasicProfile() // etc etc
            },
            onSignInError (error) {
                // `error` contains any error occurred.
                console.log('OH NOES', error)
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
  g-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #3c82f7;
    color: #ffa519;
    box-shadow: 0 3px 0 #0f69ff;
  }
</style>
