<template>
  <div class="h-screen w-screen bg-black bg-center">
    <form
      @submit.prevent="login"
      class="h-full w-full py-20 flex flex-col items-center space-y-16"
    >
      <div class="text-white">
        <div class="flex w-full space-x-4">
          <img src="@/assets/logolaw.svg" class="h-6 w-6" alt="" />
          <p class="text-[#5CF8AD] text-2xl font-medium">Lawma</p>
        </div>

        <p>Shakeholder's Forum</p>
      </div>
      <div class="w-full items-center flex flex-col space-y-6">
        <label class="relative">
          <input
            type="email"
            name="email"
            class="w-84 pl-6 py-4 text-sm outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
            v-model="args.email"
          />
          <span
            class="absolute left-0 top-4 px-4 text-sm text-gray-400 tracking-wide peer-focus:text-[#5CF8AD] pointer-event-none duration-200 peer-focus:text-sm peer-focus:-translate-y-6 bg-black ml-6 peer-valid:text-sm peer-valid:-translate-y-6"
            >Email</span
          >
        </label>

        <label class="relative">
          <input
            type="text"
            name="number"
            class="w-84 pl-6 py-4 text-sm outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
            v-model="args.number"
          />
          <span
            class="absolute left-0 top-4 px-4 text-sm text-gray-400 tracking-wide peer-focus:text-[#5CF8AD] pointer-event-none duration-200 peer-focus:text-sm peer-focus:-translate-y-6 bg-black ml-6 peer-valid:text-sm peer-valid:-translate-y-6"
            >PhoneNumber</span
          >
        </label>
      </div>

      <button class="w-84 py-4 bg-[#62CD9A] rounded-3xl focus:outline-none">
        <span class="text-white">Submit</span>
      </button>
    </form>

    <LoaderVue v-if="loading" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useDataStore } from "@/stores/data";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import LoaderVue from "./Loader.vue";

const toast = useToast();
const router = useRouter();
const store = useDataStore();
const { mutate } = store;
const args = ref({ email: "", number: "" });
const loading = ref(false);
const login = async () => {
  loading.value = true;
  try {
    const res = await mutate({
      endpoint: "Login",
      data: { input: args.value },
      service: "GENERAL",
    });
    if (res) {
      window.localStorage.setItem("token", res.token);
      window.localStorage.setItem("data", JSON.stringify(res.user));
      toast.success("Login successfully");
      router.push({ name: "Home" });
    }
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};
</script>
