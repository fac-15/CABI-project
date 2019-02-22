import styled from 'styled-components';

const ButtonContianer = styled.button`
    /* flex: 0 0 100%; */
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    padding: 0.8em;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    margin: 1em;
    border-radius: 0.5em;
    bottom: 2em;
    background: black;

    &:hover {
        background: #368729;
    }
`;

const ChooseACrop = styled.h2`
    text-align: center;
    flex: 0 0 100%;
    color: black;
    padding-top: 1em;
`;

const ClickMe = styled.button`
    position: fixed;
    bottom: 0em;
    left: -1em;
    width: 20%;
    background: #368729;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    padding: 0.5em;
    color: white;
    text-transform: uppercase;
    border-radius: 0.5em;
`;

const CropboxWrap = styled.div`
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
`;

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

const LocationInfo = styled.p``;

const CropButtonLink = styled.button`
    background: black;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    padding: 0.8em;
    margin: 0.3em;
    color: white;
    border-radius: 0.5em;
    width: 6em;

    &:hover {
        background: #cd4400;
    }
`;

const DashWrap = styled.div``;

const FormWrap = styled.div``;

const GoogleForm = styled.iframe``;

const Head = styled.h1`
    padding-left: 1.6em;
`;

const Form = styled.iframe`
    margin: 0 auto;
    max-width: 100%;
`;

const DropdownWrap = styled.div`
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    padding: 0.2em;
    margin: 1em;
    position: relative;
`;

const PestCommonHeader = styled.h4`
    font-size: 1.2em;
    color: black;
`;

const PestBoxWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
`;

const PestBoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* width: 80%; */
    height: 20%;
`;

const PestButtonName = styled.h3`
    text-align: center;
    flex: 0 0 100%;
`;

const PestButtonWrap = styled.div`
    flex-direction: row;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    padding: 0.6em;
    color: white;
    box-sizing: border-box;
`;

const PestButtonContainer = styled.button`
    border-radius: 0.8em;
    width: 14em;
    background: #ffffff;
    border: 0.3em double #cd4400;

    &:hover {
        border: 0.3em solid black;
    }
`;

const riskColor = num => {
    return num === 1
        ? 'green'
        : num === 2
        ? 'orange'
        : num === 3
        ? 'red'
        : 'white';
};

const RiskBar = styled.p`
    background-color: ${props => riskColor(props.level)};
    color: ${props => (props.level === 2 ? 'black' : 'white')};
    border-radius: 20px;
    padding: 0.3em;
    font-weight: bold;
    margin: 1em 2em;
    text-align: center;
    align-content: center;
`;

const Loading = styled.div`
    font-size: 3em;
    position: fixed;
    top: 38%;
    left: 36%;
`;

const SelectLocationHead = styled.h1`
    text-align: center;
`;

const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const TitleImage = styled.img`
    max-width: 100%;
    min-width: 14em;
`;

const CropNameHeader = styled.h2`
    padding-top: 1em;
    text-align: center;
    flex: 0 0 100%;
    color: black;
`;

export {
    ButtonContianer,
    ChooseACrop,
    ClickMe,
    CropboxWrap,
    CropButtonLink,
    CropCommonHeader,
    CropNameHeader,
    DashWrap,
    DropdownWrap,
    Form,
    FormWrap,
    GoogleForm,
    Head,
    Loading,
    LocationInfo,
    PestBoxContainer,
    PestBoxWrapper,
    PestButtonContainer,
    PestButtonName,
    PestButtonWrap,
    PestCommonHeader,
    PestImg,
    RiskBar,
    SelectLocationHead,
    TitleContainer,
    TitleImage
};
