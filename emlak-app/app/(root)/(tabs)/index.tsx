import Search from '@/components/search';
import icons from '@/constants/icons';
import { useGlobalContext } from '@/lib/global-provider';
import React from 'react';
import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

export default function Index() {
	const { user, refetch } = useGlobalContext();
	return (
		<SafeAreaView className="h-full bg-white">
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
			</View>
			<Search />
		</SafeAreaView>
	);
}
