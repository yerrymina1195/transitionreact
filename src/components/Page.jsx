import React from "react";
import styled from "styled-components";
import { Form } from "./Form";

const Wrapper = styled.div`
  background-color: ${({ color }) => color};
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 100px 48px 48px 48px;
  width: 100%;
`;

const Container = styled.nav`
  margin: auto;
  max-width: 640px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  color: orange;
  background-color: grey;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  text-transform: uppercase;

  strong {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 400;
    color: orange;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: red;
  line-height: 1.4;
  margin-bottom: 48px;
  text-align: center;
`;

export function Page({ page, ...rest }) {
  return (
    <Wrapper color={page.color} img={page.img} {...rest}>
      <Container>
        <Title>
          React <strong>Page Transitions</strong>
        </Title>

        <Description>
That's my modification  for react-page-transition       
        </Description>

        <Form />
      </Container>
    </Wrapper>
  );
}
