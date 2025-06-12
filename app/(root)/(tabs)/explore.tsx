import { Card } from '@/components/cards';
import Filters from '@/components/filters';
import NoResults from '@/components/noResults';
import Search from '@/components/search';
import icons from '@/constants/icons';
import { getLatestProperties, getProperties } from '@/lib/appwrite';
import { useAppwrite } from '@/lib/useAppwrite';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

export default function Index() {
	const params = useLocalSearchParams<{ query?: string; filter?: string }>();
	const { data: latestProperties, loading: latestPropertiesLoading } =
		useAppwrite({
			fn: getLatestProperties,
		});

	const {
		data: properties,
		loading,
		refetch,
	} = useAppwrite({
		fn: getProperties,
		params: {
			filter: params.filter!,
			query: params.query!,
			limit: 50,
		},
		skip: true,
	});

	const handleCardPress = (id: string) => router.push(`/properties/${id}`);

	useEffect(() => {
		refetch({
			filter: params.filter!,
			query: params.query!,
			limit: 50,
		});
	}, [params.filter, params.query]);

	return (
		<SafeAreaView className="h-full bg-white">
			{/*<Button title="Seed" onPress={() => seed()} />*/}
			<FlatList
				data={properties}
				renderItem={({ item }) => (
					<Card
						item={item}
						onPress={() => handleCardPress(item.$id)}
					/>
				)}
				keyExtractor={item => item.toString()}
				numColumns={2}
				contentContainerClassName="pb-32"
				columnWrapperClassName="flex gap-5 px-5"
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={
					loading ? (
						<ActivityIndicator
							size="large"
							className="text-primary-300 mt-5"
						/>
					) : (
						<NoResults />
					)
				}
				ListHeaderComponent={
					<View className="px-5">
						<View className="flex flex-row items-center justify-between mt-5">
							<TouchableOpacity
								onPress={() => router.back()}
								className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
							>
								<Image
									source={icons.backArrow}
									className="size-5"
								/>
							</TouchableOpacity>
							<Text className="ml-2 font-rubik-medium text-black-300">
								Search for your ideal home
							</Text>
							<Image source={icons.bell} className="w-6 h-6" />
						</View>

						<Search />
						<View className="mt-5">
							<Filters />
							<Text className="text-xl font-rubik-bold text-black-300 mt-3">
								Found {properties?.length} Properties
							</Text>
						</View>
					</View>
				}
			/>
		</SafeAreaView>
	);
}
