<template>
  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.username.$error}">
      <label class="form-label" name="username">Please enter your user name</label>
      <input class="form__input" type="text" v-model.trim="username"/>
    </div>
    <div class="error" v-if="!$v.username.required">User name is Required</div>
    <br>
    <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
      <label class="form-control-label" name="email">Enter a vaild email</label>
      <input class="form__input" type="email" v-model.trim="email"/>
    </div>
    <div class="error" v-if="!$v.email.required">Email is Required</div>
    <br>
    <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
      <label class="form-control-label" name="password">Enter a vaild password</label>
      <input class="form__input" type="password" v-model.trim="password"/>
    </div>
    <div class="error" v-if="!$v.password.required">Password is Required</div>
    <div class="error" v-if="!$v.password.minLength">Password must be longer than 4 digits</div>
    <br>
    <div class="form-group" :class="{ 'form-group--error': $v.passwordConf.$error }">
      <label class="form-control-label" name="passwordConf">Enter the password again</label>
      <input class="form__input" type="password" v-model.trim="passwordConf"/>
    </div>
    <div class="error" v-if="!$v.passwordConf.required">Password Confirmation is Required</div>
    <div class="error" v-if="passwordConf != password">Password should be the same!</div>
    <br>
    <div class="form-group" :class="{ 'form-group--error': $v.gender.$error }">
      <label class="form__label">Gender</label>
      <select id="paymenttype" name="gender" class="form-control" type="text" v-model="gender">
        <option value="null" selected disabled hidden>Choose Your Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Rather not to say">Rather not to say</option>
      </select>
    </div>
    <div class="error" v-if="!$v.gender.required">Gender is Required</div>

    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ registerBtnTitle }}</button>
      <!--<a href="/allregisters" class="btn btn-primary btn1" role="button">Manage Registers</a>-->
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your Register!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Registering...</p>
  </form>
</template>

<script>
    import Vue from 'vue'
    import VueForm from 'vueform'
    import Vuelidate from 'vuelidate'
    import { required, minLength } from 'vuelidate/lib/validators'

    Vue.use(VueForm, {
        inputClasses: {
            valid: 'form-control-success',
            invalid: 'form-control-danger'
        }
    })

    Vue.use(Vuelidate)

    export default {
        name: 'Register',
        props: ['registerBtnTitle', 'register'],
        data () {
            return {
                messagetitle: ' Register ',
                email:this.register.email,
                username: this.register.username,
                gender: this.register.gender,
                password: this.register.password,
                passwordConf: this.register.passwordConf,
                likes: [],
                submitStatus: null
            }
        },
        validations: {
            password: {
                required,
                minLength: minLength(4)
            },
            username: {
                required
            },
            gender: {
                required
            },
            email: {
                required
            },
            passwordConf: {
                required
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
                        this.submitStatus = 'OK'
                        var register = {
                            email: this.email,
                            username: this.username,
                            password: this.password,
                            passwordConf: this.passwordConf,
                            gender: this.gender
                        }
                        this.register = register
                        console.log('Submitting in RegisterForm : ' + JSON.stringify(this.register, null, 5))
                        this.$emit('register-is-created-updated', this.register)
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
