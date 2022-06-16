<template>
    <div class="footer-container">
        <div class="footer-div text-center center-block">
            <a href="">
                <img id="instagram" class="icon" src="https://img.icons8.com/color/452/instagram-new--v1.png">
            </a>
            <a>
                <img id="linkedin" class="icon" src="https://img.icons8.com/color/452/linkedin-circled--v1.png">
            </a>
            <a>
                <img id="youtube" class="icon" src="https://img.icons8.com/color/452/youtube-play--v1.png">
            </a>
            <a>
                <img id="github" class="icon" src="https://img.icons8.com/windows/452/github.png">
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Options , Vue } from 'vue-class-component';

@Options({
    components: {      
    }
})
export default class Footer extends Vue {}
</script>

<style lang="scss">
.footer-container {
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-top: 50px;
}

.footer-div {
    display: flex;
    justify-content: space-around;
    padding: 10px;
}

.footer-element {
    padding: 10px;
    margin-inline-start: 80px;
    margin-inline-end: 80px;
}

// only for a inside footer-div
.footer-div  > a {
    margin-inline: 10px;
}

.icon {
    width: 40px;
    height: 40px;
}
</style>