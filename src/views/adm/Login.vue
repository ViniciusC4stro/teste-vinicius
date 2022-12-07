<template>
  <Page>
    <ActionBar>
      <Label text="Home" class="font-bold text-lg" />
    </ActionBar>

    <FlexboxLayout class="page" flexDirection="column" justifyContent="center">
      <StackLayout class="container">
        <Image
          src="https://nixloc.com.br/wp-content/themes/nix-loc/images/logo_nixweb.png"
          class="logo-container"
        />
      </StackLayout>

      <StackLayout class="container login">
        <Label textAlignment="center" :text="user" />
      </StackLayout>

      <StackLayout class="container margin-input">
        <TextField hint="Usuário" class="form-input" v-model="login.userName" />
      </StackLayout>

      <StackLayout class="container margin-input">
        <TextField hint="Senha" class="form-input" v-model="login.password" />
      </StackLayout>

      <StackLayout class="container">
        <Button text="Login" @tap="auth" class="btn" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "LoginView",
  data() {
    return {
      urlLogin: "api/v1/adm/auth/login",
      login: { userName: "", password: "" },
    };
  },
  computed: {
    ...mapState("generic", ["user"]),
  },
  methods: {
    ...mapActions("generic", ["postApi"]),
    ...mapMutations("generic", ["addUser"]),
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
          this.addUser(response.content.user.name);
        } else {
          alert("Ixii, deu erro!");
        }
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
  margin-bottom: 20;
}

.container {
  margin-left: 30;
  margin-right: 30;
}

.logo-container {
  width: 200;
  margin-bottom: 30;
}

.margin-input {
  margin-bottom: 20;
}

.btn {
  background-color: red;
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
