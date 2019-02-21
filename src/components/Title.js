import React from 'react';
import { TitleContainer, TitleImage } from './styledComponents';
import TitlePng from '../../public/title.png'

const Title = () => (
    <TitleContainer>
        <TitleImage src={TitlePng} />
    </TitleContainer>
);

export default Title;
