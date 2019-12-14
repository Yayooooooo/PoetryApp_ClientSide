<template>
  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.logemail.$error }">
      <label class="form-control-label" name="logemail">Email</label>
      <input class="form__input" id="logemail" placeholder="enter password here" type="email" v-model.trim="logemail"/>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.logpassword.$error }">
      <label class="form__label">Password</label>
      <input class="form__input" id="logpassword" placeholder="enter password here" type="password" v-model.trim="logpassword"/>
    </div>
    <div class="error" v-if="!$v.logpassword.required">Password is Required</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" id="submit" :disabled="submitStatus === 'PENDING'">{{ loginBtnTitle }}</button>
      <!--<a href="/alllogins" class="btn btn-primary btn1" role="button">Manage Logins</a>-->
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your Login!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Logging in...</p>
  </form>
</template>

<script>
    import Vue from 'vue'
    import VueForm from 'vueform'
    import Vuelidate from 'vuelidate'
    import { required, email } from 'vuelidate/lib/validators'


    Vue.use(VueForm, {
        inputClasses: {
            valid: 'form-control-success',
            invalid: 'form-control-danger'
        }
    })

    Vue.use(Vuelidate)

    export default {
        name: 'Login',
        props: ['loginBtnTitle', 'login'],
        data () {
            return {
                messagetitle: ' Login ',
                logpassword: this.login.logpassword,
                logemail: this.login.logemail,
                submitStatus: null
            }
        },
        validations: {
            logpassword: {
                required
            },
            logemail: {
                required,
                email
            }
        },
        methods: {
            submit () {
                console.log('submit!')
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    // do your submit logic here
                    this.submitStatus = 'PENDING'
                    setTimeout(() => {
                        this.submitStatus = null
                        var login = {
                            logemail: this.logemail,
                            logpassword: this.logpassword
                        }
                        this.login = login
                        console.log('Submitting in LoginForm : ' + JSON.stringify(this.login, null, 5))
                        this.$emit('login-is-created-updated', this.login)
                    }, 500)
                }
            }
        }
    }
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
