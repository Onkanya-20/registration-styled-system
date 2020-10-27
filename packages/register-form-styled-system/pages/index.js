import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Box } from "@monorepo/components/Box";
import { Button } from "@monorepo/components/Button";
import { CustomInput, CustomPassword } from "@monorepo/components/Input";
import { getRestaurants } from "services/restaurants";
const Home = () => {
  useEffect(() => {
    const handleRestaurants = async () => {
      const res = await getRestaurants();
      console.log({ res });
    };
    handleRestaurants();
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Box variant="large" bg="black" color="white">
          Registration Form
        </Box>
        <Box flexWrap="wrap" flexDirection="column" mb={3}>
          <Box color="goldPrimary">E-mail-Address</Box>
          <CustomInput
            type="text"
            p={2}
            placeholder="E-mail"
            color="text.normal"
            fontSize={3}
          />
        </Box>
        <Box flexWrap="wrap" flexDirection="column" mb={3}>
          <Box color="goldPrimary">Password</Box>
          <CustomPassword
            p={2}
            placeholder="Password"
            color="text.normal"
            fontSize={3}
          />
        </Box>
        <Box mt={3}>
          <Button
            bg="black"
            color="goldPrimary"
            p={3}
            fontWeight="bold"
            fontSize={3}
          >
            Submit
          </Button>
        </Box>
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
