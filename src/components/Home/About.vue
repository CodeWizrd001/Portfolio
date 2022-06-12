<template>
    <div class="about">
        <div class="avatar">
            <img :src=picUrl :alt=name />
        </div>  
        <div class="info">
            <h1>{{ name }}</h1>
            <p>{{ age }} years old</p>
            <p>{{ currentCity }}</p>
            <p>{{ homeTown }}</p>
            <p>{{ email }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        name: String,
        age: Number,
        currentCity: String,
        homeTown: String,
        email: String,
        pic: String,
    }
})
export default class About extends Vue {
    name!: string
    age!: number
    currentCity!: string
    homeTown!: string
    email!: string
    pic!: string

    picUrl!: string

    created() {
        console.log("About created");
        this.picUrl = require(`@/assets/images/${this.pic}`)
    }
}
</script>