/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet,View, Text,TouchableOpacity, TextInput, Platform  } from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (

    <View style={styles.container}>

       <View style={styles.inputContainer}>

         <TextInput style={ styles.textStyle}  />

       </View>

       <View style={styles.listContainer}>

          <ListItem title="Todo List 1" statusColor="green" />

          <ListItem title="Todo List 2" statusColor="red" />

          <ListItem title="Todo List 3" statusColor="green" />

          <ListItem title="Todo List 4" statusColor="red" />

       </View>

       <TouchableOpacity style={styles.button} >

          <Text style={styles.buttonLabel} > Ekle </Text>

       </TouchableOpacity>

    </View>

  );

}


const ListItem=(props)=>{

return(	

  <View style={styles.listItemContainer} >

    <Text> {props.title} </Text>

    <TouchableOpacity 

       style={[styles.listItemButton,

             {backgroundColor:props.statusColor } ] } />

  </View>

)

}



const styles = StyleSheet.create({

container:{

  flex:1,

},

inputContainer:{

  flex:1,

  justifyContent:'flex-end',

  paddingLeft:16,

  paddingRight:16

},

listContainer:{

  flex:5,

  backgroundColor:'white'

},

button:{

  position:"absolute",

  bottom:0,

  left:0,

  right:0,

  height:48,

  alignItems: 'center',

  justifyContent: 'center',

  backgroundColor:'#009688',

},

buttonLabel:{

  fontSize:14,

  fontWeight:'bold',

  color:'#FFFFFF'

},

textStyle:{

  ...Platform.select({

      ios: {

        height:40, 

        paddingLeft:12, 

        borderWidth:1, 

        borderRadius:12

      },

      android:{

        

      }})

},

listItemContainer:{

  height:48,

  borderRadius:12,

  borderWidth:1,

  borderColor:'#979797',

  margin:14,

  position:'relative',



  flexDirection:'row',

  alignItems:'center',

  paddingLeft:31,

},

listItemButton:{

  position:'absolute',

  right:16,

  width:26,

  height:26,

  borderRadius:13,

}

});

export default App;
