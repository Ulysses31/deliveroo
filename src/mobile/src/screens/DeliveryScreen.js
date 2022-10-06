/* eslint-disable no-unused-vars */
/* eslint-disable node/no-unsupported-features/es-syntax */
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image
} from 'react-native';
// eslint-disable-next-line node/no-extraneous-import
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

export default function DeliveryScreen() {
	const navigation = useNavigation();
	const restaurant = useSelector(selectRestaurant);

	return (
		<View className='bg-[#00ccbb] flex-1 pt-10'>
			<SafeAreaView className='z-50'>
				<View className='flex-row justify-between items-center p-5'>
					<TouchableOpacity
						onPress={() => navigation.navigate('Home')}>
						<XMarkIcon color='white' size={30} />
					</TouchableOpacity>
					<Text className='font-light text-white text-lg'>
						Order Help
					</Text>
				</View>

				<View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
					<View className='flex-row justify-between'>
						<View>
							<Text className='text-lg text-gray-400'>
								Estimated Arrival
							</Text>
							<Text className='text-4xl font-bold'>
								45-55 Minutes
							</Text>
						</View>
						<Image
							source={{
								uri: 'https://links.papareact.com/fls'
							}}
							className='w-20 h-20'
						/>
					</View>
					<Progress.Bar
						size={30}
						color='#00ccbb'
						indeterminate={true}
					/>
					<Text className='mt-3 text-gray-500'>
						You order at {restaurant.title} is being prepared
					</Text>
				</View>
			</SafeAreaView>

			<MapView
				initialRegion={{
					latitude: parseFloat(restaurant.lat),
					longitude: parseFloat(restaurant.long),
					latitudeDelta: 0.005,
					longitudeDelta: 0.005
				}}
				className='flex-1 -mt-10 z-0'
				mapType='mutedStandard'>
				<Marker
					coordinate={{
						latitude: parseFloat(restaurant.lat),
						longitude: parseFloat(restaurant.long)
					}}
					title={restaurant.title}
					description={restaurant.short_description}
					identifier='origin'
					pinColor='#00ccbb'
				/>
			</MapView>

			<SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
				<Image
					source={{
						uri: 'https://links.papareact.com/wru'
					}}
					className='w-12 h-12 bg-gray-300 p-4 rounded-full ml-5'
				/>
				<View className='flex-1'>
					<Text className='text-lg'>Iordanidis Chris</Text>
					<Text className='text-gray-400'>Your Rider</Text>
				</View>
				<Text className='text-[#00ccbb] text-lg mr-5 font-bold'>
					Call
				</Text>
			</SafeAreaView>
		</View>
	);
}