import React, { useEffect, useState } from "react";

import { fetchImages } from "../api/services";
import Layout from "../components/layout";
import Image from "../components/image";

export default function Home() {
  const [photos, setPhotos] = useState([]);

  const handleFetchImages = () => {
    fetchImages().then((result) => {
      if (result.status === 200) {
        setPhotos(result.data);
      }
    });
  };

  useEffect(() => {
    handleFetchImages();
  }, []);

  const renderImages = () => {
    return photos.map((photo) => <Image src={photo.thumbnailUrl} />);
  };

  return (
    <Layout>
      <h1>Home</h1>
      {renderImages()}
    </Layout>
  );
}
