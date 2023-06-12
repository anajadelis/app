import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchProfile } from '../store/actions';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleFetchProfile = () => {
    dispatch(fetchProfile());
    navigation.navigate('Profile');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Fetch Profile" onPress={handleFetchProfile} />
    </View>
  );
};

export default HomeScreen;
