<template>
  <StackLayout class="button-area">
    <Button
      :text="title"
      class="button"
      v-if="!isLoading(_key)"
      @tap="execute"
      :class="{
        primary: type == 'primary',
        info: type == 'info',
        edit: type == 'edit',
        success: type == 'success',
        danger: type == 'danger',
        small: size == 'small',
        medium: size == 'medium',
        large: size == 'large',
      }"
    />
    <ActivityIndicator v-else busy="true" class="loading" />
  </StackLayout>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "UIButton",
  props: {
    _key: String,
    title: String,
    type: String,
    size: String,
    eventName: String,
    eventData: Object,
    disabled: Boolean,
    params: Object,
    clicked: Function,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("generic", ["isLoading"]),
  },
  methods: {
    ...mapMutations("generic", ["addLoading", "addEvent"]),
    execute() {
      this.addLoading(this._key);
      if (this.eventName)
        this.addEvent({
          name: this.eventName,
          data: this.eventData,
        });

      if (this.clicked) this.clicked();
    },
  },
};
</script>






<style scoped>
.button {
  border-radius: 25;
  letter-spacing: 0.1;
  margin-bottom: 10;
}

.loading {
  color: #577696;
  width: 30;
  height: 30;
}

.small {
  padding-top: 10;
  padding-bottom: 10;
  font-size: 14;
}

.medium {
  padding-top: 14;
  padding-bottom: 14;
  font-size: 15;
}

.large {
  padding-top: 18;
  padding-bottom: 18;
  font-size: 17;
}

.primary {
  background-color: #577696;
  color: white;
}

.success {
  background: #94aa2a;
  color: #fff;
}

.info {
  background: #4ab4e2;
  color: #fff;
}

.edit {
  background: #7b7f83;
  color: #fff;
}

.warning {
  background: #f1bc31;
  color: #fff;
}

.danger {
  background: #f0134d;
  color: #fff;
}
</style>