<template>
  <div class="hero">
    <div id="app1">
      <div class="user-header">
        <input type="file" name="image" accept="image/*" @change='onchangeImg'
               class="header-upload-btn user-header-com">
        <img  alt="" :src='imgStr' class="user-header-img user-header-com">
        <p class="tip">No more than 50KB <span class="error">{{errorStr}}</span></p>
      </div>
     </div>
  </div>
</template>

<script>
    import PoemService from '@/services/PoemService'
    import Vue from 'vue'
    import axios from 'axios'

    export default {
        name: "Profile",

        data() {
            return {
                user: [],
                userInfo: {
                    avatar: ''
                },
                errors: [],
                imgStr: '../../static/img/user_64px.png',
                errorStr: ''
            }
        },
        // Fetches Donations when the component is created.
        created() {
            this.loadUser()
        },
        methods: {
            loadUser: function () {
                PoemService.fetchUserById(Vue.prototype.$userID)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.user = response.data
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            onchangeImg (e) {
                var file = e.target.files[0]
                console.log(file)
                // 获取图片的大小，做大小限制有用
                let imgSize = file.size
                console.log(imgSize)
                var _this = this // this指向问题，所以在外面先定义
                // 比如上传头像限制5M大小，这里获取的大小单位是b
                if (imgSize <= 50 * 1024) {
                    // 合格
                    _this.errorStr = ''

                    // base64方法 2
                    var reader = new FileReader()
                    reader.readAsDataURL(file) // 读出 base64
                    reader.onloadend = function () {
                        // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
                        var dataURL = reader.result
                        console.log(dataURL)
                        _this.imgStr = dataURL
                        // 下面逻辑处理
                        PoemService.saveProfile(dataURL)
                            .then(response => {
                                // JSON responses are automatically parsed.
                                this.user = response.data
                            })
                            .catch(error => {
                                this.errors.push(error)
                                console.log(error)
                            })
                    }
                } else {
                    console.log('Your profile photo is too large')
                    _this.errorStr = 'The photo is larger than 50KB'
                }
            }
        }
    }
</script>

<style scoped>

  .user-header{
    position: relative;
    display: inline-block;
  }
  .user-header-com{
    width: 144px;
    height: 144px;
    display: inline-block;
  }
  .header-upload-btn{
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    /* 通过定位把input放在img标签上面，通过不透明度隐藏 */
  }
  .tip{
    font-size: 14px;
    color: #666;
  }
  /* error是用于错误提示 */
  .error{
    font-size: 12px;
    color: tomato;
    margin-left: 10px;
  }
 </style>
