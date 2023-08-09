import moment from "moment";
import { DependencyList, EffectCallback, useRef, useEffect } from "react";

export const formatDate = (dateString: string) => {
  const formattedDate = moment(dateString).format("MMM D, YYYY");

  console.log(formattedDate);

  return formattedDate;
};

export const useEffectAfterFirstRender = (
  cb: EffectCallback,
  dependencies: DependencyList
) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return cb();
  }, dependencies);
};
