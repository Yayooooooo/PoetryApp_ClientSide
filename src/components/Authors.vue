<template>
  <div class="hero">
    <p class="lead"><b>Poets List</b></p>
    <div id="app1">

<!--      <button class="sortBtn">Gender</button>-->
<!--      <button class="sortBtn">School/Period</button>-->
<!--      <button class="sortBtn">Region</button>-->
<!--      <button class="sortBtn">Sort by Last Name</button>-->

      <b-dropdown text="Gender" no-caret class="ddbtn">
        <b-dropdown-item @click="filterMale">Male</b-dropdown-item>
        <b-dropdown-item @click="filterFemale">Female</b-dropdown-item>
      </b-dropdown>

      <b-dropdown text="Times" no-caret class="ddbtn">
        <b-dropdown-item @click="filterClassic">Classic</b-dropdown-item>
        <b-dropdown-item @click="filterModern">Modern</b-dropdown-item>
      </b-dropdown>

      <b-dropdown text="Language" no-caret class="ddbtn">
        <b-dropdown-item @click="filterChinese">Chinese</b-dropdown-item>
        <b-dropdown-item @click="filterEnglish">English</b-dropdown-item>
      </b-dropdown>

      <button class="showAllBtn" @click="loadAuthors">Show All Poets</button>

      <div class="poetsList" >
        <ul class="list-unstyled">

<!--          <b-media tag="li" class="my-4" v-if ="show[0]" v-for="(author,index) in Authors" v-bind:key="index">-->
<!--            <template v-slot:aside>-->
<!--              <img blank :src='imgName[0]' width="64">-->
<!--            </template>-->
<!--            <h5 align="left">{{author.name}}</h5>-->
<!--            <p align="justify">-->
<!--              {{author.introduction}}-->
<!--              <a align="right" class="fa fa-thumbs-up fa-10x" @click="like(author._id)"></a>-->
<!--              {{author.likes.length}}-->
<!--            </p>-->
<!--            <p class="workLine">Famous Works: <a class="workName" v-for="(item) in poemNames[0]"><a :href="'#/poem/'+item">{{item}}</a>&emsp;</a></p>-->
<!--          </b-media>-->

          <b-media tag="li" class="my-4" v-if = "show[0]">
            <template v-slot:aside>
              <img blank :src='imgName[0]' width="64">
            </template>
            <h5 align="left" >{{Authors[0].name}}</h5>
            <p align="justify">
              {{Authors[0].introduction}}
              <a align="right" class="fa fa-thumbs-up fa-10x" @click="like(Authors[0]._id)"></a>
              {{Authors[0].likes.length}}
            </p>
            <p class="workLine">Famous Works: <a class="workName" v-for="(item) in poemNames[0]"><a :href="'#/poem/'+item">{{item}}</a>&emsp;</a></p>
          </b-media>

          <b-media tag="li" class="my-4" v-if = "show[1]">
            <template v-slot:aside>
              <img blank :src='imgName[1]' width="64">
            </template>
            <h5 align="left" >{{Authors[1].name}}</h5>
            <p align="justify">
              {{Authors[1].introduction}}
              <a align="right" class="fa fa-thumbs-up fa-10x" @click="like(Authors[1]._id)"></a>
              {{Authors[1].likes.length}}
            </p>
            <p class="workLine">Famous Works: <a class="workName" v-for="(item) in poemNames[1]"><a :href="'#/poem/'+item">{{item}}</a>&emsp;</a></p>
          </b-media>

          <b-media tag="li" class="my-4" v-if = "show[2]">
            <template v-slot:aside>
              <img blank :src='imgName[2]' width="64">
            </template>
            <h5 align="left" >{{Authors[2].name}}</h5>
            <p align="justify">
              {{Authors[2].introduction}}
              <a align="right" class="fa fa-thumbs-up fa-10x" @click="like(Authors[2]._id)"></a>
              {{Authors[2].likes.length}}
            </p>
            <p class="workLine">Famous Works: <a class="workName" v-for="(item) in poemNames[2]"><a :href="'#/poem/'+item">{{item}}</a>&emsp;</a></p>
          </b-media>

          <b-media tag="li" class="my-4" v-if = "show[3]">
            <template v-slot:aside>
              <img blank :src='imgName[3]' width="64">
            </template>
            <h5 align="left" >{{Authors[3].name}}</h5>
            <p align="justify">
              {{Authors[3].introduction}}
              <a align="right" class="fa fa-thumbs-up fa-10x" @click="like(Authors[3]._id)"></a>
              {{Authors[3].likes.length}}
            </p>
            <p class="workLine">Famous Works: <a class="workName" v-for="(item) in poemNames[3]"><a :href="'#/poem/'+item">{{item}}</a>&emsp;</a></p>
          </b-media>

          <b-media tag="li" class="my-4" v-if = "show[4]">
            <template v-slot:aside>
              <img blank :src='imgName[4]' width="64">
            </template>
            <h5 align="left" >{{Authors[4].name}}</h5>
            <p align="justify">
              {{Authors[4].introduction}}
              <a align="right" class="fa fa-thumbs-up fa-10x" @click="like(Authors[4]._id)"></a>
              {{Authors[4].likes.length}}
            </p>
            <p class="workLine">Famous Works: <a class="workName" v-for="(item) in poemNames[4]"><a :href="'#/poem/'+item">{{item}}</a>&emsp;</a></p>
          </b-media>


        </ul>
      </div>

