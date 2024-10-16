<template>
  <div class="h-screen w-screen bg-black bg-center">
    <LoaderVue v-if="loading" />
    <form
      @submit.prevent="register()"
      class="h-97 w-full py-20 flex flex-col items-center space-y-16"
    >
      <div class="text-white">
        <div class="flex w-full space-x-4">
          <img src="@/assets/logolaw.svg" class="h-6 w-6" alt="" />
          <p class="text-[#5CF8AD] text-2xl font-medium uppercase">Lawma</p>
        </div>

        <p>Shakeholder's Forum</p>
      </div>
      <div class="w-full items-center flex flex-col space-y-6">
        <label class="relative">
          <input
            type="text"
            class="w-84 pl-6 py-4 text-md outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
            v-model="args.name"
            required
          />
          <span
            class="absolute left-0 top-4 px-4 text-sm text-gray-400 tracking-wide peer-focus:text-[#5CF8AD] pointer-event-none duration-200 peer-focus:text-sm peer-focus:-translate-y-6 bg-black ml-6 peer-valid:text-sm peer-valid:-translate-y-6"
            >Full Name</span
          >
        </label>

        <label class="relative">
          <input
            type="text"
            class="w-84 pl-6 py-4 text-md outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
            v-model="args.number"
            required
          />
          <span
            class="absolute left-0 top-4 px-4 text-sm text-gray-400 tracking-wide peer-focus:text-[#5CF8AD] pointer-event-none duration-200 peer-focus:text-sm peer-focus:-translate-y-6 bg-black ml-6 peer-valid:text-sm peer-valid:-translate-y-6"
            >Phone Number</span
          >
        </label>

        <label class="relative">
          <input
            type="email"
            class="w-84 pl-6 py-4 text-md outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
            v-model="args.email"
            required
          />
          <span
            class="absolute left-0 top-4 px-4 text-sm text-gray-400 tracking-wide peer-focus:text-[#5CF8AD] pointer-event-none duration-200 peer-focus:text-sm peer-focus:-translate-y-6 bg-black ml-6 peer-valid:text-sm peer-valid:-translate-y-6"
            >Email</span
          >
        </label>

        <label class="relative">
          <input
            type="text"
            class="w-84 pl-6 py-4 text-md outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
            v-model="args.company"
            required
          />
          <span
            class="absolute left-0 top-4 px-4 text-sm text-gray-400 tracking-wide peer-focus:text-[#5CF8AD] pointer-event-none duration-200 peer-focus:text-sm peer-focus:-translate-y-6 bg-black ml-6 peer-valid:text-sm peer-valid:-translate-y-6"
            >Company</span
          >
        </label>

        <label class="relative">
          <!-- <input
            type="text"
            class="w-84 pl-6 py-4 text-sm outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
            v-model="args.role"
            required
          /> -->

          <select
            class="w-84 pl-6 pr-12 py-4 text-md outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
            name="role"
            id=""
            v-model="args.role"
          >
            <option class="text-[#000]" value="" selected>Select Role</option>
            <option class="text-[#000]" value="CEO">CEO</option>
            <option class="text-[#000]" value="REGULAR">REGULAR</option>
          </select>
          <span
            class="absolute left-0 top-4 px-4 text-sm text-gray-400 tracking-wide peer-focus:text-[#5CF8AD] pointer-event-none duration-200 peer-focus:text-sm peer-focus:-translate-y-6 bg-black ml-6 peer-valid:text-sm peer-valid:-translate-y-6"
            >Role</span
          >
        </label>
      </div>

      <div class="flex flex-col gap-2">
        <button
          @click="$router.push({ name: 'Login' })"
          class="bg-none focus:outline-none"
        >
          Already registered? <span class="text-[#5CF8AD]"> Login</span>
        </button>

        <button
          type="submit"
          class="w-84 py-4 bg-[#62CD9A] rounded-3xl focus:outline-none"
        >
          <span class="text-white">Submit</span>
        </button>
      </div>
    </form>
  </div>
</template>
<!-- :style="{ backgroundImage: `url(${require('/public/mmm.png')})` }" -->

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
const args = ref({ name: "", number: "", email: "", role: "", company: "" });
const loading = ref(false);
const register = async () => {
  loading.value = true;
  try {
    const res = await mutate({
      endpoint: "CreateRegister",
      data: { input: args.value },
      service: "GENERAL",
    });
    if (res) {
      window.localStorage.setItem("data", JSON.stringify(res));
      toast.success("Registered successfully");
      router.push({ name: "Home" });
    }
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};
</script>
