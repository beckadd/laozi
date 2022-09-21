import { Story, Meta } from "@storybook/html";
import { DetailPane } from "../DetailPane";

export default {
  title: "Example/DetailPane",
  argTypes: {
    name: { control: "text" },
    body: { control: "text" },
  },
} as Meta;

const Template: Story = (args: { name: string; body: string }) => (
  <DetailPane {...args} />
);

export const TemplateOne = Template.bind({});
TemplateOne.args = { name: "hello", body: "world" };