<template>
    <About 
        name="Ajay P Sakthikumar"
        age=22
        currentCity="Bangalore"
        homeTown="Munnar"
        email="sakthikumarajay@gmail.com"
        githubUsername="CodeWizrd001"
        pic="logo.png"
    />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import About from "@/components/Home/About.vue";

@Options({
    components: {
        About,
    },
    props: {
        name: String
    }
})
export default class Home extends Vue {
    name!: string
}
</script>