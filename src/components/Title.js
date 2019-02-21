import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import title from '../../public/title.png/';
import styled from 'styled-components';

const TitleContainer = styled.div`
    display: flex;
    width: 100%;
`;

const TitleImage = styled.img`
    margin-left: auto;
`;

const Title = () => (
    <TitleContainer /*className="title-container"*/>
        <TitleImage /*className="title" src={title}*/ />
    </TitleContainer>
);

export default Title;
