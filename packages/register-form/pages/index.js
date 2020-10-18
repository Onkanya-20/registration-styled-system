import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Form, Field } from "react-final-form";
import { StyledButton, Input } from "./index.view";
const Home = () => {
  const onSubmit = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h2>Register</h2>
              <div>
                <label>First Name</label>
                <Field
                  name="firstName"
                  component={Input}
                  placeholder="First Name"
                />
              </div>

              <StyledButton type="submit">Submit</StyledButton>
            </form>
          )}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
