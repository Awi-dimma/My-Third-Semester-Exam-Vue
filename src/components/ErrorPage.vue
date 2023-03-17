<template>
    <div>
        <h1>404 Page! </h1>
    </div>
    <Button @click="toHome">Go back to home</Button> 
</template>
<script>
export default{
    name: 'ErrorPage',
    methods: {
        toHome(){
            this.$router.push("/")
        }
    }
}
</script>