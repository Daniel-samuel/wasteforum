<template>
  <div class="h-screen w-screen bg-black">
    <div
      class="w-full space-y-10 px-10 py-10 block h-full md:flex md:w-full md:h-full md:flex-col md:justify-center md:items-center"
    >
      <div class="flex items-center justify-center w-full space-x-4">
        <img src="@/assets/logolaw.svg" class="h-6 w-6" alt="" />
        <p class="text-[#5CF8AD] text-2xl font-medium">Lawma</p>
      </div>

      <div
        class="flex flex-col justify-center items-center h-97 w-full space-y-10 md:w-96 md:justify-center"
      >
        <div
          class="text-white h-28 w-full rounded-2xl px-4 flex flex-col gap-3 justify-center"
        >
          <P>Name :</P>
          <p>Email:</p>
          <p>Number:</p>
          <p>Role:</p>
        </div>
        <div class="w-full items-center flex flex-col">
          <label class="relative">
            <input
              type="text"
              class="w-84 pl-6 h-60 text-md outline-none border-2 border-gray-400 rounded-3xl hover:border-gray-600 durarion -200 peer focus:border-[#5CF8AD] bg-inherit"
            />
            <span
              class="absolute left-0 top-4 px-4 text-md text-gray-400 tracking-wide peer-focus:text-[#5CF8AD] pointer-event-none duration-200 peer-focus:text-sm peer-focus:-translate-y-6 bg-black ml-6"
              >Commitment</span
            >
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
