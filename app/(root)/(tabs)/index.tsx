import { Card, FeaturedCard } from '@/components/cards';
import Filters from '@/components/filters';
import NoResults from '@/components/noResults';
import Search from '@/components/search';
import icons from '@/constants/icons';
import { getLatestProperties, getProperties } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
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
	const { user } = useGlobalContext();
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
			limit: 6,
		},
		skip: true,
	});

	const handleCardPress = (id: string) => router.push(`/properties/${id}`);

	useEffect(() => {
		refetch({
			filter: params.filter!,
			query: params.query!,
			limit: 7,
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
				keyExtractor={item => item.$id}
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
							<View className="flex flex-row items-center">
								<Image
									source={{ uri: user?.avatar }}
									className="size-12 rounded-full"
								/>
								<View className="flex flex-col items-start ml-2 justify-center">
									<Text className="font-rubik size-xs text-black-100">
										Hello,
									</Text>
									<Text className="text-base text-black-300 font-rubik-medium">
										{user?.name}
									</Text>
								</View>
							</View>
							<TouchableOpacity>
								<Image source={icons.bell} className="size-6" />
							</TouchableOpacity>
						</View>
						<Search />
						<View className="my-5">
							<View className="flex flex-row items-center justify-between">
								<Text className="text-xl font-rubik-bold text-black-300">
									Featured
								</Text>
								<TouchableOpacity
									onPress={() => router.push('/explore')}
								>
									<Text className="text-base font-rubik-bold text-primary-300">
										See All
									</Text>
								</TouchableOpacity>
							</View>
							{latestPropertiesLoading ? (
								<ActivityIndicator
									size="large"
									className="text-primary-300"
								/>
							) : !latestProperties ? (
								<NoResults />
							) : (
								<FlatList
									data={latestProperties}
									renderItem={({ item }) => (
										<FeaturedCard
											item={item}
											onPress={() =>
												handleCardPress(item.$id)
											}
										/>
									)}
									keyExtractor={item => item.$id}
									horizontal
									bounces={false}
									showsHorizontalScrollIndicator={false}
									contentContainerClassName="gap-5 mt-5 flex"
								/>
							)}

							<View className="flex flex-row items-center justify-between">
								<Text className="text-xl font-rubik-bold text-black-300 mt-5">
									Our Picks
								</Text>
								<TouchableOpacity
									onPress={() => router.push('/explore')}
								>
									<Text className="text-base font-rubik-bold text-primary-300">
										See All
									</Text>
								</TouchableOpacity>
							</View>
							<Filters />
						</View>
					</View>
				}
			/>
		</SafeAreaView>
	);
}
