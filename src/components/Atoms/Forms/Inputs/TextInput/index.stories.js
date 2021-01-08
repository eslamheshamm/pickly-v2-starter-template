import React from "react";
import { TextInput } from ".";

export default {
  title: "Design System/Atoms/Forms/Inputs/TextInput",
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  isLabel: true,
};
