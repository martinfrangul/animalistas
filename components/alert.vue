<template>
  <div>
    <b-alert alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>Usuario no autorizado</p>
      
    </b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};

</script>

<style scoped>

.alert {
  width: 100%;
  height: fit-content;
  margin-top: 1rem;
}

</style>
