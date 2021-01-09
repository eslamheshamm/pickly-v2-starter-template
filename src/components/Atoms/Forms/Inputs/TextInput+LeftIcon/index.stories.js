import React from "react";
import { TextInputLeftIcon } from ".";

export default {
  title: "Design System/Atoms/Forms/Inputs/TextInput+LeftIcon",
  component: TextInputLeftIcon,
};

const Template = (args) => <TextInputLeftIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  isLabel: true,
};
