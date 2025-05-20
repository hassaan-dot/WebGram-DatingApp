import {icons} from '../../../../public/material/icons/icons'
export const props = {
  screen_header: {
    event_name: 'Emma & John',
    service: 'Dinner Service at ',
    time: '6:30 PM',
    clock_icon:icons.clock
  },
  festivities: {
    title: 'Today’s Festivities',
    events: [
      {
        time: '4:00 PM',
        event: 'Guest Arrival',
        icon: icons.group_love,
        lineColor:"#F5169C",
        status: 'done',
      },
      {
        time: '5:00 PM',
        event: "Bride and Groom's Entrance",
        icon: icons.bride_and_groom,
        lineColor:"#F5169C",
        status: 'done',
      },
      {
        time: '5:30 PM',
        event: 'Nikah Ceremony',
        icon: icons.nikkah_diary,
        lineColor:"#F5169C",
        status: 'done',
      },
      {
        time: '6:30 PM',
        event: 'Dinner Service',
        details: 'Gourmet Delights Catering',
        icon: icons.folk_dish_spoon,
        status: 'done',
      },
      {
        time: '8:00 PM',
        event: 'Jashn (Celebration)',
        icon: icons.party_bumper,
        status: 'Up Next',
      },
      {
        time: '9:30 PM',
        event: 'Cake Cutting',
        icon: icons.cake,
        status: 'Up Next',
      },
      {
        time: '10:00 PM',
        event: 'Speeches and Toasts',
        icon: icons.love_talks,
        status: 'Up Next',
      },
      {
        time: '10:30 PM',
        event: 'Raqs (Dance)',
        details:
          'The Melody Makers: eclectic mix of classic hits and contemporary favorites',
        icon: icons.dance,
        status: 'Up Next',
      },
      {
        time: '12:00 AM',
        event: 'Farewell',
        icon: icons.farewell,
        status: 'Up Next',
      },
    ],
  },
};
