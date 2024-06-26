<template>
  <div class="w-full bg-white py-16 lg:py-24 flex flex-col gap-16">
    <div class="flex flex-col gap-16 items-center container">
      <div class="flex flex-col gap-2 text-center">
        <h2 class="font-bold text-2xl md:text-3xl lg:text-5xl">
          <span class="text-rmblue-950">Your Loyal Companion In </span>
          <span class="text-rmblue-700">Talent Acquisition</span>
        </h2>
        <p>
          We take care of sourcing so you can focus on your candidate experience
        </p>
      </div>
      <div class="w-full grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div
          class="order-last lg:order-first flex col-span-2 w-full items-center justify-center"
        >
          <NuxtImg
            src="/Rocket-Man.gif"
            alt="Rocket Man"
            class="w-full object-contain max-w-96 lg:max-w-full scale-x-[-1]"
          />
        </div>
        <div class="flex flex-col gap-8 col-span-3">
          <ul class="flex flex-col gap-2 max-w-4xl mx-auto">
            <li
              v-for="item in features"
              :key="item.id"
              class="flex gap-4 items-start max-w-xl hover:bg-rmblue-100/50 px-4 py-4 transition ease-in-out delay-150 rounded-xl"
            >
              <p
                class="w-4 h-4 bg-rmblue-100 rounded-full flex items-center justify-center text-rmblue-800/40 p-4 font-bold"
              >
                {{ item.index }}
              </p>
              <div class="flex flex-col gap-2">
                <h3 class="text-xl font-medium text-rmblue-950">
                  {{ item.title }}
                </h3>
                <p class="text-sm">
                  {{ item.description }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    index: "01",
    title: "Your Email Campaign. AI Enabled.",
    description:
      "Ditch writing manual emails. Dedicate your time to what matters. Hit reply and book those 1 on 1s.",
  },
  {
    index: "02",
    title: "Campaign Manager",
    description:
      "Label your campaigns. Organize your campaigns with a proper name. Have a bunch of engineer postings? You can create subfolders like you wanted to.",
  },
  {
    index: "03",
    title: "Email Block",
    description:
      "Create a template. What is the main point you want to get across? Don’t want to write – we can write it for you – using AI. Personalize and send to your contacts.",
  },
  {
    index: "04",
    title: "Auto response",
    description:
      "Respond the way you want. Certain campaigns take longer? Schedule longer auto follow ups. You prioritise what works best for you. Let’s get you closer to those 1 on 1s.",
  },
];
</script>
