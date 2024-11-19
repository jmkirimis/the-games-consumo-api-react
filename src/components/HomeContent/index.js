import styles from "@/components/HomeContent/HomeContent.module.css";
import ListGames from "../ListGames";

const HomeContent = () => {
  return (
    <>
      <div className={styles.homeContent}>
        <div className={styles.listGamesCard}>
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          <ListGames />
          <div className={styles.games} id="games"></div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
