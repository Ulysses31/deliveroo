/* eslint-disable no-unused-vars */
/* eslint-disable node/no-unsupported-features/es-syntax */
import { Image, Text, TouchableOpacity } from 'react-native';

export default function CategoryCard({ imgUrl, title }) {
	const img = 'http://192.168.1.4:19000/assets/images/' + imgUrl;
	return (
		<TouchableOpacity className='relative mr-2'>
			<Image
				source={{ uri: img }}
				className='h-20 w-20 rounded'
			/>
			<Text className='absolute bottom-1 left-1 text-white font-bold'>
				{title}
			</Text>
		</TouchableOpacity>
	);
}