import styled from 'styled-components';

const CropCommonHeader = styled.h4`
    font-size: 1.2em;
    color: black;
`;

const PestImg = styled.img`
    display: inline-block;
    padding: 1em;
    max-width: 460px;
    max-height: 190px;
    width: auto;
    height: auto;
`;

const ButtonContianer = styled.button`
    flex: 0 0 100%;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    padding: 0.6em;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    margin: 1em;
`;

const CropboxWrap = styled.div`
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
`;

const ChooseACrop = styled.h2`
    text-align: center;
    flex: 0 0 100%;
    color: black;
`;

const LocationInfo = styled.p``;

const CropButtonLink = styled.button`
    background: black;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    padding: 0.6em;
    color: white;
`;

const DashWrap = styled.div``;

const FormWrap = styled.div``;

const GoogleForm = styled.iframe``;

const Head = styled.h1`
    padding-left: 1.6em;
`;

export {
    CropCommonHeader,
    PestImg,
    ButtonContianer,
    CropboxWrap,
    ChooseACrop,
    LocationInfo,
    CropButtonLink,
    DashWrap,
    FormWrap,
    GoogleForm,
    Head
};
