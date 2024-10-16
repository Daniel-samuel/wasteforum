<template>
  <div class="h-screen w-screen bg-black">
    <div
      class="w-full space-y-10 px-10 py-10 block h-full md:flex md:w-full md:h-full md:flex-col md:justify-center md:items-center"
    >
      <div class="flex items-center justify-center w-full space-x-4">
        <img src="@/assets/logolaw.svg" class="h-6 w-6" alt="" />
        <p class="text-[#5CF8AD] text-2xl font-medium uppercase">Lawma</p>
      </div>

      <form
        @submit.prevent="commit"
        class="flex flex-col justify-center items-center h-97 w-full space-y-10 md:w-96 md:justify-center"
      >
        <div
          v-if="data"
          class="text-white h-28 w-full rounded-2xl px-4 flex flex-col gap-3 justify-center"
        >
          <p>Name: {{ data.name }}</p>
          <p>Email: {{ data.email }}</p>
          <p>Number: {{ data.number }}</p>
          <p>Role: {{ data.role }}</p>
        </div>
        <div class="w-full items-center flex flex-col">
          <label class="relative">
            <textarea
              type="text"
              class="w-84 p-6 h-60 text-md outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
              v-model="args.message"
            ></textarea>
            <span
              class="absolute left-0 top-4 px-4 text-md text-gray-400 tracking-wide peer-focus:text-[#5CF8AD] pointer-event-none duration-200 peer-focus:text-sm peer-focus:-translate-y-6 bg-black ml-6"
              >Commitment</span
            >
          </label>
        </div>

        <button
          type="submit"
          class="w-84 py-4 bg-[#62CD9A] rounded-3xl focus:outline-none"
        >
          <span class="text-white">Submit</span>
        </button>
      </form>
    </div>

    <LoaderVue v-if="loading" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const data = ref({});
import { useDataStore } from "@/stores/data";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import LoaderVue from "./Loader.vue";

const toast = useToast();
const router = useRouter();
const store = useDataStore();
const loading = ref(false);
const { mutate } = store;
const args = ref({ message: "", register: "" });
const commit = async () => {
  loading.value = true;
  try {
    const res = await mutate({
      endpoint: "CreateCommitment",
      data: { input: args.value },
      service: "GENERAL",
    });
    if (res) {
      toast.success("Commit registered successfully");
      router.push({ name: "Home" });
    }
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};
onMounted(() => {
  const user = window.localStorage.getItem("data");
  data.value = JSON.parse(user);
  args.value.register = data.value.id;
});
</script>
