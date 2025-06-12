import images from '@/constants/images';
import React from 'react';
import { Image, Text, View } from 'react-native';

const NoResults = () => {
	return (
		<View className="flex items-center my-5">
			<Image
				source={images.noResult}
				className="w-11/12 h-80"
				resizeMode="contain"
			/>
			<Text className="text-2xl font-rubik-bold text-black-300 mt-5">
				No results found
			</Text>
			<Text className="text-base text-black-100 mt-2">
				Try adjusting your search or filter options.
			</Text>
		</View>
	);
};
export default NoResults;
