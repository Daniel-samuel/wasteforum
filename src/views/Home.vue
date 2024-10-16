<template>
  <div class="h-screen w-screen bg-black">
    <div
      class="w-full px-10 block h-full md:flex md:w-full md:h-full md:flex-row"
    >
      <div
        class="flex flex-col h-1/2 space-y-10 justify-center md:h-full md:w-1/2"
      >
        <div
          class="flex items-center justify-center -mt-10 w-full space-x-4 md:justify-start"
        >
          <img src="@/assets/logolaw.svg" class="h-6 w-6" alt="" />
          <p class="text-[#5CF8AD] text-2xl font-medium uppercase">Lawma</p>
        </div>
        <div class="flex flex-col space-y-6">
          <p
            v-if="data"
            class="text-2xl font-bold space-y-6 leading-loose md:text-5xl md:leading-loose md:font-semibold"
          >
            Welcome <br /><span class="bg-[#5CF8AD] text-black px-2 py-2">
              {{ data.name }}
            </span>
          </p>
          <p>
            To the Lagos Waste Management Authority <br />
            Stackholders Forum
          </p>
        </div>

        <button
          class="rounded-3xl w-full text-left flex space-x-2 items-center focus:outline-none"
          @click="$router.push({ name: 'Commit' })"
        >
          <span
            class="text-white font-medium text-lg underline underline-offset-8 decoration-[#5CF8AD]"
            >Make a Commitment
          </span>
          <img src="@/assets/arrow.svg" alt="" />
        </button>
      </div>

      <button
        @click="openImg('https://i.ibb.co/FqnQTFG/forum-details.jpg')"
        class="text-white h-1/2 md:h-full md:w-1/2 flex justify-center items-center"
      >
        <img src="@/assets/order.png" alt="" />
        <!-- <div class="bg-[#5CF8AD] h-full w-full">
          <p class="text-2xl font-bold space-y-6">hashsh</p>
        </div> -->
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const data = ref({});

function openImg(url) {
  window.open(url, "_blank");
}

onMounted(() => {
  const user = window.localStorage.getItem("data");
  data.value = JSON.parse(user);
});
</script>
