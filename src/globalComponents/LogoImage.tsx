import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";

interface LogoImageProps {
  skey?: string | null;
  url?: string | null;
  isPaid?: boolean;
  isAdmin?: boolean;
}

const LogoImage = ({ skey, url, isPaid, isAdmin }: LogoImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (!skey || (!isPaid && !isAdmin)) return;
      const url = await Storage.get(skey);
      setImageUrl(url);
    };
    fetchImage();
  }, [skey, isPaid]);

  if (!url && !imageUrl) return null;

  return (
    <img
      hidden={!isAdmin && !isPaid}
      src={url || imageUrl || ""}
      alt="logo"
      style={{
        maxWidth: "100%",
        maxHeight: "40px",
      }}
    />
  );
};

export default LogoImage;
