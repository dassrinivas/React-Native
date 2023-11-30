// ComposeButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ComposeButton = ({ onPress }) => (
  <TouchableOpacity style={styles.composeButton} onPress={onPress}>
    <Icon name="email-edit-outline" size={30} color="white" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  composeButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default ComposeButton;
