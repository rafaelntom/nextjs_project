"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ name }: { name?: string }) => {
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleImagePicker = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <div className={classes.control}>
        <div className={classes.preview}>
          {selectedImage ? (
            <Image
              src={typeof selectedImage === "string" ? selectedImage : ""}
              fill
              alt="The image selected by the user"
            />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={inputRef}
          onChange={handleImagePicker}
        />
        <button className={classes.button} type="button" onClick={handleButtonClick}>
          {" "}
          Pick an Image{" "}
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
