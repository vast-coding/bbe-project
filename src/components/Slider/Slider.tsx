import { BiBell } from 'react-icons/bi';
import React from 'react';
import ReactSlider from 'react-slider';
import { Text } from '../Text/Text';
import styled from 'styled-components';
const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 10px;
`;

const StyledThumb = styled.div`
  height: 30px;
  line-height: 30px;
  width: 30px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
  margin-top: -12px;
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  border: 1px solid grey;
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

export const Slider = ({ updateDuration, duration }) => (
  <StyledSlider
    // defaultValue={}
    value={duration}
    renderTrack={Track}
    renderThumb={Thumb}
    min={0.2}
    max={2}
    step={0.1}
    onChange={(...args) => {
      console.log('uupdateDuration', ...args);
      updateDuration(...args);
    }}
  />
);
