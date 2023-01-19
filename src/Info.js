import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Info = () => (
  <Card style={{marginTop:10 , height:500}}>
    <Card.Title title="React Native"   />
    <Card.Content>
    
      <Text variant="bodyMedium">React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.

Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.</Text>
    </Card.Content>
    <Card.Cover style={{marginTop:40 }} source={{ uri: 'https://d33wubrfki0l68.cloudfront.net/d74da08f08b4a17c368b58d36ee23c368b4a6819/fff62/img/homepage/phones.png' }} />
    <Card.Actions>
     
    </Card.Actions>
  </Card>
);

export default Info;