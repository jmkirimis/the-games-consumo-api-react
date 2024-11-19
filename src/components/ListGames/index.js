import axios from "axios";
import { useEffect, useState } from "react";
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";

const ListGames = () => {
  // Estado que irá conter a lista de jogos
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Efeito colateral - será chamado quando o componente for renderizado
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:4000/games");
        setGames(response.data.games);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGames();
  }, []);

  // Delete
  const deleteGame = async (gameId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/game/${gameId}`
      );
      if (response.status === 204) {
        alert("Jogo deletado com sucesso!");
        setGames(games.filter((game) => game._id !== gameId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Componente Loading */}
      <Loading loading={loading} />

      <div className={styles.games} id={styles.games}>
        {/* Lista de jogos */}
        {games.map((game) => (
          <ul className={styles.listGames} key={game._id}>
            <div className={styles.gameImg}>
              <img src="images/game_cd_cover.png" alt="Jogo em estoque" />
            </div>
            <div className={styles.gameInfo}>
              <h3>Título: {game.title}</h3>
              <li>Plataforma: {game.platform}</li>
              <li>Ano: {game.year}</li>
              <li>
                Preço: {game.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </li>
              <br />
              {/* Botão de deletar */}
              <button className={styles.btnDel}
                onClick={() => {
                  const confirmed = window.confirm(
                    "Deseja mesmo excluir o jogo?"
                  );
                  if (confirmed) {
                    deleteGame(game._id);
                  }
                }}
              >
                Deletar
              </button>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
};
export default ListGames;
