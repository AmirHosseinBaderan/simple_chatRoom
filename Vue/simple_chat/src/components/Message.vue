<template>
<div>
    <div class="{{getClass()}}">

    </div>
</div>
</template>

<script>
    export default{
        name:"Message",
        props:{
            message:String,
            align:String,
            hasImage:Boolean,
            date:String,
            profileImage:String,
            profileName:String
        },
        methods: {
          getClass(){
            return "msg" + align + "-msg"
          }  
        },
    }
</script>