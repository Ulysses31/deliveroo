/* eslint-disable no-unused-vars */
/* eslint-disable node/no-unsupported-features/es-syntax */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({
	id,
	imgUrl,
	title,
	rating,
	genre,
	address,
	description,
	dishes,
	long,
	lat
}) {
	const navigation = useNavigation();
	const img = 'http://192.168.1.4:19000/assets/images/restaurants/' + imgUrl;

	return (
		<TouchableOpacity
			className='bg-white mr-3 shadow'
			onPress={() => {
				navigation.navigate('Restaurant', {
					id,
					imgUrl,
					title,
					rating,
					genre,
					address,
					description,
					dishes,
					long,
					lat
				});
			}}>
			<Image
				source={{ uri: img }}
				className='w-64 h-36 rounded-sm'
			/>
			<View className='px-3 pb-4 w-60'>
				<Text className='font-bold text-lg pt-2'>{title}</Text>
				<Text className='font-thin text-sm text-gray-400 mb-2'>
					{description}
				</Text>
				<View className='flex-row items-center space-x-1'>
					<StarIcon color='green' opacity={0.5} size={22} />
					<Text className='text-gray-500'>
						<Text className='text-green-500'>{rating}</Text> - {genre}
					</Text>
				</View>
				<View className='flex-row items-center space-x-1'>
					<MapPinIcon color='gray' opacity={0.4} size={22} />
					<Text className='text-xs text-gray-500'>
						Nearby - {address}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
