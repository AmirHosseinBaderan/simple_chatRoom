<template>
<div>
    <div  :class="getClass()">
        <div class="msg-img" :style="getProfileImage()"></div>
            <div class="msg-bubble">
                    <div class="msg-info">
                        <div class="msg-info-name">{{profileName}}</div>
                        <div class="msg-info-time">{{date}}</div>
                    </div>
                  <div v-if="hasImage === 'yes'">
                    <div  class="msg-image">
                        <img :src="imageMessage" />
                    </div>
                  </div>
                  <div class="msg-text">
                        {{message}}
                  </div>
            </div>
    </div>
</div>
</template>

<script>
    export default{
        name:"Message",
        props:{
            message:String,
            align:String,
            hasImage:String,
            imageMessage:String,
            date:String,
            profileImage:String,
            profileName:String
        },
        methods: {
          getClass(){
            return "msg" +" " + this.align + "-msg"
          },
          getProfileImage(){
              return `background-image:url(${this.profileImage})`
          }
        },
    }
</script>
