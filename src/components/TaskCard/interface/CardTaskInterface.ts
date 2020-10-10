import { Props } from 'react';

export default interface CardTaskInterface extends Props<any> {
  title: string;
  icon: string;
  description: string;
  when: string;
}
