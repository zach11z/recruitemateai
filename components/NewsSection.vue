<template>
  <div class="w-full pb-16 flex flex-col gap-16">
    <div class="flex flex-col gap-2 text-center container">
      <h2 class="font-semibold text-2xl md:text-3xl lg:text-4xl font-sans">
        <span>News & </span>
        <span class="text-rmblue-700">Blogs</span>
      </h2>
      <p class="max-w-xl mx-auto font-serif">
        We take care of sourcing so you can focus on your candidate experience
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 container max-w-4xl gap-16">
      <a
        href="/"
        class="bg-gradient-to-br from-rmblue-500 to-rmblue-300 p-4 flex flex-col items-center hover:from-rmblue-500/80 hover:to-rmblue-300/80 justify-center rounded-2xl w-full hover:scale-[102%] ease-in-out delay-150 duration-200 transform transition-all cursor-pointer max-h-fit"
      >
        <div class="rounded-t-xl relative flex w-full">
          <NuxtImg
            src="/blog.png"
            alt="Blog Cover"
            class="w-full rounded-t-xl max-h-[45vh] lg:max-h-full object-cover"
          />
          <div
            class="absolute bottom-0 pt-3 pb-1 px-2 text-xs rounded-t-lg bg-white"
          >
            <span
              class="text-xs px-3 py-2 text-rmblue-700 bg-rmblue-100 w-fit rounded-lg"
              >Talent Sourcing</span
            >
          </div>
        </div>
        <div class="bg-white p-4 rounded-b-xl flex flex-col gap-2 w-full">
          <h3 class="text-xl font-semibold text-rmblue-950">
            How to grow a talent pool and engage candidates
          </h3>
          <div class="flex items-center justify-between mt-4">
            <div
              class="flex items-center text-sm gap-1 text-rmblue-600 font-medium"
            >
              <p>Read More</p>
              <NuxtImg
                src="/Arrow-Left-Blue.svg"
                alt="Arrow Left"
                class="h-5 w-5"
              />
            </div>
            <div class="flex items-center text-sm gap-1 text-rmblue-950">
              <NuxtImg
                src="/Reading-Time.svg"
                alt="Reading Time"
                class="h-5 w-5"
              />
              <p>8 mins</p>
            </div>
          </div>
        </div>
      </a>
      <ul class="flex flex-col divide-y border-t border-b h-fit">
        <li
          v-for="item in blogs"
          :key="item.id"
          class="flex gap-4 items-start w-full px-4 py-4 cursor-pointer hover:bg-rmblue-100/50 transition ease-in-out delay-150"
        >
          <a class="flex flex-col gap-2 w-full" href="/">
            <p
              class="text-xs px-3 py-2 text-rmblue-700 bg-rmblue-100 w-fit rounded-lg"
            >
              Category
            </p>
            <div class="flex gap-2 flex-1 w-full justify-between">
              <h3 class="text-lg font-medium text-rmblue-950">
                {{ item.title }}
              </h3>
              <NuxtImg
                src="/Arrow-Up-Right-Blue.svg"
                alt="Arrow Up Right"
                class="h-5 w-5"
              />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const blogs = [
  {
    index: "01",
    title: "Top recruiting KPIs - What metrics to measure",
    description:
      "Ditch writing manual emails. Dedicate your time to what matters. Hit reply and book those 1 on 1s.",
  },
  {
    index: "02",
    title: "How to optimize your recruitment funnel",
    description:
      "Label your campaigns. Organize your campaigns with a proper name. Have a bunch of engineer postings? You can create subfolders like you wanted to.",
  },
  {
    index: "03",
    title: "How to analyze, measure, and improve yourquality of hire",
    description:
      "Create a template. What is the main point you want to get across? Don’t want to write – we can write it for you – using AI. Personalize and send to your contacts.",
  },
  {
    index: "04",
    title: "11 expert predictions for the state of recruitment",
    description:
      "Respond the way you want. Certain campaigns take longer? Schedule longer auto follow ups. You prioritise what works best for you. Let’s get you closer to those 1 on 1s.",
  },
];
</script>
