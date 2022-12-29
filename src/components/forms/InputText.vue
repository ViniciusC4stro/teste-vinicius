<template>
  <StackLayout>

    <StackLayout class="label-container">
      <FlexboxLayout
        alignItems="center"
        justifyContent="left"
        class="label"
      >
        <Label :text="title" />
        <Label text="*" v-if="required" class="label-danger" />
      </FlexboxLayout>
    </StackLayout>
    
    <StackLayout>
      <FlexboxLayout 
        class="input-container" 
        >
        <TextField @textChange="textChange" :secure="secure" v-model="text" class="form-input"/>
        <label class="fas" :text.decode="text" style="padding-right: 5"/>
      </FlexboxLayout>
    </StackLayout>

  </StackLayout>
</template>
<script>
export default {
  name: "InputText",
  props: {
    _key: String,
    title: String,
    required: Boolean,
    secure: Boolean,
    value: String,
    text: String,
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    textChange() {
      this.$emit("input", this.text);
    },
  },
};
</script>
<style scoped>

.input-container {
  align-items: center;
  justify-content: space-between;
  border-width: 1;
  border-color: #e5e4e8;
  border-radius: 10;
  margin-bottom: 16;
  padding-left: 5;
  padding-right: 5;
}

.label-container {
  margin-bottom: 10;
}

.icon-black {
  color: black;
}

.label {
  color: #495057;
}

.label-danger {
  color: red;
}

.form-input {
  color: #495057;
  placeholder-color: #495057;
  border-width: 0;
  width: 80%;
}

</style>