import {  string } from '../../../Resources';
import {images} from '../../../../public/material/Images/images'

export const props =  [
    {
      title: string.cash_gift,
      data: [
        {
          image: images.cash,
          title: string.cash_gift,
          description: string.send_gift_description,
          buttonText: string.contribute,
          onPress: () => console.log('Cash Gift Clicked'),
        },
      ],
    },
    {
      title: 'Special Contributions',
      data: [
        {
          image: images.honey_moon_trip,
          title: string.honeymoon_trip,
          description: '',
          goal: 5000,
          progress: 2500,
          buttonText: string.contribute,
          onPress: () => console.log('Honeymoon Trip Clicked'),
        },
      ],
    },
  ];