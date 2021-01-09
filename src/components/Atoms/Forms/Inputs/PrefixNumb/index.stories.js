import React from "react";
import { PrefixNumb } from ".";

export default {
  title: "Design System/Atoms/Forms/Inputs/PrefixNumb",
  component: PrefixNumb,
};

const Template = (args) => <PrefixNumb {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  isLabel: true,
  countreCode: 20,
};
