<template>
  <div class="h-screen w-screen bg-black flex flec-col overflow-y-auto">
    <div
      class="w-full space-y-10 px-10 py-10 block h-full md:flex md:w-full md:h-full md:flex-col"
    >
      <div class="flex items-center justify-between">
        <p>List</p>

        <button
          @click="downloadExcel"
          type="submit"
          class="w-84 py-4 bg-[#62CD9A] rounded-3xl focus:outline-none"
        >
          <span class="text-white">Download report</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
        <!-- <div
            class="bg-[#5CF8AD] text-black h-28 w-full rounded-2xl px-4 flex flex-col justify-center md:w-"
          >
            <p>Name :</p>
            <p>Email</p>
            <p>Number</p>
            <p>Role</p>
          </div> -->

        <div
          v-for="(all, i) in getAll"
          :key="i"
          class="bg-[#5CF8AD] text-black h-40 pt-5 gap-4 w-full rounded-2xl px-4 flex-col justify-center"
        >
          <p>Name: {{ all.name }}</p>
          <p>Company: {{ all.company }}</p>
          <p>Email: {{ all.email }}</p>
          <p>Number: {{ all.number }}</p>
          <p>Role: {{ all.role }}</p>
        </div>
      </div>
    </div>
    <LoaderVue v-if="loading" />
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import * as XLSX from "xlsx/xlsx.mjs";

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
const getAll = computed(() => store.getAll);

const fetchRole = async () => {
  loading.value = true;
  try {
    const res = await query({
      endpoint: "GetRegisterByRole",
      payload: { role: "CEO" },
      service: "BOOKKEEPING",
      storeKey: "all",
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

function downloadExcel() {
  // Create a new workbook and add a worksheet
  const data = getAll.value.map((item) => {
    delete item.__typename;
    delete item.id;
    return item;
  });
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Append the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Generate a binary string representing the workbook
  const excelData = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // Create a Blob from the workbook data
  const blob = new Blob([excelData], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create a link element
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "report.xlsx";

  // Append the link to the body temporarily and click it
  document.body.appendChild(link);
  link.click();

  // Remove the link from the DOM after download
  document.body.removeChild(link);

  // Clean up by revoking the URL object
  setTimeout(() => URL.revokeObjectURL(link.href), 100);
}
onMounted(async () => {
  await fetchRole();
});
</script>
