import React from 'react';

export default function CropButton(props) {
    return (
        <div>
            <button>{props.crop.crop}</button>
        </div>
    );
}