<template>
  <div class="h-screen w-screen bg-black flex flec-col overflow-y-auto">
    <div
      class="w-full space-y-10 px-10 py-10 block h-full md:flex md:w-full md:h-full md:flex-row"
    >
      <div>
        <p>List</p>
      </div>

      <div class="flex flex-col gap-y-4 md:flex md:w-full md:h-full md:flex">
        <div
          class="bg-[#5CF8AD] text-black h-28 w-full rounded-2xl px-4 flex flex-col justify-center md:w-"
        >
          <p>Name :</p>
          <p>Email</p>
          <p>Number</p>
          <p>Role</p>
        </div>

        <div
          v-for="(role, i) in getRoles"
          :key="i"
          class="bg-[#5CF8AD] text-black h-28 w-full rounded-2xl px-4 flex flex-col justify-center"
        >
          <p>Name: {{ role.name }}</p>
          <p>Email: {{ role.email }}</p>
          <p>Number: {{ role.number }}</p>
          <p>Role: {{ role.role }}</p>
        </div>
      </div>
    </div>
    <LoaderVue v-if="loading" />
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";

const data = ref({});
import { useDataStore } from "@/stores/data";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import LoaderVue from "./Loader.vue";

const toast = useToast();
const router = useRouter();
const store = useDataStore();
const loading = ref(false);
const { query } = store;
const args = ref({ message: "", register: "" });
const getRoles = computed(() => store.getRoles);

const fetchRole = async () => {
  loading.value = true;
  try {
    const res = await query({
      endpoint: "GetRegisterByRole",
      payload: { role: "CEO" },
      service: "GENERAL",
      storeKey: "roles",
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};
onMounted(async () => {
  await fetchRole();
});
</script>
