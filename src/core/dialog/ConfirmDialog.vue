<template>
  <transition name="dialog">
    <div v-if="active" class="dialog-backdrop" @click="close">
      <div class="dialog-container" @click.stop>
        <div v-if="Mode && mode === Mode.confirm">
          <QuestionMark class="svg" />
        </div>
        <div v-else-if="Mode && mode === Mode.info">
          <Tick class="svg" />
        </div>
        <div v-else-if="Mode && mode === Mode.alert">
          <ExclamationMark class="svg" />
        </div>

        <slot />
        <button type="button" @click="close()">Close</button>
      </div>
    </div>
  </transition>
</template>

<script>
import QuestionMark from "@/assets/svg/question-mark.svg";
import ExclamationMark from "@/assets/svg/exclamation-mark.svg";
import Tick from "@/assets/svg/tick.svg";
import { DialogMode } from "@/core";

export default {
  name: "ConfirmDialog",
  components: {
    QuestionMark,
    ExclamationMark,
    Tick
  },
  props: {
    mode: String,
    active: { type: Boolean, default: false }
  },
  data() {
    return {
      Mode: {}
    };
  },
  created() {
    console.log("before", this.Mode, DialogMode);
    this.Mode = DialogMode;
    console.log("after", this.Mode, DialogMode);
  },
  methods: {
    close() {
      this.$emit("update:active", false);
    }
  }
};
</script>

<style scoped>
.dialog-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog-container {
  min-width: 500px;
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12);
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.3s;
}
.dialog-enter,
.dialog-leave-to {
  opacity: 0;
}

/* .dialog-enter-active .dialog-container,
.dialog-leave-active .dialog-container {
  transition: width 0.4s;
}
.dialog-enter .dialog-container,
.dialog-leave-to .dialog-container {
  width: 0;
} */
</style>
