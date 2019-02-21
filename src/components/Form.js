import React from 'react';
import Title from './Title.js';
import { FormWrap, GoogleForm } from './styledComponents';

const Form = () => (
    <FormWrap>
        <Title />
        <GoogleForm
            src="https://docs.google.com/forms/d/e/1FAIpQLSdecG_s8efNfWrOn_sO7ylhFbZbYdBHLPYFf8abibpknEFGMg/viewform?embedded=true"
            width="640"
            height="612"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
        >
            Loading...
        </GoogleForm>
    </FormWrap>
);

export default Form;
