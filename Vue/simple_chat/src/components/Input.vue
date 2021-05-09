<template>
    
     <form class="msger-inputarea">
            <input type="text" class="msger-input" placeholder="...پیام شما">
            <button type="submit" class="msger-send-btn">ارسال</button>
            <button class="chose-files" onclick="choseFile('choseFileInput')">انتخاب فایل</button>
            <input type="file" id="choseFileInput" style="display:none;" />
    </form>
    
</template>

<script>

export default {

}
</script>
