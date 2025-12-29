
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const Dashboard = () => {
  const orders = [
    {
      id: 1,
      booking: "Booking no. 940",
      date: "Friday, 18 April 2025, 04:00 PM",
      user: "Vakas siddiqui (43 orders)",
      source: "",
      status: "Confirmed"
    },
    {
      id: 2,
      booking: "Booking no. 937",
      date: "Sunday, 20 April 2025, 10:00 AM",
      user: "Sultan Alzaabi (12 orders)",
      source: "Other",
      status: "Confirmed"
    },
  ];

  const slots = ["05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"];

  return (
    <ScrollView style={styles.container}>
      {/* Top Summary */}
      <View style={styles.topSummary}>
        <View>
          <Text style={styles.currency}>AED2</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.label}>Orders{'\n'}<Text style={styles.value}>1</Text></Text>
            <Text style={styles.label}>Bundle{'\n'}<Text style={styles.value}>0</Text></Text>
            <Text style={styles.label}>Abandoned{'\n'}<Text style={styles.value}>0</Text></Text>
            <Text style={[styles.label, { color: '#00FF7F' }]}>Today{'\n'}<Text style={styles.value}>0</Text></Text>
          </View>
        </View>
      </View>

      {/* Notification Card */}
      <View style={styles.notificationCard}>
        <Text style={styles.timeText}>Sent 3 hr ago</Text>
        <Text style={styles.title}>It’s Friday, get car wash now!</Text>
        <Text style={styles.message}>Fridays are for cleaning! Make sure your car is shiny! Order car wash now!</Text>
        <TouchableOpacity style={styles.sendNewBtn}>
          <Text style={styles.sendNewText}>Send new</Text>
        </TouchableOpacity>
      </View>

      {/* Slots */}
      <View style={styles.slotsContainer}>
        <Text style={styles.slotLabel}>Slots remaining today</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {slots.map((time, index) => (
            <TouchableOpacity key={index} style={styles.slotBtn}>
              <Text style={styles.slotText}>{time}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Orders Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tabBtn, styles.tabActive]}>
          <Text style={styles.tabTextActive}>New Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBtn}>
          <Text style={styles.tabText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBtn}>
          <Text style={styles.tabText}>Abandoned</Text>
        </TouchableOpacity>
      </View>

      {/* Orders List */}
      {orders.map((item) => (
        <View key={item.id} style={styles.orderItem}>
          <View>
            <Text style={styles.booking}>{item.booking}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.user}>{item.user}</Text>
            <Text style={styles.source}>Source: {item.source}</Text>
          </View>
          <Text style={styles.status}>{item.status}</Text>
        </View>
      ))}

      {/* See All Orders */}
      <TouchableOpacity style={styles.seeAllBtn}>
        <Text style={styles.seeAllText}>See all orders</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Dashboard;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111111',
    flex: 1,
    paddingHorizontal: 15,
  },
  topSummary: {
    marginTop: 30,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: '#444',
  },
  currency: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  label: {
    color: '#bbb',
    textAlign: 'center',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  notificationCard: {
    marginTop: 20,
    backgroundColor: '#1c1c1c',
    padding: 15,
    borderRadius: 10,
    position: 'relative',
  },
  timeText: {
    color: '#888',
    fontSize: 12,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },
  message: {
    color: '#ccc',
    marginTop: 5,
  },
  sendNewBtn: {
    backgroundColor: '#a259ff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    position: 'absolute',
    right: 15,
    top: 15,
  },
  sendNewText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  slotsContainer: {
    marginTop: 20,
  },
  slotLabel: {
    color: 'white',
    marginBottom: 10,
  },
  slotBtn: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  slotText: {
    color: 'white',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#2a2a2a',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#e6e6e6',
  },
  tabText: {
    color: 'white',
    fontWeight: '500',
  },
  tabTextActive: {
    color: 'black',
    fontWeight: 'bold',
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },
  booking: {
    color: 'white',
    fontWeight: 'bold',
  },
  date: {
    color: '#ccc',
    marginTop: 2,
  },
  user: {
    color: '#aaa',
    marginTop: 2,
  },
  source: {
    color: '#777',
    marginTop: 2,
  },
  status: {
    color: '#00ff7f',
    fontWeight: 'bold',
  },
  seeAllBtn: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 40,
  },
  seeAllText: {
    color: 'white',
    fontWeight: '600',
  },
});
