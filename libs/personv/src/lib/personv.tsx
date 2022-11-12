import styles from './personv.module.css';

/* eslint-disable-next-line */
export interface PersonvProps {}

export function Personv(props: PersonvProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Personv!</h1>
    </div>
  );
}

export default Personv;
