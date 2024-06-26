<template>
  <main class="bg-hero h-full bg-no-repeat">
    <SiteHeader></SiteHeader>
    <div class="container mt-12 mb-32 max-w-5xl mx-auto">
      <ContentDoc v-slot="{ doc }">
        <article class="flex flex-col gap-8">
          <NuxtImg
            :src="doc.img"
            :alt="doc.title"
            class="object-cover w-full max-h-[45%] rounded-xl aspect-video"
          />
          <h1 class="text-4xl font-bold">{{ doc.title }}</h1>
          <ContentRenderer class="prose" :value="doc" />
        </article>
      </ContentDoc>
    </div>
    <SubscribeSection></SubscribeSection>
    <SiteFooter></SiteFooter>
  </main>
</template>
