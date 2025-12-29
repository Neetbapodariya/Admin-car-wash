
import { useNavigation, useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';

const Details = () => {
    const navigation = useNavigation()
    const route = useRoute();
    const [Api, setapi] = useState([])

    const api = async () => {
        const url = `https://washr.ae/sys/public/api/v1.0/admin/booking/view?booking_id=${route.params.id}`
        let result = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer 1776856821b09073ba7017e20ff7df1d8b4a574cc74ff6c5d75b3b6838d22334272effee8e"
            }
        })
        result =  result.json()
        setapi(result.data)
    }
    useEffect(() => {
        api()
    }, [])


    
      
    return (
        <View style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
            <View style={{ flexDirection: "row", margin: 10, top: 30 }}>
                <TouchableOpacity style={{}}
                    onPress={() => navigation.goBack('order')}>
                    <Image source={require("./Images/arrow-right.png")} style={{ height: 40, width: 40 }} />
                </TouchableOpacity>
                <View style={{ justifyContent: "center", flex: 1 }}>
                    <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "white" }}>
                        Booking no:{route.params.id}
                    </Text>
                </View>
            </View>

            <View style={{ marginTop: 75, margin: 20, backgroundColor: "#1a1a1a", flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
                    Booking no:{route.params.id}
                </Text>
                {/* { Api==item.status&&(  */}
                <View style={{}}>
                    <Text style={{ color: Api.booking_status === "Completed" ? "blue" : "red", fontWeight: "bold" }}>
                        {Api.booking_status}
                    </Text>
                </View>
                 {/* )}  */}
            </View>

            {/* {Api.length > 0 &&( */}
            <View style={{ margin: 20 }}>
                {Api.comments && (
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Contact: </Text>
                        <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{Api.comments}</Text>
                    </View>)}
                {Api.service_starts_at && (
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Time: </Text>
                        <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{dayjs(Api.service_starts_at).format("dddd,DD MMMM YYYY,hh:mm A")}</Text>
                    </View>)}
                {Api.model && (
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Car maker: </Text>
                        <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{Api.model}</Text>
                    </View>)}
                <View style={{ flexDirection: "row", }}>
                    <Text style={{ fontWeight: "bold", color: "white" }}>Car details: </Text>
                    <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{`Plate no.${Api.plate_no} Color:${Api.color}`}</Text>
                </View>
                {Api.service && (
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ flexShrink: 0, fontWeight: "bold", color: "white" }}>service: </Text>
                        <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{Api.service}</Text>
                    </View>)}
                {Api.address && (
                    <View style={{ flexDirection: "row", height: 35 }}>
                        <Text style={{ flexShrink: 0, fontWeight: "bold", color: "white" }}>Address: </Text>
                        <Text style={{ flex: 1, color: "white", fontWeight: "200" }}>{Api.address}</Text>
                    </View>)}
                {Api.user_name && (
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Customer: </Text>
                        <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{Api.user_name}</Text>
                    </View>)}
                {Api.origin && (
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Origin: </Text>
                        <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{Api.origin}</Text>
                    </View>)}
                {Api.user_mobile && (
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Contact: </Text>
                        <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{Api.user_mobile}</Text>
                    </View>)}
                {Api.user_email && (
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Email: </Text>
                        <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{Api.user_email}</Text>
                    </View>)}
                {Api.bookings && (
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ fontWeight: "bold", color: "white" }} >No. of Orders: </Text>
                        <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{Api.bookings}</Text>
                    </View>)}
                {Api.origin && (
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Source: </Text>
                        <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{Api.origin}</Text>
                    </View>)}
                {Api.amount && (
                    <View style={{ flexDirection: "row", marginTop: 30 }}>
                        <Text style={{ fontWeight: "bold", color: "white" }}>Total Paid: </Text>
                        <Text style={{ flexShrink: 1, color: "white", fontWeight: "200" }}>{`AED${Api.amount}`}</Text>
                    </View>)}
            </View>
            {/* )} */}


            {/* <View>

                {Api ? (

                    <View style={{ margin: 20, }}>
                        <Text style={{ marginBottom: 5 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Contact: </Text>{Api.user_mobile}
                        </Text>
                        <Text style={{ marginBottom: 5 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Name: </Text>{Api.user_name}
                        </Text>
                        <Text style={{ marginBottom: 5 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Origin: </Text>{Api.origin}
                        </Text>
                        <Text style={{ marginBottom: 5 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Modle: </Text>{Api.model}
                        </Text>
                        <Text style={{ marginBottom: 5 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Email: </Text>{Api.user_email}
                        </Text >
                        <Text style={{ marginBottom: 5,  }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Address: </Text>{Api.address}
                        </Text>
                        <Text style={{ marginBottom: 5 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Bookings: </Text>{Api.bookings}
                        </Text>
                        <Text >
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Rating: </Text>{Api.rating}
                        </Text>
                    </View>
                ) : null}
            </View> */}

            <View style={{ flexDirection: "column", margin: 10, marginTop: 100 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                    <TouchableOpacity style={{ backgroundColor: "#1a1a1a", borderRadius: 30, padding: 10, width: 150, borderWidth: 1, borderColor: "#383337" }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>Send WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#1a1a1a", borderRadius: 30, alignItems: "center", padding: 10, width: 150, borderWidth: 1, borderColor: "#383337" }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>See Location</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: "#1a1a1a", borderRadius: 30, padding: 10, width: 150, borderWidth: 1, borderColor: "#383337" }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>Call Customer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#1a1a1a", borderRadius: 30, padding: 10, width: 150, borderWidth: 1, borderColor: "#383337" }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}>Sent Push</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Details;

