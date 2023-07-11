import { useState, useEffect } from "react";

export type FetchState<T> = {
    data?: T;
    loading: boolean;
    error?: string;
}

export const useFetch = <T>(url: string): FetchState<T> => {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const fetchData = async (): Promise<T> => {
        setLoading(true);
        const response: Response = await fetch(url);

        if (!response.ok) {
            setError(response.statusText);
        }

        return (await response.json()) as T;
    }

    useEffect(() => {
        fetchData()
            .then((data: T) => setData(data))
            .catch((error: string) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}
