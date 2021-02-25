import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/28880955?s=460&u=25a23d71f0442ed2401fcd768d58d97f073020b3&v=4" alt="Rodrigo" />
      <div>
        <strong>Rodrigo Magalhaes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}