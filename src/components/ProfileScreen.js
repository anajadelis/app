import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const profile = useSelector(state => state.profile);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>Name: {profile.name}</Text>
      <Text>Email: {profile.email}</Text>
    </View>
  );
};

export default ProfileScreen;
