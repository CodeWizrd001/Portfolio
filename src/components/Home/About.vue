<template>
    <div class="about">
        <div class="avatar">
            <img :src="picUrl" :alt="name" />
        </div> 
        <div class="info">
            <div class="details">
                <h1>{{ name }}</h1>
                <p>{{ age }} years old</p>
                <p>{{ currentCity }}</p>
                <p>{{ homeTown }}</p>
                <p>{{ email }}</p>
                <p>{{ githubUsername }}</p>
            </div>
            <div class="stats">
                <p>
                    <span class="label">Followers</span>
                    <span class="value">{{ githubStats.followers }}</span>
                </p>
                <p>
                    <span class="label">Following</span>
                    <span class="value">{{ githubStats.following }}</span>
                </p>
                <p>
                    <span class="label">Public Repos</span>
                    <span class="value">{{ githubStats.public_repos }}</span>
                </p>
            </div>
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
        githubUsername: String,
        pic: String,
    }
})
export default class About extends Vue {
    name!: string
    age!: number
    currentCity!: string
    homeTown!: string
    email!: string
    githubUsername!: string
    pic!: string

    picUrl!: string

    githubStats!: {
        followers: number
        following: number
        public_repos: number
    }

    created() {
        console.log("About created");
        this.picUrl = require(`@/assets/images/${this.pic}`)
        
        this.githubStats = {
            followers: 0,
            following: 0,
            public_repos: 0,
        }

        fetch(`https://api.github.com/users/${this.githubUsername}`)
            .then(response => response.json())
            .then(data => {
                this.githubStats.followers = data.followers
                this.githubStats.following = data.following
                this.githubStats.public_repos = data.public_repos
                this.$forceUpdate()
            })
            .catch((error) => {
                console.log("[+] Error")
                console.log(error)
            })
            .finally(() => console.log("[+] Github Request Completed"))
    }
}
</script>

<style lang="scss">
.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

// Align Avatar to left and info right
.about > .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
}

.about > .details {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-top: 60px;
}

.details > h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.details > p {
    font-size: 1.5rem;
    margin-bottom: 10px;
    align-self: left;
    text-align: left;
}

.about > .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
}

.stats {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
}

.stats > p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    margin-inline: 60px;
}

p > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
}

p > span.label {
    font-size: 1.2em;
    font-weight: bold;
}

p > span.value {
    font-size: 1.2em;
    font-weight: bold;
}
</style>