<!--      <v-client-table :columns="columns" :data="Authors" :options="options">-->
<!--        <a slot="like" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="like(props.row._id)"></a>-->
<!--        <a slot="unlike" slot-scope="props" class="fa fa-thumbs-down fa-2x" @click="unlike(props.row._id)"></a>-->
<!--      </v-client-table>-->


    </div>
  </div>
</template>

<script>
    import PoemService from '@/services/PoemService'
    import Vue from 'vue'
    import VueTables from 'vue-tables-2'

    Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

    export default {
        name:'Authors',
        data () {
            return {
                messagetitle: ' Poets List ',
                Authors: [],
                imgName:[],
                props: ['_id'],
                show: [true,true,true,true,true],
                poemNames:[[]],
                errors: []
            }
        },
        // Fetches Donations when the component is created.
        created () {
            this.loadAuthors()
        },
        methods: {
            loadAuthors: function () {
                PoemService.fetchAuthors()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.Authors = response.data
                        console.log(this.Authors[1].works[1])

                        for(var i=0;i<this.Authors.length;i++){
                            this.show[i] = true
                            this.imgName[i] = "../static/img/"+response.data[i].name+".png"
                            this.Authors[i].likesNumber=response.data[i].likes.length
                            this.poemNames[i] = new Array()
                            for (var j = 0; j < this.Authors[i].works.length; j++) {
                                console.log(this.Authors[i].works[j])
                                this.poemNames[i][j] = this.Authors[i].works[j]
                            }
                        }
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            filterMale: function(){
                PoemService.fetchAuthors()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.Authors = response.data
                        for(var i=0;i<this.Authors.length;i++){
                            this.show[i] = true
                            if(!this.Authors[i].gender)
                                this.show[i] = true
                            else
                                this.show[i] = false
                        }
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            filterFemale: function(){
                PoemService.fetchAuthors()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.Authors = response.data
                        for(var i=0;i<this.Authors.length;i++){
                            this.show[i] = true
                            if(this.Authors[i].gender)
                                this.show[i] = true
                            else
                                this.show[i] = false
                        }
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            filterClassic: function(){
                PoemService.fetchAuthors()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.Authors = response.data
                        for(var i=0;i<this.Authors.length;i++){
                            this.show[i] = true
                            if(this.Authors[i].times)
                                this.show[i] = true
                            else
                                this.show[i] = false
                        }
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            filterModern: function(){
                PoemService.fetchAuthors()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.Authors = response.data
                        for(var i=0;i<this.Authors.length;i++){
                            this.show[i] = true
                            if(!this.Authors[i].times)
                                this.show[i] = true
                            else
                                this.show[i] = false
                        }
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            filterChinese: function(){
                PoemService.fetchAuthors()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.Authors = response.data
                        for(var i=0;i<this.Authors.length;i++){
                            this.show[i] = true
                            if(this.Authors[i].language)
                                this.show[i] = true
                            else
                                this.show[i] = false
                        }
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            filterEnglish: function(){
                PoemService.fetchAuthors()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.Authors = response.data
                        for(var i=0;i<this.Authors.length;i++){
                            this.show[i] = true
                            if(!this.Authors[i].language)
                                this.show[i] = true
                            else
                                this.show[i] = false
                        }
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            like: function (id) {
                PoemService.increaseAuthorLikes(id)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        if(response.data.message == 'You have already liked this author!'){
                            this.$swal({
                                title: 'You have already liked this author!',
                                text: ' This action will cancel your like.',
                                type: 'warning',
                                showCancelButton: false,
                                showCloseButton: true
                            })
                            PoemService.decreaseAuthorLikes(id)
                                .then(response =>{
                                    this.loadAuthors()
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
                            this.loadAuthors()
                            console.log(response)
                        }
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            }
            /*unlike: function (id) {
                PoemService.decreaseAuthorLikes(id)
                    .then(response => {
                        if(response.data.message == 'This is used for cancel your like.'){
                            this.$swal({
                                title: 'This is used for cancel your like.',
                                text: 'You can like the author first. Haha.',
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
                            this.loadAuthors()
                            console.log(response)
                        }
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            }*/
        }
    }
</script>

<style scoped>
  .hero {
    height: 1000px;
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
  .showAllBtn {
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
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .poetsList{
    margin-top: 4rem;
    margin-left: -4rem;
    margin-right: 6rem;
  }
  .ddbtn{
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  .workName{
    font-style: italic;
  }
  .workLine{
    margin-top: -0.8rem;
    text-align: left;
  }
</style>
