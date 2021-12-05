import { ISquashSlideProps } from './SquashSlide.types';
import React from 'react';
import { Slide } from '../Slide/Slide';
import { Squash } from '../Squash/Squash';

export const SquashSlide = (props: ISquashSlideProps) => {
  const { isOpen, duration, delay } = props;
  return (
    <Squash isOpen={isOpen} duration={duration} delay={delay}>
      <Slide {...props} />
    </Squash>
  );
};
