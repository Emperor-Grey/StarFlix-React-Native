import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Text, View } from "react-native";
import { getPopularMovies } from "../../api/network";

const Home = () => {
  const {
    data: popularMovies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["popular"],
    queryFn: async () => await getPopularMovies(1),
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  return (
    <View className="justify-center flex-1 items-center">
      <Text>Home</Text>
    </View>
  );
};

export default Home;
