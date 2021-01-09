import React from "react";
import { TextInputRightIcon } from ".";

export default {
  title: "Design System/Atoms/Forms/Inputs/TextInput+RightIcon",
  component: TextInputRightIcon,
};

const Template = (args) => <TextInputRightIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  isLabel: true,
  src: "https://svgshare.com/i/Ss2.svg",
};
