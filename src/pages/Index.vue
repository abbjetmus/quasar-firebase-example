<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-5">
        <h3 class="text-center">Lampa exempel</h3>
        <div class="text-center">
          <img
            height="500"
            :style="{ backgroundColor: `rgba(255,255,0,${lightValue / 100}` }"
            src="bulb.png"
            alt="bulb"
          />
        </div>
        <div class="row justify-center align-center">
          <div class="col-1 q-mr-xs self-center">
            <q-icon color="deep-orange" size="lg" name="brightness_medium" />
            0
          </div>
          <div class="col">
            <q-slider
              v-model="lightValue"
              :min="0"
              :max="100"
              :step="4"
              label
              color="deep-orange"
            />
          </div>
          <div class="col-1 self-center q-ml-sm">100</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { db } from "../boot/firebase";
import { ref, set } from "firebase/database";
export default {
  created() {},
  data() {
    return {
      lightValue: 0,
    };
  },
  watch: {
    lightValue: function (val) {
      set(ref(db, "bulb"), val);
    },
  },
};
</script>
