<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/mevnnav.png" class="img-circle" style="padding: 10px">
      <b-navbar-brand to="/">Poetry Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 10px; font-size: 18px;"> Home</i></b-nav-item>
          <b-nav-item to="/AllPoems" data-test="allPoemsBtn"><i class="fa fa-book" style="padding: 10px; font-size: 18px;"> All Poems</i></b-nav-item>
          <b-nav-item to="/MyPoems" data-test="myPoemsBtn"><i class="fa fa-list" style="padding: 10px; font-size: 18px;"> My Poems</i></b-nav-item>
          <b-nav-item to="/Authors" data-test="authorsBtn"><i class="fa fa-money" style="padding: 10px; font-size: 18px;"> All Authors</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/register" data-test="registerBtn"><i class="fa fa-sign-in" style="padding: 10px; font-size: 18px;"> Register</i></b-nav-item>
          <b-nav-item to="/login" data-test="loginBtn"><i class="fa fa-sign-in" style="padding: 10px; font-size: 18px;"> Login </i></b-nav-item>
          <b-nav-item><i class="fa fa-sign-out" style="padding: 10px; font-size: 18px;" @click="logout()"> Logout </i></b-nav-item>
<!--          <div v-if="user" style="color: white; font-size: 10px;">
            <img :src="user.photoURL" width="40" ><br>
            {{user.displayName}}<br>
            &lt;!&ndash;{{user.uid}}&ndash;&gt;
          </div>
          <div v-else>
            <img src="./assets/homerpic.png" width="50" style="padding-top: 2px;">
          </div>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
    import PoemService from '@/services/PoemService'

export default {
  name: 'App',
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
  background: url("assets/bgok.jpg") no-repeat fixed;
}
</style>
