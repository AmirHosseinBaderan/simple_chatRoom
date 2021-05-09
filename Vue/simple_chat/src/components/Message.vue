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
                  <div v-if="isSender == 'yes'">
                  <Icon name="check"/>
                  <Icon v-if="isSeen == 'yes'" name="check"/>
                  </div>
            </div>
    </div>
</div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
    export default{
        name:"Message",
        props:{
            message:String,
            align:String,
            hasImage:String,
            imageMessage:String,
            date:String,
            profileImage:String,
            profileName:String,
            isSender:String,
            isSeen:String
        },
        components:{
          Icon
        },
        methods: {
          getClass(){
            return "msg" +" " + this.align + "-msg"
          },
          getProfileImage(){
              return `background-image:url(${this.profileImage})`
          }
        }
    }
</script>
