import React, { useContext } from "react";
import styled from "styled-components";
import { animations, presets } from "../data";
import { FieldSelect } from "./FieldSelect";
import {useStateContext} from '../contexts/AppContext'

export const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export function Form(props) {
  const {
    preset,
    enterAnimation,
    exitAnimation,
    setPreset,
    setEnterAnimation,
    setExitAnimation
  } = useStateContext();

  return (
    <Wrapper {...props}>
      <FieldSelect
        current={preset}
        fullWidth
        label="Preset"
        options={presets}
        onChange={value => setPreset(value)}
      />

      <FieldSelect
        current={enterAnimation}
        label="Enter Override"
        options={animations}
        onChange={value => setEnterAnimation(value)}
      />

      <FieldSelect
        current={exitAnimation}
        label="Exit Override"
        options={animations}
        onChange={value => setExitAnimation(value)}
      />
    </Wrapper>
  );
}
