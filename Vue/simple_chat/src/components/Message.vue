<template>
<div>
    <div v-for="(msg, index) in messages" :key="index" :class="getClass(msg.align)">
        <div class="msg-img" :style="getProfileImage(msg.profileImage)"></div>
            <div class="msg-bubble">
                    <div class="msg-info">
                        <div class="msg-info-name">{{msg.profileName}}</div>
                        <div class="msg-info-time">{{msg.date}}</div>
                    </div>
                  <div v-if="msg.imageMessage != null && msg.imageMessage != ''">
                    <div  class="msg-image">
                        <img :src="msg.imageMessage" />
                    </div>
                  </div>
                  <div class="msg-text">
                        {{msg.message}}
                  </div>
                  <div v-if="msg.isSender == 'true'">
                  <Icon name="check"/>
                  <Icon v-if="msg.isSeen == 'true'" name="check"/>
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
            messages:{
              message:String,
              align:String,
              imageMessage:String,
              date:String,
              profileImage:String,
              profileName:String,
              isSender:String,
              isSeen:String
            }
        },
        components:{
          Icon
        },
        methods: {
          getClass(align){
            return "msg" +" " + align + "-msg"
          },
          getProfileImage(img){
            return `background-image: url(${img})`
          }
        }
    }
</script>
