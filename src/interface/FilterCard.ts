import { Props } from 'react';

export default interface FilterCard extends Props<any> {
  typeFilter: string;
  icon: string;
  setFilterActived?: any;
  actived: boolean;
  title: string;
}
