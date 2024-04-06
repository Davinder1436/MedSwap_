import React, { useEffect, useState } from "react";
import { Box, Text, Image, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import app from "./../../Firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase(app);

const Home = () => {
  const { salt } = useParams();
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const starCountRef = ref(db, '/medicines');
    onValue(starCountRef, (snapshot) => {
      const fetchedData = snapshot.val();
      setData(fetchedData);
    });
  }, []);

  const saltInfo = data && data[salt];
console.log(data);
  return (
    <>
      <div id="About" style={{ height: "auto" }}>
        <Box
          h={{
            base: "1300",
            sm: "1300",
            md: "1300px",
            lg: "650px",
          }}
          py={5}
          bg="#e8f0f9"
          w={"100vw"}
        >
          {saltInfo && (
            <Grid
              h={"600px"}
              templateColumns={"repeat(2, 1fr)"}
              m={4}
              gap={4}
            >
              <GridItem colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }} bg="#FFFFFF">
                <Text>{saltInfo.name}</Text>
              </GridItem>
              <GridItem colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }} bg="#FFFFFF">
                <Text>{saltInfo.conc}</Text>
              </GridItem>
              <GridItem colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }} bg="#FFFFFF">
                <Text>{saltInfo.description}</Text>
              </GridItem>
              <GridItem colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }} bg="#FFFFFF">
                <Text>{saltInfo.description_hindi}</Text>
              </GridItem>
              <GridItem colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }} bg="#FFFFFF">
                <Text>{saltInfo.price}</Text>
              </GridItem>
            </Grid>
          )}
        </Box>
      </div>
    </>
  );
};

export default Home;
