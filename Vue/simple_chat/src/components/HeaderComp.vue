<template>
    <div>
        <header class="msger-header">
            <div class="msger-header-title" >
                <Icon name="comment-alt"/>{{this.Text}}
            </div>
            <div class="msger-header-options">
                <Icon name="cog"/>
            </div>
        </header>
    </div>
</template>

<script>

import Icon from 'vue-awesome/components/Icon'

export default{    
    name:'headerComp',
    components:{
        Icon
    },
    props:{
        Text:String
    }
}

</script>
