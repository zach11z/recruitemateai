<template>
  <main
    class="py-24 lg:py-32 flex flex-col gap-12 items-center text-center container relative"
  >
    <div class="flex flex-col gap-2 text-2xl md:text-3xl lg:text-5xl relative">
      <p class="absolute -top-10 -left-0 md:-left-6 lg:-left-8 text-3xl">✨</p>
      <h1>Reach 10x More Candidates</h1>
      <h2 class="font-bold text-3xl md:text-4xl lg:text-6xl">
        <span class="text-rmblue-700">Email Campaigns </span>
        <span class="text-rmblue-950 relative"
          >Made Easy
          <span
            ><NuxtImg
              src="/Rocket.svg"
              alt="Search"
              class="inline-block lg:ml-2 lg:w-12" /></span
        ></span>
      </h2>
    </div>
    <NuxtImg
      src="/search.svg"
      alt="Search"
      class="hidden lg:flex w-16 absolute top-44 left-12"
    />
    <NuxtImg
      src="/find-job.svg"
      alt="Find Job"
      class="hidden lg:flex w-60 absolute bottom-24 left-12 -rotate-12"
    />
    <div class="flex flex-col gap-4 items-center">
      <p class="max-w-xl">
        Manage, automate and scale your email campaigns. Speak with candidates
        like never before. Dedicate folders, dictate automated responses,
        personalize using AI. Your new favorite recruiter tool.
      </p>

      <ul class="flex gap-8 items-center font-semibold">
        <li class="flex gap-2 items-center">
          <span class="w-2 h-2 bg-rmblue-700 inline-block rotate-45"></span
          >14-day free trial
        </li>
        <li class="flex gap-2 items-center">
          <span class="w-2 h-2 bg-rmblue-700 inline-block rotate-45"></span>No
          card required
        </li>
      </ul>
    </div>
    <NuxtImg
      src="/michael-darwin.svg"
      alt="Michael Darwin"
      class="hidden lg:flex w-56 absolute bottom-24 right-8 rotate-12"
    />

    <div class="flex flex-col gap-6 w-full max-w-5xl items-center">
      <div
        :class="[
          'bg-white w-full max-w-lg flex items-center justify-between rounded-lg z-50 shadow-xl shadow-blue-100/50',
          { 'shadow-blue-200': isFocused },
        ]"
      >
        <input
          ref="inputRef"
          type="text"
          placeholder="Email Address"
          class="py-2 px-3 w-full focus:outline-none"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <button class="bg-rmblue-700 text-white px-8 py-3 rounded-md m-1">
          Join
        </button>
      </div>
      <p class="font-medium text-lg">Hurry! Only a few spots remain</p>
    </div>
  </main>
  <div class="bg-rmblue-950 py-8">
    <div class="flex items-center justify-evenly container gap-2 max-w-5xl">
      <NuxtImg src="/OpenAI.svg" alt="OpenAI Logo" class="w-16 lg:w-28" />
      <NuxtImg src="/Calendly.svg" alt="Calendly Logo" class="w-16 lg:w-28" />
      <NuxtImg src="/AWS.svg" alt="AWS Logo" class="w-8 lg:w-[3.6rem]" />
      <NuxtImg src="/Stripe.svg" alt="Stripe Logo" class="w-8 lg:w-16" />
      <NuxtImg src="/Linkedin.svg" alt="Linkedin Logo" class="w-16 lg:w-28" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const isFocused = ref(false);
const inputRef = ref(null);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

onMounted(() => {
  inputRef.value.addEventListener("focus", handleFocus);
  inputRef.value.addEventListener("blur", handleBlur);
});

onUnmounted(() => {
  inputRef.value.removeEventListener("focus", handleFocus);
  inputRef.value.removeEventListener("blur", handleBlur);
});
</script>
