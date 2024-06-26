<template>
  <div class="relative">
    <NuxtImg
      src="/footer-left.svg"
      alt="Blur"
      class="h-full absolute left-0 w-[400px]"
    />
    <NuxtImg
      src="/footer-pattern-1.svg"
      alt="Blur"
      class="h-full absolute left-0 w-32 lg:w-[400px]"
    />
    <NuxtImg
      src="/footer-right.svg"
      alt="Blur"
      class="h-full absolute right-0 w-[400px]"
    />
    <NuxtImg
      src="/footer-pattern-1.svg"
      alt="Blur"
      class="h-full absolute right-0 w-32 lg:w-[400px]"
    />
    <div class="w-full bg-rmblue-950 text-white flex flex-col gap-4 py-8">
      <div class="flex flex-col gap-4 items-center container">
        <div class="flex flex-col gap-2 text-center">
          <a class="flex" href="/">
            <NuxtImg
              src="/RecruitMateLogoWhite.png"
              alt="RecruitMate Logo"
              class="w-48"
            />
          </a>
        </div>
        <ul class="flex gap-4 items-center text-center text-xs lg:text-base">
          <li><a href="/">Our Company</a></li>
          <li><a href="/">Guides</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/">Help Center</a></li>
          <a href="mailto:hi@recruitmateai.com">Contact Us</a>
        </ul>
        <ul class="flex gap-4 items-center text-center text-xs lg:text-base">
          <li>
            <a href="/">
              <NuxtImg src="/Facebook.svg" alt="Facebook" class="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="/">
              <NuxtImg src="/Pinterest.svg" alt="Pinterest" class="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="/"
              ><NuxtImg src="/Youtube.svg" alt="Youtube" class="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="/"
              ><NuxtImg src="/Instagram.svg" alt="Instagram" class="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="/"><NuxtImg src="/X.svg" alt="X" class="h-6 w-6" /> </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div
    class="container flex items-center justify-center bg-white text-rmblue-950 py-4 text-xs text-center"
  >
    <p>RecruitMate Copyright 2024. All Rights Reserved</p>
  </div>
</template>
