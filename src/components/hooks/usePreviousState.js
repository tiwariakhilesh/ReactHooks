import { useRef, useEffect } from 'react';

const usePreviousState = val => {
    const ref = useRef([]);
    useEffect(() => {
        ref.current.push(val);
    }, [val])
    return ref;
}
export default usePreviousState;