import { FC, useState, ChangeEvent } from "react";
import styles from "./fileUpload.module.scss";
import FileUploadProps from "./fileUpload.interface";
import placeholderImage from "@/assets/burger_icon_png.png";
import combineClasses from "@/helpers/combineClasses";

const FileUpload: FC<FileUploadProps> = (props) => {
  const { handleNextStep } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [wasClicked, setWasClicked] = useState(false)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.button_wrapper}>
        <button
          className={"button_big"}
          disabled={!selectedFile || wasClicked}
          onClick={() => {
            handleNextStep({ photo: selectedFile });
            setWasClicked(true);
          }}
        >
          <span>Next</span>
        </button>
      </div>
      <div className={styles.upload_wrapper}>
        <div className={styles.buttons}>
          {!selectedFile 
          ? (
            <>
              <input
                type="file"
                onChange={handleFileChange}
                className={styles.input}
                id="file-input"
              />
              <label htmlFor="file-input" className={styles.label}><div className={styles.icon}></div></label>
            </>
          ) : <button onClick={handleRemoveFile} className={styles.removeButton}>
            <div className={styles.icon}></div></button>}
          </div>
          <div className={combineClasses(styles.image_wrapper, (!preview ? styles.placeholder : ""))}>
            <img
              src={preview ||  placeholderImage.src}
              alt="File Preview"
              className={styles.preview}
            />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;