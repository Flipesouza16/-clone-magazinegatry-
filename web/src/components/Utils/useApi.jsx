import { useState } from 'react';
import axios from 'axios';
// import api from '../../services/api';
import useDebouncedPromise from './useDebouncedPromise';

const initialRequestInfo = {
    error: null,
    data: null,
    loading: false,
}

export default function useApi(config) {
    const [requestInfo, setRequestInfo] = useState(initialRequestInfo);
    const debouncedAxios = useDebouncedPromise(axios, config.debounceDelay);

    async function call(localConfig) {
        setRequestInfo({
            ...initialRequestInfo,
            loading: true,
        })
        let response = null;

        const finalConfig = {
            baseURL: 'http://localhost:3001', // using the localhost port as baseUrl
            ...config, // bringing all the data of the config variable (where the user will fill in when initializing the hooks)
            ...localConfig // bringing all the data from the localConfig variable (where the user will fill in when initializing the call function)
        }

        const fn = finalConfig.debounced ? debouncedAxios : axios;

        try {  // trying to make a request on the backend
            response = await fn(finalConfig);
            setRequestInfo({
                ...initialRequestInfo,
                data: response.data.docs, // assigning the request values ​​to the data
            })
        } catch (error) { // if there is an error, assign this problem to the variable error
            setRequestInfo({
                ...initialRequestInfo,
                error,
            })
        }

        if (config.onCompleted) { // passing the values ​​in the request to the onCompleted attribute
            config.onCompleted(response);
        }
        return response;
    }

    return [ // returns the call function and the Request data
        call,
        requestInfo
    ]
}