import React from "react";
import { PrefixChangableNumb } from ".";

export default {
  title: "Design System/Atoms/Forms/Inputs/PrefixDropNumb",
  component: PrefixChangableNumb,
};

const Template = (args) => <PrefixChangableNumb {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isLabel: true,
  label: "Label",
};
