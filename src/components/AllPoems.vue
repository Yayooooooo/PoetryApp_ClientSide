<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="AllPoems" :options="options">
        <a slot="like" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="like(props.row._id)"></a>
        <a slot="unlike" slot-scope="props" class="fa fa-thumbs-down fa-2x" @click="unlike(props.row._id)"></a>

<!--        <div slot="title" slot-scope="props" target="_blank" @click="openPoem(props.row._id)"></div>-->
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
        name:'AllPoems',
        data () {
            return {
                messagetitle: ' Poems List ',
                AllPoems: [],
                props: ['_id'],
                errors: [],
                columns: ['title', 'author','likesNumber','like','unlike'],
                options: {
                    perPage: 10,
                    filterable: ['title', 'author'],
                    sortable: ['title', 'author','likesNumber'],
                    sortIcon: {
                        base: 'fa fas',
                        is: 'fa-sort',
                        up: 'fa-sort-asc',
                        down: 'fa-sort-desc'
                    },
                    headings: {
                        title: 'Title',
                        author: 'Author',
                        likesNumber:'Thumbs Up'
                    }
                }
            }
        },
        // Fetches Donations when the component is created.
        created () {
            this.loadPoems()
        },
        methods: {
            loadPoems: function () {
                PoemService.fetchPoems()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.AllPoems = response.data
                        for(var i=0;i<this.AllPoems.length;i++){
                            this.AllPoems[i].likesNumber=response.data[i].likes.length
                        }
                        // console.log(this.AllPoems[0].likes.length)
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
            }/*,
            openPoem:function(id){
                this.$router.param = id
                this.$router.push('LookPoem')
            }*/
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
