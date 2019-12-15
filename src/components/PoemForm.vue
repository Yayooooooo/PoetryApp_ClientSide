<template>
  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.author.$error }">
      <label class="form-control-label" name="title">Title</label>
      <input class="form__input" id="title" placeholder="Enter title here" type="text" v-model.trim="title"/>
    </div>
    <div class="error" v-if="!$v.title.required">Title is Required</div>
    <br>
    <div class="form-group" :class="{ 'form-group--error': $v.author.$error }">
      <label class="form__label">Author</label>
      <input class="form__input" id="author" placeholder="Please enter your username" type="text" v-model.trim="author"/>
    </div>
    <div class="error" v-if="!$v.author.required">Author is Required</div>
    <br>
    <div class="form-group">
    <label class="form__label">Content</label>
    <input class="form__input" id="content" placeholder="Enter content here" type="text" v-model.trim="content"/>
    </div>

    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ addPoemBtnTitle }}</button>
      <!--<a href="/alladdPoems" class="btn btn-primary btn1" role="button">Manage Logins</a>-->
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Add your poem successfully!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding...</p>
  </form>
</template>

<script>
    import Vue from 'vue'
    import VueForm from 'vueform'
    import Vuelidate from 'vuelidate'
    import { required } from 'vuelidate/lib/validators'
    import axios from "axios";

    Vue.use(VueForm, {
        inputClasses: {
            valid: 'form-control-success',
            invalid: 'form-control-danger'
        }
    })

    Vue.use(Vuelidate)

    export default {
        name: "PoemForm",
        props: ['addPoemBtnTitle', 'poem'],
        data () {
            return {
                messagetitle: ' Add my poem ',
                title: this.poem.title,
                author: this.poem.author,
                content: this.poem.content,
                submitStatus: null
            }
        },
        validations: {
            title: {
                required
            },
            author: {
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
                        var poem = {
                            author: this.author,
                            title: this.title,
                            content: this.content
                        }
                        this.poem = poem
                        console.log('Submitting in LoginForm : ' + JSON.stringify(this.poem, null, 5))
                        this.$emit('addPoem-is-created-updated', this.poem)
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

