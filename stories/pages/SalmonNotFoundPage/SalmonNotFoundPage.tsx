import React from 'react';
import styles from './SalmonNotFoundPage.module.css';
import WarningIcon from '../../assets/icon/warning.svg';
import SalmonButton from "../../components/SalmonButton";

export interface SalmonNotFoundPageProps {
    goBackToMainPage: () => void
}

const SalmonNotFoundPage = ({ goBackToMainPage }: SalmonNotFoundPageProps) => {
    return (
        <section className={styles.NotFound__container}>
            <div className={styles.NotFound__iconContainer}>
                <img className={styles.NotFound__icon} src={WarningIcon} alt="warning!"/>
            </div>

            <h4 className={styles.NotFound__title}>
                No such page was found
            </h4>

            <p className={styles.NotFound__info}>The page you linked to no longer exists</p>

            <SalmonButton
                variant="contained"
                fullWidth
                onClick={() => goBackToMainPage()}
                className={styles.NotFound__backBtn}
            >
                Go to main page
            </SalmonButton>
        </section>
    )
}

export default SalmonNotFoundPage;