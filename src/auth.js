/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js"></script>

  <!-- TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
  <script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-analytics.js"></script>

  <script>
// Your web app's Firebase configuration*/
import firebase from 'firebase'
import firebaseui from 'firebaseui'

var firebaseConfig = {
  apiKey: "AIzaSyDFU-xqYvxwNGS4O5faf7pG01coYLHEMLQ",
  authDomain: "poetry-51144.firebaseapp.com",
  databaseURL: "https://poetry-51144.firebaseio.com",
  projectId: "poetry-51144",
  storageBucket: "poetry-51144.appspot.com",
  messagingSenderId: "190692621170",
  appId: "1:190692621170:web:74aa51b22c22740e9dbbeb",
  measurementId: "G-5PV4BM68D6"
};
const auth = {
  context: null,
  uiConfig: null,
  ui: null,

  init (context) {
    this.context = context

    firebase.initializeApp(config)
    this.uiConfig = {
      signInSuccessUrl: 'alldonations',
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    this.ui = new firebaseui.auth.AuthUI(firebase.auth())

    firebase.auth().onAuthStateChanged((user) => {
      this.context.$store.dispatch('user/setCurrentUser')

      let requireAuth = this.context.$route.matched.some(record => record.meta.requireAuth)
      let guestOnly = this.context.$route.matched.some(record => record.meta.guestOnly)

      if (requireAuth && !user) this.context.$router.push('login')
      else if (guestOnly && user) this.context.$router.push('donations')
    })
  },
  authForm (container) {
    this.ui.start(container, this.uiConfig)
  },
  user () {
    return this.context ? firebase.auth().currentUser : null
  },
  logout () {
    firebase.auth().signOut()
  }
}

export default auth

/*// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
</script>*/
