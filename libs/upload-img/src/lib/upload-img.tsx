import styles from './upload-img.module.css';

/* eslint-disable-next-line */
export interface UploadImgProps {}

export function UploadImg(props: UploadImgProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UploadImg!</h1>
    </div>
  );
}

export default UploadImg;
