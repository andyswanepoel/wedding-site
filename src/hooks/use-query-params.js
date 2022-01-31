import { useEffect, useState } from "react";
import { navigate } from "gatsby";

const getUrlParam = (selection) => {
  var pairs = window.location.search.slice(1).split("&");
  var result = {};
  pairs.forEach(function (pair) {
    pair = pair.split("=");
    result[pair[0]] = decodeURIComponent(pair[1] || "");
  });
  return result[selection];
};

const useQueryParams = (selection, removeFromUrl) => {
  const [param, setParam] = useState(null);

  useEffect(() => {
    const existingParam = localStorage.getItem(selection);
    const urlParam = getUrlParam(selection);

    if (urlParam && urlParam !== existingParam) {
      setParam(urlParam);
      localStorage.setItem(selection, urlParam);
    } else if (existingParam) {
      setParam(existingParam);
    }

    if (urlParam && removeFromUrl) {
      navigate(window.location.pathname, { replace: true });
    }
  }, [selection, removeFromUrl]);

  return [param];
};

export default useQueryParams;
