import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    formOptions: {
      subscriptionURL: "https://newslaundry.com/subscription",
      sources: [
        { name: "Youtube", value: "youtube" },
        { name: "Instagram", value: "instagram" },
        { name: "Facebook", value: "facebook" },
        { name: "Twitter", value: "twitter" },
      ],
      campaigns: [
        { name: "NL Hafta", value: "hafta" },
        {
          name: "NL Interview",
          value: "nl_interview",
        },
        {
          name: "NL Tippani",
          value: "tippani",
        },
        { name: "TV Newsance", value: "newsance" },
      ],
      mediums: [
        {
          name: "CPC",
          value: "cpc",
        },
        {
          name: "Banner",
          value: "banner",
        },
        {
          name: "Social",
          value: "social",
        },
        { name: "Email", value: "email" },
      ],
    },
  },
});

export default app;
