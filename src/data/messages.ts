export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  image: string;
}

const messages: Message[] = [
  {
    fromName: 'Matt Chorsey',
    subject: 'New event: Trip to Vegas',
    date: '9:32 AM',
    id: 0,
    image: 'chicken.jpg',
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'Long time no chat',
    date: '6:12 AM',
    id: 1,
    image: 'alivechicken.jpg'
  },
  {
    fromName: 'Jordan Firth',
    subject: 'Report Results',
    date: '4:55 AM',
    id: 2,
    image: 'smallchicken.jpg'
  },
  {
    fromName: 'Bill Thomas',
    subject: 'The situation',
    date: 'Yesterday',
    id: 3,
    image: 'chickenhead.jpg'
  },
  {
    fromName: 'Joanne Pollan',
    subject: 'Updated invitation: Swim lessons',
    date: 'Yesterday',
    id: 4,
    image: 'chickenbody.jpg'
  },
  {
    fromName: 'Andrea Cornerston',
    subject: 'Last minute ask',
    date: 'Yesterday',
    id: 5,
    image: 'grilledchicken.jpg'
  },
  {
    fromName: 'Moe Chamont',
    subject: 'Family Calendar - Version 1',
    date: 'Last Week',
    id: 6,
    image: 'chickenslices.jpg'
  },
  {
    fromName: 'Kelly Richardson',
    subject: 'Placeholder Headhots',
    date: 'Last Week',
    id: 7,
    image: 'chick.jpg'
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
