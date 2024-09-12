import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { Card } from 'react-native-paper';
import { IMAGE_BASE_URL } from '../api/network';
import { Movie } from '../api/types';

type GridDataProps = {
  data: Movie[];
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
};

const GridData = ({
  data,
  onEndReached,
  onEndReachedThreshold,
}: GridDataProps) => {
  const ItemCard = ({ movie }: { movie: Movie }) => (
    <View className="flex-1 m-1.5">
      <Card className="rounded-lg overflow-hidden">
        <Image
          className="w-full h-44"
          source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
        />
      </Card>
    </View>
  );

  return (
    <FlatList
      data={data}
      numColumns={3}
      renderItem={({ item }) => <ItemCard movie={item} />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
    />
  );
};

export default GridData;
