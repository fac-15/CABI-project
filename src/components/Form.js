import React from 'react';
import Title from './Title.js';
import { FormWrap, GoogleForm } from './styledComponents';

const Form = () => (
    <div>
        <Title />
            <FormWrap>
                <GoogleForm
            src="https://docs.google.com/forms/d/e/1FAIpQLSdecG_s8efNfWrOn_sO7ylhFbZbYdBHLPYFf8abibpknEFGMg/viewform?embedded=true" width="640" height="789" frameborder="0" marginheight="0" marginwidth="0"><p>Loading...</p>
            </GoogleForm>
        </FormWrap>
    </div>
);

export default Form;
