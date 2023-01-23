<template>
  <Page actionBarHidden="true">

    <FlexboxLayout class="page" flexDirection="column" justifyContent="center">
      <StackLayout class="container">
        <Image src="~/assets/images/logo.png" class="logo-container" />
      </StackLayout>

      <StackLayout class="container login">
        <Label class="login inter-regular" textAlignment="left" text="Login de acesso" />
      </StackLayout>

      <StackLayout class="container">
        <InputText class="inter-regular" text.decode="&#xf007;" title="Usuário" :required="true" v-model="login.userName" />
      </StackLayout>

      <StackLayout class="container">
        <InputText 
          class="inter-regular"
          title="Senha"
          :required="true"
          :secure="true"
          v-model="login.password"
        />
      </StackLayout>

      <StackLayout class="container-btn">
        <UIButton
          class="inter-regular"
          _key="btnAuth"
          title="Entrar"
          titleSize="title-medium"
          type="primary"
          size="small"
          :clicked="auth"
        />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>

import InputText from "../../../components/forms/InputText.vue";
import UIButton from "../../../components/forms/UIButton.vue";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  components: { UIButton, InputText },
  name: "LoginView",
  data() {
    return {
      urlLogin: "api/v1/adm/auth/login",
      login: { userName: "", password: "" },
    };
  },
  computed: {
    ...mapState("generic", ["event"]),
  },
  methods: {
    ...mapActions("generic", ["postApi"]),
    ...mapMutations("generic", ["removeLoading"]),
    auth() {
      console.log("Iniciando login");

      let params = {
        url: this.urlLogin,
        obj: {
          userName: this.login.userName,
          password: this.login.password,
        },
      };
      this.postApi(params).then((response) => {
        if (response.success) {
          alert("Opa, deu certo!");
        } else {
          alert("Ixii, deu erro!");
        }
        this.removeLoading(["btnAuth"]);
        console.log("Finalizando login");
      });
    },
  },
};
</script>
<style scoped>
@import './Login.android.css';
@import './Login.ios.css';
@import '../../../app.css';

</style>
