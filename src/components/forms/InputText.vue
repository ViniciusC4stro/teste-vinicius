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
    <StackLayout class="input-container">
      <TextField @textChange="textChange" :secure="secure" v-model="text" class="form-input" />
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
<style lang="scss" scoped>
.input-container {
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
  width: 100%;
}
</style>