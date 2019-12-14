<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="Authors" :options="options">
        <a slot="like" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="like(props.row._id)"></a>
        <a slot="unlike" slot-scope="props" class="fa fa-thumbs-down fa-2x" @click="unlike(props.row._id)"></a>
      </v-client-table>
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
                messagetitle: ' Authors List ',
                Authors: [],
                props: ['_id'],
                errors: [],
                columns: ['name','introduction','likesNumber','like','unlike'],
                options: {
                    perPage: 10,
                    filterable: ['name'],
                    sortable: ['name','likesNumber'],
                    sortIcon: {
                        base: 'fa fas',
                        is: 'fa-sort',
                        up: 'fa-sort-asc',
                        down: 'fa-sort-desc'
                    },
                    headings: {
                        author: 'Author',
                        likesNumber:'Thumbs Up'
                    }
                }
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
                        for(var i=0;i<this.Authors.length;i++){
                            this.Authors[i].likesNumber=response.data[i].likes.length
                        }
                        // console.log(this.Authors[0].likes.length)
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
                                text: 'You can\'t like it twice.',
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
            },
            unlike: function (id) {
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
            }
        }
    }
</script>

<style scoped>
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
</style>
