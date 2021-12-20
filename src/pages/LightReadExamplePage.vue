<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-5">
        <h3 class="text-center">Lampa läser värde</h3>
        <div class="text-center">
          <img
            height="500"
            :style="{ backgroundColor: `rgba(255,255,0,${lightValue / 100}` }"
            src="bulb.png"
            alt="bulb"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { db } from "../boot/firebase";
import { ref, onValue } from "firebase/database";
export default {
  created() {
    const bulb = ref(db, "bulb");
    onValue(bulb, (snapshot) => {
      const data = snapshot.val();
      this.lightValue = data;
    });
  },
  data() {
    return {
      lightValue: 0,
    };
  },
};
</script>
