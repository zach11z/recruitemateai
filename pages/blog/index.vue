<template>
  <main class="bg-hero h-full bg-no-repeat">
    <SiteHeader></SiteHeader>
    <div class="container mt-16 mb-32 max-w-6xl mx-auto">
      <ContentList path="/blog" v-slot="{ list }">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(article, index) in list"
            :key="article._path"
            :class="index === 0 ? 'lg:col-span-3' : ''"
          >
            <a
              :href="article._path"
              :class="
                index === 0
                ? 'group w-full flex lg:flex-row flex-col rounded-xl lg:rounded-xl cursor-pointer transition ease-in-out delay-150 hover:bg-[#0094FF] hover:text-white'
                : 'group w-full flex flex-col rounded-xl cursor-pointer hover:bg-[#0094FF] hover:text-white transition ease-in-out delay-150'"              "
            >
              <NuxtImg
                :src="article.img"
                :alt="article.title"
               :class="
                index === 0
                ? 'object-cover w-full lg:max-w-[55%] rounded-xl aspect-video'
                : 'object-cover w-full max-h-60 rounded-xl aspect-video'"              "
              />
              <div class="flex flex-col gap-4 md:px-4 py-3 lg:flex-1">
                <div class="flex flex-col gap-2">
                <h2 
                :class="
                index === 0
                ? 'text-2xl lg:text-4xl font-bold'
                : 'text-2xl font-bold'">
                  {{ article.title }}
                </h2>
                <p>{{ article.description }}</p>
              </div>
                <p class="text-slate-500 group-hover:text-white transition ease-in-out delay-150">{{ formatDate(article.date) }}</p>
              </div>
            </a>
          </div>
        </div>
      </ContentList>
    </div>
    <SubscribeSection></SubscribeSection>
    <SiteFooter></SiteFooter>
  </main>
</template>

<script setup>
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
</script>
