<template>
    <div class="asset-create">
        ASSET CREATE <button @click="toggled = !toggled">toggle</button>
        <portal to="sidebar" v-if="toggled">
            <div style="width: 200px"></div>
        </portal>
    </div>
</template>

<script>
export default {
    data(){
        return {
            toggled: false
        }
    }
}   
</script>

<style>

</style>