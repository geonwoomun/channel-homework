import React from 'react';
import useForm from './hooks/useForm';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const Form = styled.form`
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;

  & label {
    font-size: 1.1rem;
  }
  & input {
    height: 1.1rem;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  & button {
    width: 80px;
    height: 1.2rem;
    border-radius: 5px;
    cursor: not-allowed;
  }

  & button:not([disabled]) {
    cursor: pointer;
  }

  & button[type='submit']:not([disabled]) {
    background-color: #09b11f;
    color: white;
  }

  & button[type='button']:not([disabled]) {
    background-color: #da5758;
    color: white;
  }
`;

function CreateForm({ handleSubmit, pristine, reset, submitting }) {
  const { onSubmit } = useForm({ handleSubmit, reset });

  return (
    <Form onSubmit={onSubmit}>
      <div>국가 추가</div>
      <div>
        <label htmlFor='name'>country name</label>
        <div>
          <Field
            name='name'
            id='name'
            component='input'
            type='text'
            placeholder='country name'
          />
        </div>
      </div>
      <div>
        <label htmlFor='alpha2Code'>alphabet code</label>
        <div>
          <Field
            name='alpha2Code'
            id='alpha2Code'
            component='input'
            type='text'
            placeholder='alphabet code'
          />
        </div>
      </div>
      <div>
        <label htmlFor='capital'>capital</label>
        <div>
          <Field
            name='capital'
            id='capital'
            component='input'
            type='text'
            placeholder='capital'
          />
        </div>
      </div>
      <div>
        <label htmlFor='region'>region</label>
        <div>
          <Field
            name='region'
            id='region'
            component='input'
            type='text'
            placeholder='region'
          />
        </div>
      </div>
      <div>
        <label htmlFor='callingCodes'>calling codes</label>
        <div>
          <Field
            name='callingCodes'
            id='callingCodes'
            component='input'
            type='text'
            placeholder='띄어쓰기로 구분해주세요.'
          />
        </div>
      </div>
      <div>
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear
        </button>
      </div>
    </Form>
  );
}

export default reduxForm({
  form: 'createCountry'
})(CreateForm);
