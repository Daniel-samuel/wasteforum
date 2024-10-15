<template>
  <div class="h-screen w-screen bg-black bg-center">
    <div class="h-full w-full py-20 flex flex-col items-center space-y-16">
      <div class="text-white">
        <div class="flex w-full space-x-4">
          <img src="@/assets/logolaw.svg" class="h-6 w-6" alt="" />
          <p class="text-[#5CF8AD] text-2xl font-medium">Lawma</p>
        </div>

        <p>Keeping lagos clean</p>
      </div>
      <div class="w-full items-center flex flex-col space-y-6">
        <label class="relative">
          <input
            type="text"
            class="w-84 pl-6 py-4 text-md outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
          />
          <span
            class="absolute left-0 top-4 px-4 text-md text-gray-400 tracking-wide peer-focus:text-[#5CF8AD] pointer-event-none duration-200 peer-focus:text-sm peer-focus:-translate-y-6 bg-black ml-6"
            >Full Name</span
          >
        </label>

        <label class="relative">
          <input
            type="text"
            class="w-84 pl-6 py-4 text-md outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
          />
          <span
            class="absolute left-0 top-4 px-4 text-md text-gray-400 tracking-wide peer-focus:text-[#5CF8AD] pointer-event-none duration-200 peer-focus:text-sm peer-focus:-translate-y-6 bg-black ml-6"
            >Number</span
          >
        </label>
      </div>

      <button class="w-84 py-4 bg-[#62CD9A] rounded-3xl">
        <span class="text-white">Submit</span>
      </button>
    </div>
  </div>
</template>
