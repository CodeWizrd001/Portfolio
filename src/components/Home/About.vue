<template>
    <div class="banner">
        <div class="box"></div>
    </div>
    <div class="about">
        <div class="avatar">
            <img :src="picUrl" :alt="name" />
        </div> 
        <div class="info">
            <h1>{{ name }}</h1>
            <div class="stats">
                <p>
                    <span class="value">{{ githubStats.followers }}</span>
                    <span class="label">Followers</span>
                </p>
                <p>
                    <span class="value">{{ githubStats.following }}</span>
                    <span class="label">Following</span>
                </p>
                <p>
                    <span class="value">{{ githubStats.public_repos }}</span>
                    <span class="label">Public Repos</span>
                </p>
            </div>
        </div>
        <Card
            :name="name"
            :age=age
            :occupation="occupation"
            :currentCity="currentCity"
            :homeTown="homeTown"
            :email="email"
            :githubUsername="githubUsername"
            :picUrl="picUrl"
        />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Card from '@/components/Home/Card.vue';

@Options({
    components: {
        Card,
    },
    props: {
        name: String,
        age: Number,
        occupation: String,
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
    occupation!: string
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

.info {
    color: rgba(174, 194, 211,1) ;
}

.banner {
    width: 100%;
    height: 20vh;
    // Try background color: #f5f5f5;
    background-color: aliceblue;
    opacity: 0.5;
    // Place banner in the background
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.banner > .box {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}

// Align Avatar to left and info right
.about > .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.avatar > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}

.about > .details {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
}

.details > h1 {
    font-size: 2.5rem;
}

.details > p {
    font-size: 1.5rem;
    align-self: left;
    text-align: left;
    opacity: 0;
}

.about > .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.stats {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.stats > p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-inline: 5vw;
    width: 15vw;
    height: 20vh;
    max-width: 120px;
    border: 1px;
    border-style: dotted;    
    border-color: black;
    border-radius: 2vw;
    background-color: rgba(13, 13, 70, 0.25);
    padding: 10px;
    // Grid column with 2 rows
    grid-column: 1 / span 2;
}

p > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

p > span.label {
    font-size: 1em;
    font-weight: bold;
    margin-top: 1vh;
    margin-bottom: 1vh;
}

p > span.value {
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 1vh;
    margin-bottom: 1vh;
}
</style>