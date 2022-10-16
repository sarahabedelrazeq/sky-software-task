import { useCallback, useState } from "react";
import axios from "axios";
import { API_URL } from "constants";
import useLanguage from "./useLanguage";

const useFetch = (
  options = {
    endpoint: "",
    method: "GET",
    body: null,
    params: null,
    onSuccess: null,
    onError: null,
    nullifyOnRecall: false,
    initialLoadingState: false,
  }
) => {
  const {
    endpoint,
    method,
    body,
    params,
    onSuccess,
    onError,
  } = options;
  const language = useLanguage();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(() => {
    setLoading(true);
    setError(null);
    return axios
      .request({
        method,
        baseURL: API_URL,
        url: `${endpoint}${params ? params : ""}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          language: language.code,
        },
        ...(method === "POST" &&
          body && {
            data: body,
          }),
      })
      .then((response) => {
        setData(response.data);
        if (response.data && onSuccess) {
          return onSuccess(response.data);
        }
        if (onError) {
          onError(response.data);
        }
      })
      .catch((err) => {
        let error = err.message;
        setError(error);
        if (onError) {
          onError(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [
    method,
    endpoint,
    body,
    params,
    onSuccess,
    onError,
    language.code,
  ]);

  return [{ data, error, loading }, request];
};

export default useFetch;
