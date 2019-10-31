import React from 'react';

const useStateCustom = initVal => {


    return [
        initVal,
        (newVal) => initVal = newVal
    ]
}