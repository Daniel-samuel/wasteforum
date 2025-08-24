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
      <div class="w-full max-w-md">
        <!-- Welcome Section -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-white mb-2 font-lufga">Welcome Back</h2>
          <p class="text-gray-400 font-lufga-medium">Sign in to your account to continue</p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="login" class="space-y-6">
          <!-- Email Field -->
          <div class="relative group">
            <input
              type="email"
              name="email"
              class="w-full px-6 py-4 text-white bg-gray-800/50 border-2 border-gray-700 rounded-2xl outline-none transition-all duration-300 focus:border-[#5CF8AD] focus:bg-gray-800/70 placeholder-transparent peer"
              v-model="args.email"
              placeholder="Email"
              required
            />
            <label
              class="absolute left-6 top-4 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:text-[#5CF8AD] peer-focus:text-sm peer-focus:-translate-y-6 peer-valid:text-sm peer-valid:-translate-y-6 peer-valid:text-[#5CF8AD]"
            >
              Email Address
            </label>
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5CF8AD]/10 to-[#62CD9A]/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          <!-- Phone Number Field -->
          <div class="relative group">
            <input
              type="tel"
              name="number"
              class="w-full px-6 py-4 text-white bg-gray-800/50 border-2 border-gray-700 rounded-2xl outline-none transition-all duration-300 focus:border-[#5CF8AD] focus:bg-gray-800/70 placeholder-transparent peer"
              v-model="args.number"
              placeholder="Phone Number"
              required
            />
            <label
              class="absolute left-6 top-4 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:text-[#5CF8AD] peer-focus:text-sm peer-focus:-translate-y-6 peer-valid:text-sm peer-valid:-translate-y-6 peer-valid:text-[#5CF8AD]"
            >
              Phone Number
            </label>
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5CF8AD]/10 to-[#62CD9A]/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full py-4 bg-gradient-to-r from-[#5CF8AD] to-[#62CD9A] rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#5CF8AD]/25 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#5CF8AD]/20"
            :disabled="loading"
          >
            <span v-if="!loading">Sign In</span>
            <div v-else class="flex items-center justify-center space-x-2">
              <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Signing In...</span>
            </div>
          </button>
        </form>

        <!-- Sign Up Link -->
        <div class="text-center mt-8">
          <p class="text-gray-400">
            Don't have an account? 
            <button 
              @click="$router.push({ name: 'Signup' })"
              class="text-[#5CF8AD] font-semibold hover:underline transition-colors duration-200"
            >
              Sign Up
            </button>
          </p>
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
      toast.success("Logged in successfully");
      router.push({ name: "Home" });
    }
  } catch (e) {
    // toast.error(e.message);
    console.log(e);
  } finally {
    loading.value = false;
  }
};
</script>
