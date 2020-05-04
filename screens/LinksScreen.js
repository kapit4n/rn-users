import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


function CurrentView({ current }) {
  return <View>
    {current.tasks.map(x => <Text>{x}</Text>)}
  </View>
}

export default function LinksScreen() {

  const data = [
    {
      id: 1,
      name: "Permissions",
      tasks: [
        { id: 1, title: "Create Permissions, Status: DONE" },
        { id: 2, title: "Update Permission, Status: TODO" },
        { id: 3, title: "Delete Permission, Status: TODO" },
        { id: 4, title: "List Permissions, Status: DONE" }
      ]
    },
    {
      id: 2,
      name: "Roles",
      tasks: [
        { id: 1, title: "Create Roles, Status: DONE" },
        { id: 2, title: "Update Role, Status: DONE" },
        { id: 3, title: "Delete Role, Status: TODO" },
        { id: 4, title: "List Roles, Status: DONE" },
        { id: 4, title: "Assign permission to role, Status: TODO" },
      ]
    },
    {
      id: 3,
      name: "Users",
      tasks: [
        { id: 1, title: "Create Users, Status: DONE" },
        { id: 2, title: "Update User, Status: DONE" },
        { id: 3, title: "Delete User, Status: DONE" },
        { id: 4, title: "List Users, Status: TODO" },
        { id: 4, title: "User Profile, Status: TODO" },
        { id: 4, title: "Assign user role, Status: TODO" },
      ]
    },

  ]

  const [current, setCurrent] = React.useState(data[0]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {data.map(x => {
        return <OptionButton
          icon="md-star"
          label={x.name}
          onPress={() => setCurrent(x)}
        />
      })}

      <FlatList
        data={current.tasks}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      ></FlatList>
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
