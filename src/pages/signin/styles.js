import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d',


    },
    containerHeader:{
        marginTop:"15%",
        marginBottom:"8%",
        paddingStart:"5%",

    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color:"#FFF",
        justifyContent: 'center',
        alignSelf: 'center',
        paddingRight: "10%"

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
        marginBottom: 5,
        paddingBottom: 5
        

    },
   

   
    button:{
        backgroundColor: '#38a69d',
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
        fontSize: 16,
        
    },
    buttonSign:{
        marginTop: 14,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'


    },
    buttonSignText:{
        color:"#a1a1a1",
        paddingLeft: 5

    },
    logIcons:{
        flexDirection:'row',
        alignItems: 'center',
        justifyItems: 'center',
        width: '90%'
        
    },
    goBack:{
        flexDirection:'row',
        backgroundColor: '#20716A',
        borderRadius: 8,
        padding: 3,
        width: "30%",
        marginBottom: 10
    },
    goBackText:{
        fontSize:17,
        paddingLeft:5,
        fontWeight:"bold",
        color:"#FFF",
        alignSelf: 'center',
        paddingLeft: '10%'

    },
    signUpContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"

    },
    eye:{
        
        alignSelf: 'flex-end', 
        paddingRight: 5,
        marginTop: 17,
        alignItems: 'center',
        position: 'absolute',
        width: '10%',
        marginBottom: 3
        
       
        

    },
    passwordContainer:{
        

        
    },
    input:{
        
        fontSize: 16,
        height: 40,
        marginBottom: 3,
        width: '90%'
    },
    inputEmail:{
        
        fontSize: 16,
        height: 40,
        marginBottom: 3,
        
    }
})