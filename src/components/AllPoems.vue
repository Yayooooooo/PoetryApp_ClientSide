<template>
  <div class="hero">
    <p class="lead"><b>Poems List</b></p>
    <div id="app1">
      <b-form-input type="search" v-model="keyWord" placeholder="Please enter the keyword" @input="searchKey" style="width: 20rem;display:inline"></b-form-input>
      <button class="showAllBtn" @click="loadPoems">Show All Poems</button>

      <div class="poemsList" >
        <div class="eachPoem" v-for="(poem,index) in AllPoems" v-bind:key="index">
          <h5 style="display: inline;"><a style="color: black" :href="'#/poem/'+poem.title">{{poem.title}}</a>&emsp;</h5>
          <p class="fa fa-thumbs-up fa-10x" @click="like(poem._id)">&ensp;{{poem.likes.length}}</p>
          <p style><b>Author:</b> {{poem.author}}&ensp;&emsp;<b>Translator:</b> {{poem.translator}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    import PoemService from '@/services/PoemService'
    import Vue from 'vue'
    import VueTables from 'vue-tables-2'

    Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

    export default {
        name:'AllPoems',
        data () {
            return {
                AllPoems: [],
                errors: [],
                keyWord: '',
                searchList:[]
            }
        },
        created () {
            this.loadPoems()
        },
        methods: {
            loadPoems: function () {
                PoemService.fetchPoems()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.AllPoems = response.data
                        this.searchList = this.AllPoems
                        console.log(this.AllPoems)
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
                                    this.loadPoems()
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
            },
            unlike: function (id) {
                PoemService.decreasePoemLikes(id)
                    .then(response => {
                        if(response.data.message == 'This is used for cancel your like.'){
                            this.$swal({
                                title: 'This is used for cancel your like.',
                                text: 'You can like the poem first. Haha.',
                                type: 'warning',
                                showCancelButton: true,
                                showCloseButton: true
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
            },
            searchKey(){
                this.list = this.searchFun(this.searchList,this.keyWord);
            },
            searchFun(arr,keyword){
                if(keyword ==''||keyword==null){
                    return arr;
                };
                let newList = arr.filter(item=>
                    (item.author.toUpperCase().indexOf(keyword.toUpperCase())>=0)||
                    (item.title.toUpperCase().indexOf(keyword.toUpperCase())>=0)
                );
                this.AllPoems = newList
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
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  .lead{
    font-family: Lucida Calligraphy;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 3rem;
  }
  .poemsList{
    margin-top: 2rem;
  }
  .eachPoem{
    text-align: left;
    margin-top: 2rem;
    margin-left: 3rem;
    margin-bottom: 3rem;
  }
  .showAllBtn{
    background-color: #6c757d;
    border-color: #545b62;
    color: white;
    position:relative;
    display: inline-flex;
    vertical-align: middle;
    border-radius: 5px;
    outline:none;
    border-color: darkgrey;
    border-width: thin;
    height: 2.3rem;
    margin-left: 1rem;
  }
</style>
