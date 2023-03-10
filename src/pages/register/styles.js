import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#20716A',


    },
    containerHeader:{
        marginTop:"15%",
        marginBottom:"8%",
        paddingStart:"5%"

    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color:"#FFF"

    },
    containerForm:{
        backgroundColor:'#FFF',
        flex: 1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingTop: 15
        

    },
    title:{
        fontSize: 28,
        paddingLeft: 5,
        

    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: '#20716A',
        height: 40,
        marginBottom: 8,
        fontSize: 16

    },
    button:{
        backgroundColor: '#20716A',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText:{
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 16
        
    },
    buttonSign:{
        marginTop: 14,
        alignSelf: 'center'



    },
    buttonSignText:{
        color:"#a1a1a1",
        paddingBottom: 10

    },
    goBack:{
        flexDirection:'row',
        backgroundColor: '#970907',
        borderRadius: 8,
        padding: 3,
        width: "32%",
        marginBottom: 10,
        
    },
    goBackText:{
        fontSize:17,
        fontWeight:"bold",
        color:"#FFF",
        alignSelf: 'center',
        paddingLeft: 4

    },
    signUpContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"

    },
    logIcons:{
        flexDirection:'row',
        alignItems: 'center',
        justifyItems: 'center'
    },
    termsTitle:{
        fontWeight:"bold",
        fontSize: 14
    },
    terms:{
        fontStyle:"italic",
        
    },
    termsContainer:{
        backgroundColor:"#a1a1a1",
        borderRadius: 8,
        justifyContent: "center",
        padding: 5
    }
})