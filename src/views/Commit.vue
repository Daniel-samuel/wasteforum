<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-50">
      <div class="absolute inset-0 bg-gradient-to-br from-[#5CF8AD]/5 to-transparent"></div>
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, rgba(92, 248, 173, 0.03) 2px, transparent 2px); background-size: 60px 60px;"></div>
    </div>
    
    <!-- Header -->
    <div class="relative z-10 pt-8 pb-6 px-6">
      <div class="flex items-center justify-center space-x-3 mb-2">
        <div class="w-10 h-10 bg-gradient-to-r from-[#5CF8AD] to-[#62CD9A] rounded-xl flex items-center justify-center">
          <img src="@/assets/logolaw.svg" class="h-6 w-6" alt="LAWMA Logo" />
        </div>
        <div>
          <h1 class="text-[#5CF8AD] text-2xl font-bold uppercase tracking-wider font-lufga">LAWMA</h1>
          <p class="text-gray-400 text-sm font-medium font-lufga-medium">Stakeholder's Forum</p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 flex-1 flex items-center justify-center px-6 pb-8">
      <div class="w-full max-w-2xl">
        <!-- Page Title -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-white mb-2 font-lufga">Make Your Commitment</h2>
          <p class="text-gray-400 font-lufga-medium">Share your pledge for sustainable waste management</p>
        </div>

        <!-- User Info Card -->
        <div
          v-if="data"
          class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-8"
        >
          <h3 class="text-[#5CF8AD] font-semibold text-lg mb-4">Your Profile</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-[#5CF8AD] rounded-full"></div>
              <div>
                <p class="text-gray-400 text-sm">Name</p>
                <p class="text-white font-medium">{{ data.name }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-[#5CF8AD] rounded-full"></div>
              <div>
                <p class="text-gray-400 text-sm">Email</p>
                <p class="text-white font-medium">{{ data.email }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-[#5CF8AD] rounded-full"></div>
              <div>
                <p class="text-gray-400 text-sm">Phone</p>
                <p class="text-white font-medium">{{ data.number }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-[#5CF8AD] rounded-full"></div>
              <div>
                <p class="text-gray-400 text-sm">Role</p>
                <p class="text-white font-medium">{{ data.role }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Commitment Form -->
        <form @submit.prevent="commit" class="space-y-6">
          <div class="relative group">
            <textarea
              class="w-full p-6 h-64 text-white bg-gray-800/50 border-2 border-gray-700 rounded-2xl outline-none transition-all duration-300 focus:border-[#5CF8AD] focus:bg-gray-800/70 placeholder-transparent peer resize-none"
              v-model="args.message"
              placeholder="Share your commitment..."
              required
            ></textarea>
            <label
              class="absolute left-6 top-6 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:text-[#5CF8AD] peer-focus:text-sm peer-focus:-translate-y-6 peer-valid:text-sm peer-valid:-translate-y-6 peer-valid:text-[#5CF8AD]"
            >
              Your Commitment
            </label>
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5CF8AD]/10 to-[#62CD9A]/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full py-4 bg-gradient-to-r from-[#5CF8AD] to-[#62CD9A] rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#5CF8AD]/25 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#5CF8AD]/20"
            :disabled="loading"
          >
            <span v-if="!loading">Submit Commitment</span>
            <div v-else class="flex items-center justify-center space-x-2">
              <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting...</span>
            </div>
          </button>
        </form>

        <!-- Back to Home -->
        <div class="text-center mt-6">
          <button 
            @click="$router.push({ name: 'Home' })"
            class="text-gray-400 hover:text-[#5CF8AD] transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="relative z-10 text-center pb-6">
      <p class="text-gray-500 text-sm">© 2024 LAWMA. All rights reserved.</p>
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
