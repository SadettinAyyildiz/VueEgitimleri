<template>
  <div class="container">
      <br>
    <form>
      <div class="row" v-if="isSubmited">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <!-- Soru 1 -->
          <!-- Aşağıdaki bilgileri içeren bir Üye Ol sayfası geliştiriniz. -->
          <!-- Tam Adı (Ad + Soyad) -->
          <!-- E-mail -->
          <!-- Şifre -->
          <!-- Cinsiyet (Kadın/Erkek) -->
          <div class="panel panel-info">
            <div class="panel-heading">
              <h4>Başvuru Formu</h4>
            </div>
            <div class="panel-body">
              <form>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="email">Kullanıcı Adı:</label>
                      <!-- v-model kullanmadan custom kontrol -->
                      <input 
                        type="text" 
                        id="username" 
                        class="form-control"
                        :value="userData.username"
                        @input="userData.username = $event.target.value" />
                      <label for="email">Kullanıcı Soyadı:</label>
                      <!-- v-model kullanmadan custom kontrol -->
                      <input 
                        type="text" 
                        id="surname" 
                        class="form-control"
                        :value="userData.surname"
                        @input="userData.surname = $event.target.value" />
                      <label for="email">E-mail:</label>
                      <!-- v-model kullanmadan custom kontrol -->
                      <input 
                        type="text" 
                        id="email" 
                        class="form-control"
                        :value="userData.email"
                        @input="userData.email = $event.target.value" />
                    </div>
                    <div class="form-group">
                      <label for="password">Şifre</label>
                      <input
                        type="password"
                        id="password"
                        class="form-control"
                        :value="userData.password"
                        @input="userData.password = $event.target.value" />
                    </div>
                  </div>
                </div>
                <div class="form-check">
                  <input
                    v-model="userData.gender"
                    type="radio"
                    name="cinsiyetSecimi"
                    value="erkek"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Erkek
                  </label>
                </div>
                <div class="form-check">
                  <input
                    v-model="userData.gender"
                    type="radio"
                    name="cinsiyetSecimi"
                    value="kadin"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    Kadın
                  </label>
                </div>
              </form>
              <div class="row">
                <div class="col-md-12">
                  <button
                    @click.prevent="submit"
                    class="btn btn-primary">Gönder!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Soru 2 -->
          <!-- Üye Ol formu, Submit EDİLMEDİĞİ SÜRECE ekranda gözükmelidir.-->
          <!-- Üye Bilgileri Ekranı ise form Submit EDİLDİKTEN SONRA ekranda gözükecektir -->

          <!-- Soru 3 -->
          <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="!isSubmited">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h4>Girdiğiniz Bilgier</h4>
          </div>
          <div class="panel-body">
            <p>Adı: {{ userData.username }}</p>
            <p>Soyadı: {{ userData.surname }}</p>
            <p>E-mail: {{ userData.email }}</p>
            <p>Şifre: {{ userData.password }}</p>
            <p>Cinsiyet: {{ userData.gender }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            userData: {
                username: '',
                surname: '',
                email: '',
                password: '',
                gender: ''
            },
            isSubmited: true
        }

    },
    methods: {
      submit(){
        this.isSubmited = false;
      }
    }
};
</script>

<style>
</style>
