<template>
  <Page actionBarHidden="true">

    <FlexboxLayout class="page" flexDirection="column" justifyContent="center">
      <StackLayout class="container">
        <Image src="~/images/logo.png" class="logo-container" />
      </StackLayout>

      <StackLayout class="container login">
        <Label textAlignment="left" text="Login de acesso" />
      </StackLayout>

      <StackLayout class="container">
        <InputText title="Usuário" :required="true" v-model="login.userName" />
      </StackLayout>

      <StackLayout class="container">
        <InputText
          title="Senha"
          :required="true"
          :secure="true"
          v-model="login.password"
        />
      </StackLayout>

      <StackLayout class="container-btn">
        <UIButton
          _key="btnAuth"
          title="Entrar"
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
.page {
    background-color: white;
    height: 100%;
  }
  
  .login {
    font-size: 20;
    font-family: 'Inter Black';
    margin-bottom: 20;
    color: black;
  }
  
  .container {
    margin-left: 30;
    margin-right: 30;
  }
  
  .container-btn {
    margin-top: 20;
    margin-left: 30;
    margin-right: 30;
  }
  
  .logo-container {
    width: 180;
    margin-bottom: 30;
  }
  
  .margin-input {
    margin-bottom: 20;
  }
  
  .form-input {
    color: #495057;
    placeholder-color: #495057;
    border-width: 1;
    width: 100%;
  }
  
  .teste {
    color: black;
  }
</style>
