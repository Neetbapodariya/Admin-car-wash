
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import dayjs from "dayjs";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    // const [orderData, setOrderData] = useState([]);
    const [data, setdata] = useState([])
    const [status, setstatus] = useState([])
    const [stats, setstats] = useState([])
    const [slots, setslots] = useState([])

    const [select, setselect] = useState("new")

    // const time = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"]

    const navigation = useNavigation();

    const Top = async () => {
        const url = "https://washr.ae/staging-sys/public/api/v1.0/admin/info_new?device_token=dc431c5abdcd2f802dabc6a127492de8b871cefc085d20e148e7c1fc82e5ada8&device_type=ios"
        let result = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer 1776856821b09073ba7017e20ff7df1d8b4a574cc74ff6c5d75b3b6838d22334272effee8e"
            }
        })
        result = await result.json()

        setstats(result.data.stats)
        setslots(result.data.slots)

    }


    // const top = [
    //     {
    //         header: "AED0",
    //         day: "Today",
    //         Order: "Order",
    //         Bundle: "Bundle",
    //         Abandoned: "Abandoned",
    //         Registrations: "Registrations",
    //         Ono: 10,
    //         Bno: 0,
    //         A: 10,
    //         R: 10
    //     },
    //     {
    //         header: "AED10",
    //         day: "Yesterday",
    //         Order: "Order",
    //         Bundle: "Bundle",
    //         Abandoned: "Abandoned",
    //         Registrations: "Registrations",
    //         Ono: 0,
    //         Bno: 0,
    //         A: 0,
    //         R: 0
    //     },
    //     {
    //         header: "AED196",
    //         day: "This month",
    //         Order: "Order",
    //         Bundle: "Bundle",
    //         Abandoned: "Abandoned",
    //         Registrations: "Registrations",
    //         Ono: 50,
    //         Bno: 70,
    //         A: 8,
    //         R: 60
    //     },
    //     {
    //         header: "AED110",
    //         day: "Last month",
    //         Order: "Order",
    //         Bundle: "Bundle",
    //         Abandoned: "Abandoned",
    //         Registrations: "Registrations",
    //         Ono: 740,
    //         Bno: 87,
    //         A: 645,
    //         R: 4
    //     },
    //     {
    //         header: "AED0",
    //         day: "This year",
    //         Order: "Order",
    //         Bundle: "Bundle",
    //         Abandoned: "Abandoned",
    //         Registrations: "Registrations",
    //         Ono: 0,
    //         Bno: 12,
    //         A: 0,
    //         R: 20
    //     },
    // ]

    // const order = [
    //   {
    //     name: "TV",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")

    //   },
    //   {
    //     name: "airport",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     image: require("./Images/arrow-right.png"),
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "laptop",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Mobile",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Ac",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Ac",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Ac",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "ffbsf",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   }
    // ]


    // const Completed = [
    //   {
    //     name: "febsjb",
    //     orders: " f d jdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "airport",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "laptop",
    //     orders: "sdcbdsjbvjdbjsa f d  ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Mobile",
    //     orders: "sdcbdsjbvjdbjsa f d jdjw ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Ac",
    //     orders: "sdcbdsjbvjdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Ac",
    //     orders: "sdcbdsjbvjdbj",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Ac",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "sfdsfbc",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     status: "Confirmed",
    //     icon: require("./Images/arrow-right.png")
    //   },
    // ]


    // const Abandoed = [
    //   {
    //     name: "sdbcsjbdcj",
    //     orders: " f d jdjhe jf qwe w ed w",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "aiskdnksdnrport",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "laptop",
    //     orders: "sdcbdsjbvjdbjsa f d  ed w",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Mobile",
    //     orders: "sdcbdsjbvjdbjsa f d jdjw ed w",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Ac",
    //     orders: "sdcbdsjbvjdjhe jf qwe w ed w",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Ac",
    //     orders: "sdcbdsjbvjdbj",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Ac",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     icon: require("./Images/arrow-right.png")
    //   },
    //   {
    //     name: "Ac",
    //     orders: "sdcbdsjbvjdbjsa f d jdjhe jf qwe w ed w",
    //     icon: require("./Images/arrow-right.png")
    //   },
    // ]

    const Neworder = async (item) => {
        const url = `https://washr.ae/staging-sys/public/api/v1.0/admin/booking?page=1&type=${item}&search=`
        let result = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': "Bearer 1776856821b09073ba7017e20ff7df1d8b4a574cc74ff6c5d75b3b6838d22334272effee8e"
            }
        });
        result = await result.json()
        setdata(result.data)
    }

    const Completed = async () => {
        const url = "https://washr.ae/staging-sys/public/api/v1.0/admin/booking?page=1&type=Completed&search="
        let result = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer 1776856821b09073ba7017e20ff7df1d8b4a574cc74ff6c5d75b3b6838d22334272effee8e"
            }
        })
        result = await result.json()
        setdata(result.data)

        // console.log(result);


    }

    const Abandoed = async () => {
        const url = "https://washr.ae/staging-sys/public/api/v1.0/admin/booking?page=1&type=Abandoned&search="
        let result = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer 1776856821b09073ba7017e20ff7df1d8b4a574cc74ff6c5d75b3b6838d22334272effee8e"
            }
        })
        result = await result.json()
        setdata(result.data)
    }


    useEffect(() => {
        Top()
        Neworder()

    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <FlatList
                        data={stats}
                        horizontal
                        pagingEnabled
                        keyExtractor={(index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ marginTop: 20, borderBottomWidth: 1, borderColor: "#232323", width: 340, margin: 10 }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "white", marginLeft: 10 }}>
                                        AED
                                    </Text>
                                    <Text style={{ color: "#06c66a", fontSize: 15, marginRight: 10, fontWeight: "bold", }}>
                                        {item.salesFor}
                                    </Text>
                                </View >
                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: "white", fontSize: 15 }}>
                                            Orders
                                        </Text>
                                        <Text style={{ color: "white", fontSize: 25 }}>
                                            {item.bookingsCount}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: "white", fontSize: 15 }}>
                                            Bundle
                                        </Text>
                                        <Text style={{ color: "white", fontSize: 25 }}>
                                            {item.bundlesCount}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: "white", fontSize: 15 }}>
                                            Abandoned
                                        </Text>
                                        <Text style={{ color: "white", fontSize: 25 }}>
                                            {item.abandoned}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: "white", fontSize: 15 }}>
                                            Registrations
                                        </Text>
                                        <Text style={{ color: "white", fontSize: 25, textAlign: "right" }}>
                                            {item.registrations}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                        } />
                </View>

                <View style={{ height: 100, backgroundColor: "#1a1a1a", flexDirection: "column", marginLeft: 10 }}>
                    <Text style={{ color: "white" }}>Sent 3 hr ago</Text>
                    <Text style={{ fontWeight: "bold", color: "white" }}>it's Friday,get car wash now!</Text>
                    <Text style={{ color: "white" }}>Fridays are for cleaning!Make sure your</Text>
                    <Text style={{ color: "white" }}>car is shiny!Order car wash now!</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: "#232323", }}>
                </View>
                <View style={{}}>
                    <TouchableOpacity
                        style={{
                            left: 260,
                            bottom: 90,
                            backgroundColor: "blue",
                            borderRadius: 20,
                            height: 40,
                            width: 85,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 14 }}>Send now</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: "#1a1a1a", bottom: 30, borderBottomWidth: 1, borderBottomColor: "#232323", }}>
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ fontWeight: "bold", marginLeft: 10, marginRight: 5, color: "white" }}>
                            Sloat
                        </Text>
                        <Text style={{ color: "white" }}>
                            remaining today
                        </Text>
                    </View>
                    <View style={{ marginBottom: 20, marginTop: 10, }}>

                        {/* {
                                slots.map((item, index) =>
                                    <TouchableOpacity key={index} style={{ borderWidth: 1, borderRadius: 5, marginLeft: 10, borderColor: "#3e3e3e" }}>
                                        <Text style={{ margin: 5, color: "white" }}>{item}</Text>
                                    </TouchableOpacity>)
                            } */}
                        <FlatList
                            horizontal
                            data={slots}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={{ borderWidth: 1, borderRadius: 5, marginLeft: 10, borderColor: "#3e3e3e", padding: 5 }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <Text style={{ color: "white" }}>{item.title}</Text>
                                        <Text style={{ color: "white", marginLeft: 5 }}>{item.value}</Text>
                                    </View>
                                </TouchableOpacity>}
                        />
                    </View>
                </View>
                <View style={{ backgroundColor: "#1a1a1a", bottom: 20, height: 100, borderBottomColor: "#232323", borderBottomWidth: 1 }}>
                    <Text style={{ color: "white", marginLeft: 10 }}>
                        New Registration
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", backgroundColor: "#1a1a1a", bottom: 20, marginTop: 10, marginLeft: 10 }}>
                        <TouchableOpacity style={{ borderWidth: 2, borderColor: "#262626", borderRadius: 15, backgroundColor: select == "new" ? "#d4d4d4" : "#262626", }} onPress={() => { Neworder(); setselect("new"); }} >
                            <Text style={{ margin: 10, fontWeight: "bold", textAlign: "center", color: select == "new" ? "black" : "#d5d5d5" }}>New Order</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={{ borderWidth: 2, borderColor: "#262626", borderRadius: 15, backgroundColor: select == "Completed" ? "#d4d4d4" : "#262626", marginLeft: 10 }} onPress={() => { Completed(); setselect("Completed") }}>
                            <Text style={{ margin: 10, fontWeight: "bold", textAlign: "center", color: select == "Completed" ? "black" : "#d5d5d5" }}>Completed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderWidth: 2, borderColor: "#262626", borderRadius: 15, backgroundColor: select == "Abandoed" ? "#d4d4d4" : "#262626", marginLeft: 10 }} onPress={() => { Abandoed(); setselect("Abandoed"); }}>
                            <Text style={{ margin: 10, fontWeight: "bold", textAlign: "center", color: select == "Abandoed" ? "black" : "#d5d5d5" }}>Abandoned</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* {
          orderData && (
            <View style={{flex:1}}> */}
                <View style={{ marginLeft: 10 }}>

                    <FlatList
                        data={data}
                        // ListEmptyComponent={()=>{
                        //     <Text>empty data</Text>
                        // }}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ height: 120 }}>
                                <Text style={{ backgroundColor: "#1a1a1a", color: "white", fontWeight: "bold" }}>Booking no.{item.id}</Text>
                                <Text style={{ backgroundColor: "#1a1a1a", color: "white", right: 11 }}>  {dayjs(item.service_starts_at).format(" dddd ,MMM DD YYYY, hh:mm A")}</Text>
                                <Text style={{ backgroundColor: "#1a1a1a", color: "white", right: 4 }} > {`${item.name}(${item.bookings}orders)`}</Text>
                                <Text style={{ backgroundColor: "#1a1a1a", color: "white", marginBottom: 20 }}>Source: {item.origin}</Text>
                                {select !== "Abandoed" && (
                                    <View style={{ left: 260, bottom: 100, }} >
                                        <Text style={{ color: select == "Completed" ? "blue" : "#06c66a", marginBottom: 10, fontSize: 15, fontWeight: "bold" }}>Confirmed</Text>
                                    </View>
                                )}
                                {/* {select!=="Abandoed" &&( */}
                                <View style={{ left: 265, bottom: 100 }}>
                                    <Image source={require("./Images/arrow-right.png")} style={{ height: 40, width: 40, marginLeft: 35, marginTop: 10 }} />
                                </View>
                                {/* )} */}
                            </View>
                        )}
                    />
                </View>
                <View style={{ backgroundColor: "#1a1a1a", justifyContent: "center", marginLeft: 10, marginBottom: 20 }}>
                    <TouchableOpacity style={{ width: 150, borderWidth: 2, height: 50, borderRadius: 20, justifyContent: "center", borderColor: "#232323", marginBottom: 20 }}
                        onPress={() => navigation.navigate('order')} >
                        <Text style={{ color: "#d5d5d5", textAlign: "center", fontSize: 15, fontWeight: "bold" }}>Seen all orders</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View >
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1a",
    }
})