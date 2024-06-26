<template>
  <header class="w-full lg:pt-8">
    <div class="container">
      <div
        class="flex justify-center lg:justify-between items-center gap-4 lg:bg-white/60 py-3 lg:px-4 lg:rounded-xl lg:shadow-xl lg:shadow-blue-100/50 max-w-[80%] mx-auto"
      >
        <a class="flex cursor-pointer" href="/">
          <NuxtImg
            src="/RecruitMateLogo.svg"
            alt="RecruitMate Logo"
            class="w-40"
          />
        </a>
        <div class="hidden lg:flex items-center gap-8">
          <a href="/">
            <button
              class="px-5 py-3 text-white rounded-md bg-gradient-to-br from-rmblue-600 to-rmblue-400"
            >
              Sign Up Free
            </button>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>
