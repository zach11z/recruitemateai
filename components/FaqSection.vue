<template>
  <div class="bg-features h-full bg-no-repeat bg-left-top">
    <div class="w-full py-16 lg:py-24 flex flex-col gap-16 container relative">
      <div class="flex flex-col gap-2 text-center">
        <p class="font-serif">Questions?</p>
        <h2 class="font-bold text-2xl md:text-3xl lg:text-4xl">
          <span>We’ve Got </span>
          <span class="text-rmblue-700">You Covered</span>
        </h2>
      </div>

      <div class="flex flex-col gap-4 items-center justify-center">
        <ul
          class="flex flex-col w-full divide-y border-t border-b max-w-4xl mx-auto"
        >
          <li
            v-for="(item, index) in visibleFaq"
            :key="item.index"
            :class="[
              'flex flex-col items-start px-4 py-6 cursor-pointer hover:bg-rmblue-100/50 transition ease-in-out delay-150',
              {
                'bg-rmwhite-100': activeIndexes.includes(index),
              },
            ]"
            @click="toggleAccordion(index)"
          >
            <div
              class="w-full text-left flex justify-between items-center focus:outline-none gap-3"
            >
              <h3 class="text-xl font-medium text-rmblue-950 flex-1">
                {{ item.title }}
              </h3>
              <div class="flex-shrink-0 h-5 w-5">
                <div v-if="activeIndexes.includes(index)">
                  <NuxtImg src="/Minus.svg" alt="Collapse" class="h-5 w-5" />
                </div>
                <div v-else>
                  <NuxtImg src="/Plus.svg" alt="Expand" class="h-5 w-5" />
                </div>
              </div>
            </div>
            <div v-if="activeIndexes.includes(index)" class="mt-4 text-lg">
              {{ item.description }}
            </div>
          </li>
        </ul>
        <button
          class="px-10 py-3 text-white rounded-md bg-gradient-to-br from-rmblue-600 to-rmblue-400 mt-6"
          @click="toggleAll"
        >
          {{ toggleLabel() }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faq = ref([
  {
    index: "01",
    title: "What is RecruitMate?",
    description:
      "RecruitMate is a state-of-the-art AI-powered lead generation software designed specifically for recruitment agencies. Our platform streamlines the recruitment process by providing a single platform for all your needs, from candidate sourcing to interview scheduling.",
  },
  {
    index: "02",
    title: "How does RecruitMate utilize AI in the recruitment process?",
    description:
      "Our software employs advanced AI algorithms to ensure accurate candidate listings, automating email responses using Natural Language Processing, and facilitating auto meeting scheduling with candidates. This enhances efficiency and ensures you connect with the right candidates faster.",
  },
  {
    index: "03",
    title: "Can RecruitMate integrate with our existing HR system?",
    description:
      "Yes, RecruitMate is designed to seamlessly integrate with your existing HR systems e.g., CRM, ensuring a smooth transition and continuity in your recruitment processes. Our goal is to enhance your workflow, not interrupt it.",
  },
  {
    index: "04",
    title: "How does the auto email response feature work?",
    description:
      "Our auto email response feature utilizes NLP to provide timely and personalized responses to candidate inquiries, ensuring that no candidate feels neglected and improving engagement throughout the recruitment process.",
  },
  {
    index: "05",
    title:
      "What makes the candidate listings provided by RecruitMate more accurate?",
    description:
      "Our platform employs enhanced AI algorithms that understand the nuances of recruitment, ensuring that the listings you receive are not just a match based on keywords but are genuinely fit for the role based on a comprehensive understanding of the job requirements and candidate profiles.",
  },
  {
    index: "06",
    title:
      "How does RecruitMate help in scheduling interviews with candidates?",
    description:
      "Our auto meeting scheduling feature takes the hassle out of coordinating interviews, automatically finding suitable time slots and sending out invites, allowing you to focus on preparing for the interview itself.",
  },
  {
    index: "07",
    title:
      "Where can I find training materials or user guides for RecruitMate?",
    description:
      "We offer a comprehensive resource library on our website, including tutorials, user guides, and FAQs to help you get started and make the most out of RecruitMate. Our customer support team is also available to assist you with any queries.",
  },
  {
    index: "08",
    title: "What kind of customer support does RecruitMate offer?",
    description:
      "We pride ourselves on our responsive customer support. You can reach out to us via email, phone, or through our website’s contact form. Our dedicated team is here to assist you with any questions or issues you might have.",
  },
  {
    index: "09",
    title: "How is RecruitMate priced?",
    description:
      "Our pricing is structured to be flexible and accommodate the diverse needs of recruitment agencies. For detailed information on our pricing plans and to find the one that best suits your needs, please visit our Pricing Page or contact our sales team.",
  },
  {
    index: "10",
    title: "Do you offer a free trial for RecruitMate?",
    description:
      "Yes, we offer a 7-day free trial that gives you full access to all the features of RecruitMate. This allows you to see firsthand how our software can transform your recruitment process. To start your free trial, click here.",
  },
]);

const activeIndexes = ref([0]);
const showAll = ref(false);

const visibleFaq = computed(() => {
  return showAll.value ? faq.value : faq.value.slice(0, 3);
});

function toggleAccordion(index) {
  if (activeIndexes.value.includes(index)) {
    activeIndexes.value = activeIndexes.value.filter((i) => i !== index);
  } else {
    activeIndexes.value.push(index);
  }
}

const toggleLabel = () => (showAll.value ? "Hide" : "Show More");

function toggleAll() {
  showAll.value = !showAll.value;
}
</script>
