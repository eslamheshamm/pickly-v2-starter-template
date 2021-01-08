import React from "react";
import { Choices } from ".";

export default {
  title: "Design System/Atoms/Forms/Inputs/Choices",
  component: Choices,
};

const Template = (args) => <Choices {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  isLabel: true,
  choice: "A",
};
