<template>
  <div class="w-full bg-rmblue-950 text-white">
    <div class="w-full py-16 md:py-24 flex flex-col gap-16 container">
      <div class="flex flex-col gap-16 items-center">
        <div class="flex flex-col gap-2 text-center">
          <h2 class="font-bold text-2xl md:text-3xl lg:text-4xl">
            What Our Customers Say
          </h2>
          <p class="max-w-xl mx-auto">
            Meet the conversational recruiting software that automates the work
            your teams.
          </p>
        </div>
      </div>
      <div
        class="flex items-center justify-center max-w-4xl mx-auto md:pb-12 w-full"
      >
        <div
          class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full"
        >
          <button
            @click="previousTestimonial"
            :disabled="isFirstTestimonial"
            class="focus:outline-none hidden md:flex -mr-8 flex-shrink-0"
          >
            <NuxtImg
              src="/Arrow-Left.svg"
              alt="Arrow Left"
              :class="isFirstTestimonial ? 'h-10 w-10 opacity-40' : 'h-10 w-10'"
            />
          </button>
          <div class="hidden md:flex relative mx-4 md:mx-0">
            <div
              class="bg-white rounded-xl px-8 md:px-12 pt-12 pb-8 flex flex-col gap-4 relative text-rmblue-950 min-h-[360px] md:min-h-64 z-50"
            >
              <NuxtImg
                src="/quote.svg"
                alt="Quotation mark"
                class="absolute h-12 top-4 left-4"
              />
              <p class="text-lg">
                {{ testimonials[currentTestimonial].text }}
              </p>
              <div class="flex gap-3 items-center">
                <NuxtImg src="/avatar.png" alt="Avatar" class="h-12 w-12" />
                <div class="flex flex-col gap-0">
                  <p class="font-semibold text-rmblue-950">
                    {{ testimonials[currentTestimonial].name }}
                  </p>
                  <p class="text-sm">
                    {{ testimonials[currentTestimonial].title }}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="bg-rmblue-300 rounded-xl min-h-64 absolute inset-0 transform translate-x-4 translate-y-4 md:translate-x-10 md:translate-y-10 z-10"
            ></div>
            <div
              class="bg-white/30 border border-white rounded-xl min-h-64 absolute inset-0 transform translate-x-2 translate-y-2 md:translate-x-6 md:translate-y-6 z-20 backdrop-blur-2xl"
            ></div>
          </div>
          <div class="flex md:hidden flex-col gap-4 mx-auto px-4">
            <div class="flex relative mx-4">
              <div class="w-full flex z-20 h-80">
                <NuxtImg
                  src="/avatar-mobile.png"
                  alt="Avatar"
                  class="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div
                class="bg-white/10 border border-white rounded-xl h-80 w-full absolute inset-0 transform -translate-x-4 scale-95 z-10 backdrop-blur-2xl"
              ></div>
              <div
                class="bg-white/30 border border-white rounded-xl h-80 w-full absolute inset-0 transform -translate-x-8 scale-90 z-0 backdrop-blur-2xl"
              ></div>
            </div>

            <div class="flex flex-col gap-5 mx-4 mt-4">
              <NuxtImg
                src="/quote-mobile.svg"
                alt="Quotation Mark"
                class="w-8"
              />
              <p class="text-sm h-28 font-serif text-rmgray-100">
                {{ testimonials[currentTestimonial].text }}
              </p>
            </div>
          </div>
          <button
            @click="nextTestimonial"
            :disabled="isLastTestimonial"
            class="focus:outline-none hidden md:flex flex-shrink-0"
          >
            <NuxtImg
              src="/Arrow-Right.svg"
              alt="Arrow Left"
              :class="isLastTestimonial ? 'h-10 w-10 opacity-40' : 'h-10 w-10'"
            />
          </button>
          <div class="md:hidden flex items-center gap-2 mx-4">
            <button
              @click="previousTestimonial"
              :disabled="isFirstTestimonial"
              class="focus:outline-none flex-shrink-0"
            >
              <NuxtImg
                src="/Arrow-Bubble-Left.svg"
                alt="Arrow Left"
                :class="
                  isFirstTestimonial ? 'h-14 w-14 opacity-40' : 'h-14 w-14'
                "
              />
            </button>

            <button
              @click="nextTestimonial"
              :disabled="isLastTestimonial"
              class="focus:outline-none flex-shrink-0"
            >
              <NuxtImg
                src="/Arrow-Bubble-Right.svg"
                alt="Arrow Right"
                :class="
                  isLastTestimonial ? 'h-14 w-14 opacity-40' : 'h-14 w-14'
                "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const testimonials = ref([
  {
    text: "“There are a lot of companies in our situation — they're on the cusp of growth, they're battling for talent, and they just don't have the tools to automate processes to help them grow. Recruitmate is helping us adapt as we grow.”",
    name: "Nisha Solomon",
    title: "UI/UX Designer",
  },
  {
    text: "“Recruitmate has streamlined our hiring process, saving us countless hours each week. It's a game-changer for our HR team.”",
    name: "John Doe",
    title: "HR Manager",
  },
  {
    text: "“With Recruitmate, we've been able to focus more on finding the right talent rather than getting bogged down in administrative tasks.”",
    name: "Jane Smith",
    title: "Recruiter",
  },
]);

const currentTestimonial = ref(0);

function previousTestimonial() {
  currentTestimonial.value =
    (currentTestimonial.value - 1 + testimonials.value.length) %
    testimonials.value.length;
}

function nextTestimonial() {
  currentTestimonial.value =
    (currentTestimonial.value + 1) % testimonials.value.length;
}

const isFirstTestimonial = computed(() => currentTestimonial.value === 0);
const isLastTestimonial = computed(
  () => currentTestimonial.value === testimonials.value.length - 1
);
</script>
