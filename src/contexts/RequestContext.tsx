import React, { useEffect, useState } from "react";


const useRequest = (url: string , type: string = "json", options?: RequestInit) => { 
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const makeRequest = async (signal: any) => {
        try {
            setIsLoading(true)
            const request = await fetch(url, {...options, signal })
            const response = type.toLowerCase() === "json" ? await request.json() : await request.text()
            setData(response)
        } catch(err:any) {
            setData(null)
            setError(err.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const {signal, abort} = new AbortController()
        makeRequest(signal)
        // return () => abort()
    }, [])
    return { isLoading, data, error }
}

export default useRequest
