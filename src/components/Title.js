import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import title from '../../public/title.png/';
// import styled from 'styled-components';
import { TitleContainer, TitleImage } from './styledComponents';

const Title = () => (
    <TitleContainer /*className="title-container"*/>
        <TitleImage /*className="title" src={title}*/ />
    </TitleContainer>
);

export default Title;
