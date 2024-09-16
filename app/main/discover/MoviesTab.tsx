import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { Text, View } from "react-native";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { getPopularMovies } from "../../../api/network";
import { MovieListResponse } from "../../../api/types";
import GridData from "../../../components/GridData";

const MoviesTab = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["Movies"],
      queryFn: ({ pageParam = 1 }) => getPopularMovies(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage: MovieListResponse) => {
        const nextPage = lastPage.page + 1;
        return lastPage.total_pages >= nextPage ? nextPage : undefined;
      },
    });

  const movies =
    data?.pages.flatMap((page: MovieListResponse) => page.results) || [];

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-background">
        <ActivityIndicator />
      </View>
    );
  }

  if (error instanceof Error) {
    return (
      <View className="flex-1 justify-center items-center bg-background">
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      <GridData
        data={movies}
        onEndReached={hasNextPage ? fetchNextPage : undefined}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default MoviesTab;
