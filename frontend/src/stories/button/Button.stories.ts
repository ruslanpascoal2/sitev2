import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
} as Meta;

export const Primary = () => ({
  props: {
    label: 'Button',
  },
});

Primary.storyName = 'I am the primary';


