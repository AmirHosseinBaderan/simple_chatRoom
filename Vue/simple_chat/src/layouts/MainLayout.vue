<template>
    <div class="msger">
    <headerComp Text="Chat With Test"/>
    <main class="msger-chat">
        <message message="Test" align="left" hasImage="no"  date="20:20" profileImage="https://image.flaticon.com/icons/svg/327/327779.svg" profileName="amir hossein"></message>
        <message message="Test 2" align="right" hasImage="no"  date="20:22" profileImage="https://image.flaticon.com/icons/svg/145/145867.svg" profileName="amir hossein"></message>
    </main>
    <inputCom ></inputCom>
    </div>
</template>

<script>

import headerComp from '../components/Header.vue'
import inputCom from '../components/Input.vue'
import message from '../components/Message.vue'

export default {
    name:"MainLayout",
    components:{
        headerComp,
        inputCom,
        message
    }
}
</script>
