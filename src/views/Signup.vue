<template>
  <div
    class="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-50">
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#5CF8AD]/5 to-transparent"
      ></div>
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 25% 25%,
            rgba(92, 248, 173, 0.03) 2px,
            transparent 2px
          );
          background-size: 60px 60px;
        "
      ></div>
    </div>

    <!-- Header -->
    <div class="relative z-10 pt-8 pb-6 px-6">
      <div class="flex items-center justify-center space-x-3 mb-2">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center">
          <img src="@/assets/logolaw.svg" class="h-6 w-6" alt="LAWMA Logo" />
        </div>
        <div>
          <h1
            class="text-[#FE6A01] text-2xl font-bold uppercase tracking-wider font-lufga"
          >
            LAWMA
          </h1>
          <p class="text-gray-400 text-sm font-medium font-lufga-medium">
            Stakeholder's Forum
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div
      class="relative z-10 flex-1 flex items-center justify-center px-6 pb-8"
    >
      <div class="w-full max-w-md">
        <!-- Welcome Section -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-white mb-2 font-lufga">
            Join the Forum
          </h2>
          <p class="text-gray-400 font-lufga-medium">
            Create your account to get started
          </p>
        </div>

        <!-- Registration Form -->
        <form @submit.prevent="register()" class="space-y-5">
          <!-- Full Name Field -->
          <div class="relative group">
            <input
              type="text"
              class="w-full px-6 py-4 text-white bg-gray-800/50 border-2 border-gray-700 rounded-2xl outline-none transition-all duration-300 focus:border-[#FE6A01] focus:bg-gray-800/70 placeholder-transparent peer"
              v-model="args.name"
              placeholder="Full Name"
              required
            />
            <label
              class="absolute left-6 top-4 px-1 bg-gray-800/50 peer-focus:bg-gray-800/70 transition-all duration-300 pointer-events-none peer-focus:text-[#FE6A01] peer-focus:text-sm peer-focus:-translate-y-6 peer-valid:text-sm peer-valid:-translate-y-6 peer-valid:text-[#5CF8AD]"
            >
              Full Name
            </label>
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5CF8AD]/10 to-[#62CD9A]/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"
            ></div>
          </div>

          <!-- Phone Number Field -->
          <div class="relative group">
            <input
              type="tel"
              class="w-full px-6 py-4 text-white bg-gray-800/50 border-2 border-gray-700 rounded-2xl outline-none transition-all duration-300 focus:border-[#FE6A01] focus:bg-gray-800/70 placeholder-transparent peer"
              v-model="args.number"
              placeholder="Phone Number"
              required
            />
            <label
              class="absolute left-6 top-4 px-1 bg-gray-800/50 peer-focus:bg-gray-800/70 transition-all duration-300 pointer-events-none peer-focus:text-[#FE6A01] peer-focus:text-sm peer-focus:-translate-y-6 peer-valid:text-sm peer-valid:-translate-y-6 peer-valid:text-[#5CF8AD]"
            >
              Phone Number
            </label>
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5CF8AD]/10 to-[#62CD9A]/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"
            ></div>
          </div>

          <!-- Email Field -->
          <div class="relative group">
            <input
              type="email"
              class="w-full px-6 py-4 text-white bg-gray-800/50 border-2 border-gray-700 rounded-2xl outline-none transition-all duration-300 focus:border-[#FE6A01] focus:bg-gray-800/70 placeholder-transparent peer"
              v-model="args.email"
              placeholder="Email"
              required
            />
            <label
              class="absolute left-6 top-4 px-1 bg-gray-800/50 peer-focus:bg-gray-800/70 transition-all duration-300 pointer-events-none peer-focus:text-[#FE6A01] peer-focus:text-sm peer-focus:-translate-y-6 peer-valid:text-sm peer-valid:-translate-y-6 peer-valid:text-[#5CF8AD]"
            >
              Email Address
            </label>
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5CF8AD]/10 to-[#62CD9A]/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"
            ></div>
          </div>

          <!-- Company Field -->
          <div class="relative group">
            <input
              type="text"
              class="w-full px-6 py-4 text-white bg-gray-800/50 border-2 border-gray-700 rounded-2xl outline-none transition-all duration-300 focus:border-[#FE6A01] focus:bg-gray-800/70 placeholder-transparent peer"
              v-model="args.company"
              placeholder="Company"
              required
            />
            <label
              class="absolute left-6 top-4 px-1 bg-gray-800/50 peer-focus:bg-gray-800/70 transition-all duration-300 pointer-events-none peer-focus:text-[#FE6A01] peer-focus:text-sm peer-focus:-translate-y-6 peer-valid:text-sm peer-valid:-translate-y-6 peer-valid:text-[#5CF8AD]"
            >
              Company
            </label>
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5CF8AD]/10 to-[#62CD9A]/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"
            ></div>
          </div>

          <!-- Role Field -->
          <div class="relative group">
            <input
              type="text"
              class="w-full px-6 py-4 text-white bg-gray-800/50 border-2 border-gray-700 rounded-2xl outline-none transition-all duration-300 focus:border-[#FE6A01] focus:bg-gray-800/70 placeholder-transparent peer"
              v-model="args.role"
              placeholder="Company"
              required
            />
            <!-- <select
              class="w-full px-6 py-4 text-white bg-gray-800/50 border-2 border-gray-700 rounded-2xl outline-none transition-all duration-300 focus:border-[#5CF8AD] focus:bg-gray-800/70 appearance-none cursor-pointer"
              v-model="args.role"
              required
            >
              <option value="" disabled selected class="text-gray-500 bg-gray-800">Select Role</option>
              <option value="CEO" class="text-white bg-gray-800">CEO</option>
              <option value="REGULAR" class="text-white bg-gray-800">REGULAR</option>
            </select> -->
            <label
              class="absolute left-6 top-4 px-1 bg-gray-800/50 peer-focus:bg-gray-800/70 transition-all duration-300 pointer-events-none peer-focus:text-[#FE6A01] peer-focus:text-sm peer-focus:-translate-y-6 peer-valid:text-sm peer-valid:-translate-y-6 peer-valid:text-[#5CF8AD]"
            >
              Role
            </label>
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5CF8AD]/10 to-[#62CD9A]/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"
            ></div>
            <div
              class="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-4 bg-gradient-to-r from-[#FE6A01] to-[#62CD9A] rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#5CF8AD]/25 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#5CF8AD]/20 mt-6"
            :disabled="loading"
          >
            <span v-if="!loading">Create Account</span>
            <div v-else class="flex items-center justify-center space-x-2">
              <div
                class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
              ></div>
              <span>Creating Account...</span>
            </div>
          </button>
        </form>

        <!-- Sign In Link -->
        <div class="text-center mt-6">
          <p class="text-gray-400">
            Already have an account?
            <button
              @click="$router.push({ name: 'Login' })"
              class="text-[#FE6A01] font-semibold hover:underline transition-colors duration-200"
            >
              Sign In
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
    if (args.value.role.length === 0) {
      throw new Error("Role is required");
    }
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
    toast.error(e.message);
    console.log(e);
  } finally {
    loading.value = false;
  }
};
</script>
