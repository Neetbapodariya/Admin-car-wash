import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { TextInput, } from 'react-native';


const login = () => {
    const [Email, setEmail] = useState("")
    const [Password, setpassword] = useState("")
    const [Emailerror, setEmailerror] = useState("")
    const [Passworderror, setPassworderror] = useState("")
    const [userinfo, setuserinfo] = useState(undefined)
    const navigation = useNavigation()


    // const singin = async () => {
    //     await GoogleSignin.hasPlayServices()
    //     const info = await GoogleSignin.signIn()
    //     setuserinfo(info)
    //     console.log(info);
        
    // }
    const singin = async () => {
            await GoogleSignin.hasPlayServices();
            const info = await GoogleSignin.signIn();
            navigation.navigate('home')
            
            console.log("User Info:", info);
            setuserinfo(info);            
    };
    
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '338776486671-3ik8a1ivh9m0uc4ou5o7jjd6d64fm6no.apps.googleusercontent.com',
            scopes: ['email', 'profile'],
        })
    },[])

    const validate = () => {

        if (Email == ("")) {
            setEmailerror("Enter Email")
        }
        else if (!Email.includes("@")) {
            setEmailerror("enter the @")
        }
        else if (Email != Email.toLocaleLowerCase()) {
            setEmailerror("email must be in lowercase")
        }

        else if (Password.length != 6) {
            setPassworderror("Password must be exactly 6 digits");
        }
        else {
            navigation.navigate('home')
        }
    }

    return (

             <View style={styles.maincontainer}>

            <Text style={{ fontSize: 30, fontWeight: "900", color: "white" }}>Sing in</Text>
            <View style={styles.container}>
                <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>Email</Text>
                <TextInput
                    style={styles.textinput1}
                    placeholder='Enter your Email'
                    placeholderTextColor={"black"}
                    keyboardType='email-address'
                    value={Email}
                    onChangeText={(text) => {
                        setEmail(text)
                        if (text) {
                            setEmailerror("")
                        }
                    }} />
                {Emailerror ? <Text style={styles.error}>{Emailerror}</Text> : null}

                <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10, color: "white" }}>Password</Text>
                <TextInput
                    style={styles.textinput2}
                    placeholder='Enter your Password'
                    placeholderTextColor={"black"}
                    keyboardType='numeric'
                    secureTextEntry={true}
                    maxLength={6}
                    value={Password}
                    onChangeText={(text) => {
                        setpassword(text)
                        if (text.length == 6) {
                            setPassworderror("")
                        }
                    }} />
                {Passworderror ? <Text style={styles.error}>{Passworderror}</Text> : null}
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                    {/* <Checkbox
            value={check}
            onValueChange={setcheck}
            /> */}
                    <Text style={{ color: "white" }}>Remember me</Text>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: "bold", textDecorationLine: "underline", color: "white" }}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.loginbutton}>
                    <TouchableOpacity onPress={validate} style={{ width: "100%", alignItems: "center" }}>       //call only method
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linecontainer}>
                    <View style={styles.line} />
                    <Text style={styles.text}>Or sing in with</Text>
                    <View style={styles.line} />
                </View>

                <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "space-around", }}>
                    {
                        userinfo &&(
                            <View>
                                <Text style={{ color: "white" }}>{userinfo.user.name}</Text>
                                <Text style={{ color: "white" }}>{userinfo.user.email}</Text>
                            </View>)
                    }
                    <TouchableOpacity style={styles.logo} onPress={() => {
                        singin()
                    }}>
                        <Image source={require('./icon/google.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logo}>
                        <Image source={require('./icon/facebook.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logo}>
                        <Image source={require('./icon/apple-logo.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                </View>

                <View>
                </View>


                <View style={{ alignItems: "center", flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                        <TouchableOpacity>
                            <Text style={{ textDecorationLine: "underline", color: "#1BD887", fontWeight: "bold", color: "white" }}>Team & Condition</Text>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: "bold", color: "white" }}>and</Text>
                        <TouchableOpacity>
                            <Text style={{ textDecorationLine: "underline", color: "#1BD887", fontWeight: "bold", color: "white" }}>Privacy & Policy</Text>
                        </TouchableOpacity>
                        <Text style={{ fontWeight: "bold" }}>.</Text>
                    </View>
                </View>
            </View>
        </View>



    )
}

export default login;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: "#1a1a1a",

    },
    container: {
        marginTop: 40,
        flex: 1
    },
    textinput1: {
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: '#eeeee4',
        borderColor: '#eeeee4',
        color: "black"
    },
    textinput2: {
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: '#eeeee4',
        borderColor: '#eeeee4',
        color: "black"
    },
    button: {
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#1BD887",
        borderColor: "#1BD887"
    },
    linecontainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 30,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#eeeee4",
        marginHorizontal: 5
    },
    text: {
        fontWeight: '500',
        color: "white"
    },
    loginbutton: {
        backgroundColor: "#45d080",
        alignItems: "center",
        marginTop: 20,
        padding: 12,
        justifyContent: "center",
        borderRadius: 10,
        // marginHorizontal:100 
    },
    logo: {
        padding: 30,
        height: 20,
        width: 20,
        borderRadius: 100,
        backgroundColor: "white",
        elevation: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    error: {
        color: "red"
    }
})
