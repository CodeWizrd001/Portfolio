<template>
    <About 
        name="Ajay P Sakthikumar"
        :age="22"
        occupation="Developer"
        currentCity="Bangalore"
        homeTown="Munnar"
        email="sakthikumarajay@gmail.com"
        githubUsername="CodeWizrd001"
        pic="pic.jpg"
    />
    <Footer></Footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import About from "@/components/Home/About.vue";
import Footer from "@/components/Footer.vue";

@Options({
    components: {
        Footer,
        About,
    }
})
export default class Home extends Vue {}
</script>