import React, { useState, useEffect } from "react";
import { getUrl } from "aws-amplify/storage";
import placeholder from "../../assets/images/placeholder.png";

interface ImageFromStorage {
  key?: string | null;
  alt?: string;
}

const ImageFromStorage = (props: ImageFromStorage): JSX.Element => {
  const { key, alt } = props;
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!key) return;
    getUrl({ key }).then((url) => setUrl(url.url.toString()));
  }, [key]);

  return <img src={url || placeholder} alt={alt || "Placeholder"} />;
};
