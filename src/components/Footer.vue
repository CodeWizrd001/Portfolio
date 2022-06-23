<template>
    <div class="footer-container">
        <div class="footer-div text-center center-block">
            <a href="https://www.instagram.com/_._.ajay.__" target="_blank">
                <img id="instagram" class="icon" src="https://img.icons8.com/color/452/instagram-new--v1.png">
            </a>
            <a href="https://www.linkedin.com/in/ajay-sakthikumar-015a28b5" target="_blank">
                <img id="linkedin" class="icon" src="https://img.icons8.com/color/452/linkedin-circled--v1.png">
            </a>
            <a href="https://www.youtube.com/DragonPyli" target="_blank">
                <img id="youtube" class="icon" src="https://img.icons8.com/color/452/youtube-play--v1.png">
            </a>
            <a href="https://github.com/CodeWizrd001" target="_blank">
                <img id="github" class="icon" src="https://img.icons8.com/windows/452/github.png">
            </a>
            <a href="mailto:codewizrd001@gmail.com" target="_blank">
                <img id="mail" class="icon" src="https://img.icons8.com/color/452/gmail.png">
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
    justify-content: center;
    padding: 10px;
}

.footer-element {
    padding: 3vw;
}

// only for a inside footer-div
.footer-div  > a {
    margin-inline: calc(min(10px, 1vw));
}

.icon {
    width: 40px;
    height: 40px;
}

#github {
    border-radius: 50%;
    background-color: white;
}
</style>