import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text style ={{
        backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 24,
      }}>Some text</Text>
      <View>
        <Text style ={{
          backgroundColor: 'yellow',
          textAlign: 'center',
          fontSize: 24,
        }}>Some more text</Text>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2013/07/13/13/56/tiger-161802_1280.png',
          }}
          style={{width: 400, height:400}}
        />
      </View>
      <Text style ={{
        backgroundColor: 'green',
        textAlign: 'center',
        fontSize: 24,
      }}> Third text </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'blue',
          borderWidth: 5,
          marginLeft: 10,
          marginTop: 10,
          marginRight: 10,
          paddingLeft: 10,
        }}
        defaultValue ="You can type in me"
      />
    </ScrollView>
  );
};

export default App;