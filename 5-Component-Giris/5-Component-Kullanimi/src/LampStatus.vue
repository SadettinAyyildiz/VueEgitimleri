<template>
    <div>
        <p>Lamba durumu: {{ status }}</p>
        <button @click="openLamp">Lambayı Aç</button>
        <hr>
    </div>
</template>

<script>
export default {
    data(){
        return {
            status: "Kapalı"
        }
    },
    methods: {
        openLamp(){
            this.status = "Açık..."
        }
    }
}
</script>

<style>

</style>