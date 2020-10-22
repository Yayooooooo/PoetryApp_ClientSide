<template>
  <div id="app">
    <b-navbar toggleable="md" style="background-color: #ffffff; height:99px">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <a href="/"><img src="./assets/icon.jpg" class="img-circle" style="padding: 10px"></a>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item-dropdown text="Poem" right class="itemTopic">
            <b-dropdown-item to="/Authors" class="dditem">Poets</b-dropdown-item>
            <b-dropdown-item href="#/AllPoems" class="dditem">Poems</b-dropdown-item>

          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Painting" right class="itemTopic">
<!--            <b-dropdown-item to="/Painters" class="dditem">Painters</b-dropdown-item>-->
<!--            <b-dropdown-item to="/Paintings" class="dditem">Paintings</b-dropdown-item>-->
            <b-dropdown-item class="dditem">Painters</b-dropdown-item>
            <b-dropdown-item class="dditem">Paintings</b-dropdown-item>
            <b-dropdown-item to="/painting/Scream" class="dditem">Example</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Sculpture" right class="itemTopic">
<!--            <b-dropdown-item to="/Sculptors" class="dditem">Sculptor</b-dropdown-item>-->
<!--            <b-dropdown-item to="/Sculptures" class="dditem">Sculptures</b-dropdown-item>-->
<!--            <b-dropdown-item to="/sculptures/Scream" class="dditem">Example</b-dropdown-item>-->
            <b-dropdown-item class="dditem">Sculptor</b-dropdown-item>
            <b-dropdown-item class="dditem">Sculptures</b-dropdown-item>
            <b-dropdown-item to="/sculptures/David" class="dditem">Example</b-dropdown-item>
          </b-nav-item-dropdown>

<!--          <b-nav-item-dropdown text="My Home" right class="itemTopic">-->
<!--            <b-dropdown-item to="/MyPoems" class="dditem">My Poems</b-dropdown-item>-->
<!--            <b-dropdown-item to="/SavedPoems" class="dditem">Saved Poems</b-dropdown-item>-->
<!--            <b-dropdown-item to="/Profile" class="dditem">My Profile</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->

        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/MyPoems"><i class="fa fa-sign-out" style="padding: 10px; font-size: 18px;"> My Poems </i></b-nav-item>
          <b-nav-item to="/register" data-test="registerBtn"><i class="fa fa-sign-in" style="padding: 10px; font-size: 18px;"> Register</i></b-nav-item>
          <div v-if="this.$userID == null"  style="color: white; font-size: 10px;">
            <b-nav-item to="/login" data-test="loginBtn"><i class="fa fa-sign-in" style="padding: 10px; font-size: 18px;"> Login </i></b-nav-item>
          </div>
          <div v-else>
            <b-nav-item><i class="fa fa-sign-out" style="padding: 10px; font-size: 18px;" @click="logout()"> Logout </i></b-nav-item>
<!--            <img src="./assets/homerpic.png" width="50" style="padding-top: 2px;">-->
            <!--            {{id}}-->
            <!--            {{user.uid}}-->
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
    import PoemService from '@/services/PoemService'
    import axios from "axios";
    import Vue from 'vue'

    export default {
  name: 'App',
    data(){
      return {
      }
    },
    methods: {
        logout: function () {
            this.$swal({
                title: 'Are you sure to logout?',
                text: 'You can\'t Undo this action',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Logout',
                cancelButtonText: 'Cancel',
                showCloseButton: true
                // showLoaderOnConfirm: true
            }).then((result) => {
                console.log('SWAL Result : ' + result.value)
                if (result.value === true) {
                    PoemService.logout()
                        .then(response => {
                            // JSON responses are automatically parsed.
                            this.message = response.data.message
                            console.log(this.message)
                            // Vue.nextTick(() => this.$refs.vuetable.refresh())
                            this.$swal('Logout', 'You successfully logged out', 'success')
                            Vue.prototype.$userID = null
                            this.$router.go(0)
                        })
                        .catch(error => {
                            this.$swal('ERROR', 'Something went wrong trying to logout ' + error, 'error')
                            this.errors.push(error)
                            console.log(error)
                        })
                } else {
                    console.log('SWAL Else Result : ' + result.value)
                    this.$swal('Cancelled', 'Your account still Counts!', 'info')
                }
            })
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*background-color: #eeeced;*/
  background: url('assets/bgok.jpg');
}

.dropdown-menu{
  min-width:100px;
  outline:none;
}

.dropdown-item{
  font-size: 1rem;
  font-family: Comic Sans MS;
  color: black;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
}


.itemTopic{
  font-family: Comic Sans MS;
  font-size: 1.3rem;
  padding-left: 1.2rem;
}

</style>
