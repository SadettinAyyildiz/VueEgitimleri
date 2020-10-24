<template>
    <div class="row">
        <sunucu-listesi></sunucu-listesi>
        <sunucu-bilgi></sunucu-bilgi>    
    </div>
</template>

<script>
import SunucuListesi from './SunucuListesi'
import SunucuBilgi from './SunucuBilgi'
export default {
    components: {
        "sunucu-listesi" : SunucuListesi,
        "sunucu-bilgi" : SunucuBilgi
    }
}
</script>