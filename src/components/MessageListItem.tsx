import {
  IonItem,
  IonLabel,
  IonNote,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
  } from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <IonCard>
      <img src={message.image} />
      <IonCardHeader>
        <IonCardTitle>{message.fromName}</IonCardTitle>
        <IonCardSubtitle>{message.subject}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{message.date}</IonCardContent>
    </IonCard>
    </IonItem>
  );
};

export default MessageListItem;
