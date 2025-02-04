import React from "react";
import { Story } from "@storybook/react";
import { Tag } from "../ui/Tag";
import { toStr } from "./utils/toStr";

export default {
  title: "Tag",
  argTypes: {
    onChange: { action: "changed" },
  },
};

const Icon = () => {
  return (
    <svg width="12" height="9" version="1.1" viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect x="9.8296e-6" y="-1.8681e-6" width="50" height="30" fill="#fff" />
        <path d="m-7e-6 -5e-7v2.3321l12.779 7.6678 3.8871-1e-4zm22 0v11.999h-22v5.9961h22v12.005h5.9998v-12.005h22v-5.9961h-22v-11.999zm24.112 0-16.113 9.6675v0.33232h3.3336l16.666-9.9998zm-29.488 20-16.625 10h3.8873l16.112-9.668v-0.33203zm16.709 0 16.666 10v-2.3323l-12.777-7.6677z" fill="#c8102e" />
        <path d="m5.85-5e-7 14.15 8.5002v-8.5002zm24.15 0v8.5016l14.17-8.5016zm-30 3.4985v6.5006l10.836 7.55e-4zm50 2.1e-4 -10.835 6.5011h10.835zm-50 16.501v6.5021l10.835-6.5021zm39.169 0 10.831 6.576v-6.576zm-9.1689 1.4986v8.5014h14.17zm-10 3.99e-4 -14.169 8.501h14.169z" fill="#012169" />
      </g>
    </svg>
  );
};

const TheTag: Story = ({ tag = 'interview' }) => {
  return (
    <>
      <Tag>{tag}</Tag>
      <Tag>
        <Icon />
      </Tag>
    </>
  );
};

export const Main = TheTag.bind({});

Main.argTypes = {
  tag: toStr(),
};
