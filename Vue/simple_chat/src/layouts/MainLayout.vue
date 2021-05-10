<template>
    <div class="msger">
    <headerComp Text="Chat With Test"/>
    <main id="main-msg" class="msger-chat">        
        <message v-bind:messages="allMessages"/>       
    </main>
     <div class="msger-inputarea">
        <input type="text" v-model="messageText" class="msger-input" placeholder="...پیام شما">
        <button class="msger-send-btn" v-on:click="sendMessage()"> ارسال </button>
        <button class="chose-files" v-on:click="choseFile('choseFileInput')">انتخاب فایل</button>
        <input type="file" id="choseFileInput" style="display:none;" />
    </div>    
    </div>
</template>

<script>

import headerComp from '../components/HeaderComp.vue'
import message from '../components/Message.vue'

export default {
    name:"MainLayout", 
    messageText:String,   
    components:{
        headerComp,
        message
    }, 
    data(){
        return{
            allMessages:[
                {
                message:'test 1',
                align:'left',
                imageMessage:'',
                date:'20:30',
                profileImage:'./assets/logo.png',
                profileName:'amir hossein',
                isSender:'false',
                isSeen:'false'
                },{
                message:'test 1',
                align:'right',
                imageMessage:'',
                date:'20:30',
                profileImage:'./assets/logo.png',
                profileName:'amir hossein',
                isSender:'true',
                isSeen:'true'
                },{
                message:'test 1',
                align:'left',
                imageMessage:'',
                date:'20:30',
                profileImage:'./assets/logo.png',
                profileName:'amir hossein',
                isSender:'false',
                isSeen:'false'
                },{
                message:'test 1',
                align:'right',
                imageMessage:'',
                date:'20:30',
                profileImage:'./assets/logo.png',
                profileName:'amir hossein',
                isSender:'true',
                isSeen:'false'
                }
            ]
        }
    },
    methods:{
        choseFile(inputId){
           let input = document.getElementById(inputId)
           if(input != null)  input.click()
        },
        sendMessage(){
            if(this.messageText != null){
                this.allMessages.push({
                    message: this.messageText,
                    align:'right',
                    imageMessage:'',
                    date: '17:20',
                    profileImage:'./assets/logo.png',
                    profileName:'amir hossein',
                    isSender:'true',
                    isSeen:'false'
                }),
                this.messageText = ''
                let mainMsger = document.querySelector(".msger-chat")
                mainMsger.scrollTop += 1000
            }
        }
    }
}
</script>
