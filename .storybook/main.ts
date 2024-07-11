import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {
    autodocs: true
  }
};
export default config;
