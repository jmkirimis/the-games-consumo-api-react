import styles from "@/components/LoginContent/LoginContent.module.css";
import { useRouter } from "next/router";

const LoginContent = () => {
  const router = useRouter();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    router.push("/home")
  };
  return (
    <>
      <div className={styles.loginContent}>
        {/* IMAGEM DO LOGO */}
        <div className={styles.logo}>
          <img
            src="/images/thegames_logo.png"
            alt="The Games"
            className={styles.logoImg}
          />
        </div>
        {/* LOGIN CARD */}
        <div className={styles.loginCard}>
          <div className={styles.loginCardHeader}>
            <h3>Faça seu login:</h3>
          </div>
          {/* FORMULÁRIO */}
          <div className={styles.loginCardBody}>
            <form className="formPrimary" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                className={`${styles.input} ${"inputPrimary"}`}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
                className={`${styles.input} ${"inputPrimary"}`}
              />
              <input type="submit"
              value="Entrar"
              className={`${styles.input} ${"btnPrimary"}`}
               />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginContent;
