<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedComponent = 'appBlue'; sendColor('Blue')" class="btn btn-primary">Mavi Temayı Yükle</button>
                <button @click="selectedComponent = 'appGreen'; sendColor('Green')" class="btn btn-success">Yeşil Temayı Yükle</button>
                <button @click="selectedComponent = 'appRed'; sendColor('Red')" class="btn btn-danger">Kırmızı Temayı Yükle </button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <hr>
                <component :is="selectedComponent">
                    <p>{{ color }}</p>
                </component>
                <app-blue>
                    <p>Mavi</p>
                </app-blue>
                <app-green>
                    <p>Yesil</p>
                </app-green>
                <app-red>
                    <p>Kırmızı</p>
                </app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                selectedComponent: "appBlue",
                color: ""
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods:{
            sendColor(color){
                this.color = color;
            }
        }

    }
</script>

<style>
</style>
