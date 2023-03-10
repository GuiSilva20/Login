import { StyleSheet } from "react-native";




export const styles = StyleSheet.create({
    container:{
        
        flex: 1,
        backgroundColor: '#38a69d',
        
    
    },
    containerLogo:{
        flex: 1,
        backgroundColor: '#38a69d',
        justifyContent:'center',
        alignItems:'center'
        
    },
    containerForm:{
        flex: 1,
        backgroundColor:'#FFF',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
        


    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12
    },
    text:{
        color:"#a1a1a1",
        alignSelf: 'center',
        marginTop: 50
        
    },
    button:{
        position:'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        borderColor: "#81ECE3",

    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:"#FFF"
    },
    buttonLng:{
            
            alignItems:'center',
            
            borderWidth: 2,
            borderRadius: 25,
            margin: 2,
            padding: 4,
            

        
    },
    lng:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:55,
        padding:5
        
    },
    lngText:{
        fontWeight: 'bold',
        fontSize: 14,
    }
  })