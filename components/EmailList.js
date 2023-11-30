import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { List, Avatar, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RectButton, ScrollView, Swipeable } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import moment from 'moment';

const emails = [
  { id: '1', sender: 'Srinivas', subject: 'Meeting Tomorrow', snippet: 'Hey, let\'s discuss the agenda...' },
  { id: '2', sender: 'Saravana', subject: 'Project Update', snippet: 'Attached is the latest report...' },
  { id: '3', sender: 'Vishnu', subject: 'Meeting Tomorrow', snippet: 'Hey, let\'s discuss the agenda...' },
  { id: '4', sender: 'Mani', subject: 'Project Update', snippet: 'Attached is the latest report...' },
  { id: '5', sender: 'Ravi', subject: 'Meeting Tomorrow', snippet: 'Hey, let\'s discuss the agenda...' },
  { id: '6', sender: 'Ram', subject: 'Project Update', snippet: 'Attached is the latest report...' },
  { id: '7', sender: 'Prawin', subject: 'Meeting Tomorrow', snippet: 'Hey, let\'s discuss the agenda...' },
  { id: '8', sender: 'Arul', subject: 'Project Update', snippet: 'Attached is the latest report...' },
  { id: '9', sender: 'Felix', subject: 'Meeting Tomorrow', snippet: 'Hey, let\'s discuss the agenda...' },
  { id: '10', sender: 'Adhnan', subject: 'Project Update', snippet: 'Attached is the latest report...' },
  { id: '11', sender: 'Bala', subject: 'Meeting Tomorrow', snippet: 'Hey, let\'s discuss the agenda...' },
  { id: '12', sender: 'Hari', subject: 'Project Update', snippet: 'Attached is the latest report...' },
  { id: '13', sender: 'John Doe', subject: 'Meeting Tomorrow', snippet: 'Hey, let\'s discuss the agenda...' },
  { id: '14', sender: 'Jane Smith', subject: 'Project Update', snippet: 'Attached is the latest report...' },
];

const EmailList = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const renderRightActions = (progress) => {
    const backgroundColor = progress.interpolate({
      inputRange: [0, 1],
      outputRange: ['#fff', 'rgb(68, 229, 100)'],
    });

    return <Animated.View style={[styles.rightActions, { backgroundColor: 'green' }]} />;
  };

  const renderEmailItem = ({ item }) => {
    const formattedTime = moment().subtract(item.id, 'hours').format('hh:mm A'); // Adjust time based on item ID
    return (
      <Swipeable renderRightActions={(_, dragX) => renderRightActions(dragX)}>
        <RectButton style={styles.emailItem}>
          <List.Item
            title={item.sender}
            description={`${item.subject}\n${item.snippet}`}
            left={() => (
              <Avatar.Text
                size={40}
                label={item.sender[0].toUpperCase()}
              />
            )}
            titleStyle={styles.sender}
            descriptionStyle={styles.description}
          />
          <View style={styles.rightIconsContainer}>
            <Text style={styles.timeText}>{formattedTime}</Text>
            <Icon
              name="star"
              size={20}
              color="yellow"
              style={styles.starIcon}
            />
          </View>
        </RectButton>
      </Swipeable>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <Searchbar
            placeholder="Search in mail"
            placeholderTextColor="black"
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
            style={styles.searchBar}
            icon={() => (
              <View style={styles.iconContainer}>
                <Icon
                  name="menu"
                  size={30}
                  color="black"
                  onPress={() => console.log('Open main menu')}
                  style={styles.menuIcon}
                />
              </View>
            )}
            clearIcon={() => (
              <Icon
                name="account-circle"
                size={30}
                color="#93EC9C"
                onPress={() => console.log('Open profile')}
                style={styles.profileIcon}
              />
            )}
          />
        </View>
        <FlatList data={emails} keyExtractor={(item) => item.id} renderItem={renderEmailItem} />
        <TouchableOpacity style={styles.composeButton} onPress={() => console.log('Compose Mail')}>
          <Icon name="email-edit-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  emailItem: {
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  sender: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: 'black',
    fontSize: 14,
  },
  rightIconsContainer: {
    flexDirection: 'column', // Change to column direction
    alignItems: 'flex-end', // Align items to the right
    marginTop: 5,
    position: 'absolute',
    right: 10,
    top: 0, // Adjust top value to position the time text
  },
  timeText: {
    color: 'gray',
    fontSize: 12,
  },
  starIcon: {
    marginLeft: 10,
    marginTop: 5, // Adjust marginTop to create space between time text and star icon
  },
  searchBarContainer: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#F4F1F7',
    marginBottom: 10,
    overflow: 'hidden',
  },
  searchBar: {
    marginLeft: 10,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  menuIcon: {
    borderRadius: 8,
  },
  profileIcon: {
    borderRadius: 8,
  },
  rightActions: {
    flex: 1,
  },
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

export default EmailList;
