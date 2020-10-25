<template>
    <div>
        <h3>newMemory Componenti</h3>
        <button @click="count++">Arttır</button>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    activated(){
        console.log('Activated...');
    },
    deactivated(){
        console.log('Deactivated...');
    }
}
</script>