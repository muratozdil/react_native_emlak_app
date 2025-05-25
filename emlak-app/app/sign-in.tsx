//import { login } from '@/lib/appwrite';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import icons from '@/constants/icons';
import images from '@/constants/images';

const SignIn = () => {
	const handleLogin = async () => {
		//const result = await login();
		//if (result) {
		//	console.log('Login successful:', result);
		//} else {
		//	console.error('Login failed');
		//}
		//bu satiri actigimda kod patliyor appwrite ile ilgili bir sorun var
		// saat 1
	};

	return (
		<SafeAreaView className="bg-white h-full">
			<ScrollView contentContainerClassName="h-full ">
				<Image
					source={images.onboarding}
					className='w-full h-4/6 resizeMode="contain'
				/>
				<View className="px-10">
					<Text className="text-base text-center uppercase font-rubik text-black-200">
						Welcome to my app
					</Text>
					<Text className="text-3xl text-center font-rubik-bold text-black-200 mt-2">
						Choose to live in your{'\n'}
						<Text className="text-primary-300">dream home</Text>
					</Text>
					<Text className="mt-12 font-rubik text-lg text-black-200 text-center">
						Login to continue
					</Text>
					<TouchableOpacity
						onPress={handleLogin}
						className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
					>
						<View className="flex-row justify-center items-center">
							<Image
								source={icons.google}
								className="w-5 h-5"
								resizeMode="contain"
							/>
							<Text className="text-lg font-rubik-medium text-black-200 ml-2">
								Continue With Google
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default SignIn;
