<template>
    <div>
        <p>Lamba Durumu: {{ status }}</p>
        <hr>
        <button @click="openLamp">Lambayı Aç</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
        status: "Kapalı..."
        }
    },
    methods: {
        openLamp() {
            this.status = "Açık..."
        }
    }
}
</script>

<style>
</style>