<template>
    <div>

    </div>
</template>


<script>

export default{
    name:'sideBar',
    props:{
        chats:{
            title:String,
            profileImage:String,
            isOnline:String,
            shortMessage:String
        }
    }
}

</script>

<style>
@import "./assets/sidebar.css";
</style>