import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Navigation from './navigation';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const statusData = [
    {
        "status": "All",
        "type": "All"
    }, {
        "status": "Confirmed",
        "type": "Confirmed"
    }, {
        "status": "Started",
        "type": "Started"
    }, {
        "status": "On the way",
        "type": "Ontheway"
    }, {
        "status": "Completed",
        "type": "Completed"
    }, {
        "status": "Cancalled",
        "type": "Cancalled"
    }
]
const allorder = () => {
    const navigation = useNavigation()

    // const data = [`All${item.type}`, `Confirmed${item.type}`, `Started${item.type}`, `On the way${item.type}`, `Completed${item.type}`, `Cancalled${item.type}`]
    const [select, setselect] = useState('All')
    const [api, setapi] = useState()




    const apicall = async (item) => {

        const url = `https://washr.ae/sys/public/api/v1.0/admin/booking?page=1&type=${item.type}&search=`;

        let result = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer 1776856821b09073ba7017e20ff7df1d8b4a574cc74ff6c5d75b3b6838d22334272effee8e"
            }
        })
        result = await result.json()
        setapi(result.data)

    }
    useEffect(() => {
        apicall()

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "#1a1a1a", }}>
            <View style={{ backgroundColor: "#1a1a1a", flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity style={{ height: 50, width: 50, marginTop: 50, marginLeft: 10, borderRadius: 30, }}
                    onPress={() => navigation.goBack()}>
                    <Image source={require("./Images/arrow-right.png")} style={{ height: 40, width: 40 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, marginLeft: 30, marginTop: 40, marginLeft: 80, color: "white", fontWeight: "bold", textAlign: "center" }}>
                    All Orders
                </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
                <View style={{ marginTop: 10, alignItems: "center" }}>
                    <TextInput style={{ width: "95%", height: 50, backgroundColor: "#252225", borderWidth: 1, borderColor: "#1a1a1a", borderRadius: 20, color: "white" }} />
                </View>
                <View style={{}}>
                    <TouchableOpacity style={{ backgroundColor: "#1a1a1a", borderRadius: 20, left: "75%", bottom: 40, padding: 6, width: "20%" }}>
                        <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{}}>
                <ScrollView horizontal>
                    {
                        statusData.map((item, index) =>
                            <View>
                                <TouchableOpacity key={index} style={{}} onPress={() => { apicall(item); setselect(item.status) }} >
                                    <Text style={{ color: select == item.status ? "black" : "white", margin: 10, backgroundColor: select == item.status ? "white" : "#252225", borderWidth: 1, borderColor: "#252225", borderRadius: 5, padding: 8, bottom: 10 }} >{item.status}</Text>
                                </TouchableOpacity>
                            </View>)
                    }
                </ScrollView>
                {/* <FlatList
                        horizontal
                        data={data}
                        keyExtractor={( item,index)=>index.toString()}
                        renderItem={({item})=>
                            <View style={{margin:10}}>
                        <Text style={{color:"white"}}>{data}</Text>
                        </View>}/> */}
            </View>

            <View >
                <FlatList
                    data={api}
                    keyExtractor={(index) => index.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{ backgroundColor: "#1a1a1a", borderBottomWidth: 1, borderColor: "black", flex: 1, flexDirection: "row", padding: 10, marginBottom: 10 }}
                            onPress={() => navigation.navigate('details', { id: item.id })}>

                            <View style={{ flex: 1 }}>
                                <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>Booking no.{item.id}</Text>
                                <Text style={{ color: "white", fontSize: 12 }}>{dayjs(item.service_starts_at).format("dddd,MMM DD YYYY,hh:mm A")}</Text>
                                <Text style={{ color: "white", fontSize: 12, }}>{`${item.name} (${item.bookings} Order)`}</Text>
                                <Text style={{ color: "white", fontSize: 12, marginBottom: 20 }}>Source: {item.origin}</Text>
                            </View>
                            <View style={{ alignItems: "flex-end", justifyContent: "space-between", right: 5 }}>
                                <Text style={{ color: select == "Completed" ? "blue" : "#06c66a" }}>
                                    {item.booking_status}
                                </Text>
                                <Image source={require("./Images/arrow-right.png")} style={{ height: 40, width: 40, bottom: 20 }} />
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        </View>
    )
}

export default allorder;

