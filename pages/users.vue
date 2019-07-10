<template>
    <h3>Hello users page</h3>
</template>

<script>
    export default{
        data(){
            return {
                alldata:[]
            }
        },methods:{
            async getalldata(){
                this.alldata = await this.$axios.get('users');
            }
        },created(){
            this.getalldata();
        }
    }
</script>

<style>
</style>