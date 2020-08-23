import { useState } from 'react';
import axios from 'axios';

const initialRequestInfo = {
    error: null,
    data: null,
    loading: false,
}

export default function useApi(config) {
    const [requestInfo, setRequestInfo] = useState(initialRequestInfo)

    async function call(localConfig) {
        setRequestInfo({
            ...initialRequestInfo,
            loading: true,
        })
        let response;
        try {  // trying to make a request on the backend
            response = await axios({
                baseURL: 'http://localhost:5000', // using the localhost port as baseUrl
                ...config, // bringing all the data of the config variable (where the user will fill in when initializing the hooks)
                ...localConfig // bringing all the data from the localConfig variable (where the user will fill in when initializing the call function)
            })
            setRequestInfo({
                ...initialRequestInfo,
                data: response.data, // assigning the request values ​​to the data
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
    }

    return [ // returns the call function and the Request data
        call,
        requestInfo
    ]
}