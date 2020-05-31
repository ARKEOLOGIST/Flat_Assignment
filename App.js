import React from 'react';
import { Text, View,FlatList } from 'react-native';

export default function App() {
  return (

    <FlatList
     data={[{title: 'A', key: '1'},{title: 'B', key: '2'},{title: 'C', key: '3'},{title: 'D', key: '4'},{title: 'E', key: '5'},{title: 'F', key: '6'}]}
     renderItem={({item}) => (
      <View style={{margin: 1,height: 225,flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: 'maroon',color: 'white'}}>
        <Text>{item.title}</Text>
      </View>
     )}
     numColumns={2}
     />
  );
}
