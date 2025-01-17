import { createElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../Heading';
import type { HeadingProps } from '../Heading.types';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
};
export default meta;

const content = 'Lorem ipsum dolor sit amet';

export const Basic: StoryObj<HeadingProps> = {
  argTypes: {},
  args: {},
  render: () => (
    <div>
      <Heading level={1}>{content}</Heading>
      <Heading level={2}>{content}</Heading>
      <Heading level={3}>{content}</Heading>
      <Heading level={4}>{content}</Heading>
      <Heading level={5}>{content}</Heading>
      <Heading level={6}>{content}</Heading>
    </div>
  ),
};
