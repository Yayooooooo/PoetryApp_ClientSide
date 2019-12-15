<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="MyPoems" :options="options">
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editPoems(props.row._id)"></a>
        <a slot="delete" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deletePoems(props.row._id)"></a>

       <!-- <div slot="title" slot-scope="props.row, props.update, props.setEditing, props.isEditing, props.revertValue">
          <span @click="setEditing(true)" v-if="!isEditing()">
            <a>{{props.row.title}}</a>
          </span>
          <span v-else>
            <input type="text" v-model="props.row.title">
            <button type="button" class="btn btn-info btn-xs" @click="update(props.row.title), setEditing(false)">Submit</button>
            <button type="button" class="btn btn-default btn-xs" @click="revertValue(); setEditing(false)">Cancel</button>
          </span>
        </div>
-->
      </v-client-table>

      <div style="text-align: center" id="addPoem" class="fa fa-plus-square fa-2x" title="You can add your poem by clicking here!" @click="addPoem()"></div>

      <dfooter></dfooter>
    </div>
  </div>
</template>

<script>
    import PoemService from '@/services/PoemService'
    import Vue from 'vue'
    import VueTables from 'vue-tables-2'

    Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

    export default {
        name: 'MyPoems',
        data () {
            return {
                messagetitle: ' My Poems List ',
                MyPoems: [],
                props: ['_id'],
                errors: [],
                columns: ['title', 'content','edit','delete'],
                editableColumns:['title'],
                options: {
                    perPage: 10,
                    filterable: ['title'],
                    headings: {
                        title: 'Title',
                        author: 'Author'
                    }
                }
            }
        },
        // Fetches MyPoems when the component is created.
        created () {
            this.getMyPoems()
        },
        methods: {
            getMyPoems: function () {
                PoemService.fetchMyPoems()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        if(response.data.data == "Please Login first") {
                            this.$swal({
                                title: 'Please Login first',
                                text: 'Sorry, you can\'t access this section as a guest',
                                type: 'warning',
                                showCancelButton: true,
                                confirmButtonText: 'OK',
                                cancelButtonText: 'Cancel',
                                showCloseButton: true
                                // showLoaderOnConfirm: true
                            },)
                            this.$router.push('login');
                        }
                        else {
                            this.MyPoems = response.data
                            console.log(this.MyPoems)
                        }
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            increasePoems: function (id) {
                this.$router.params = id
                this.$router.push('edit')
            },
            editPoems: function (id) {
                this.$router.params = id
                this.$router.push('edit')
                console.log(this.$router.params)
            },
            deletePoems: function (id) {
                this.$swal({
                    title: 'Are you totaly sure?',
                    text: 'You can\'t Undo this action',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'OK Delete it',
                    cancelButtonText: 'Cancel',
                    showCloseButton: true
                    // showLoaderOnConfirm: true
                }).then((result) => {
                    console.log('SWAL Result : ' + result.value)
                    if (result.value === true) {
                        PoemService.deletePoems(id)
                            .then(response => {
                                // JSON responses are automatically parsed.
                                this.message = response.data.message
                                console.log(this.message)
                                this.getMyPoems()
                                // Vue.nextTick(() => this.$refs.vuetable.refresh())
                                this.$swal('Deleted', 'You successfully deleted this Poem', 'success')
                            })
                            .catch(error => {
                                this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
                                this.errors.push(error)
                                console.log(error)
                            })
                    } else {
                        console.log('SWAL Else Result : ' + result.value)
                        this.$swal('Cancelled', 'Your Poem still Counts!', 'info')
                    }
                })
            },
            addPoem: function () {
                this.$router.push('AddPoem')
                console.log(this.$router.params)
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
