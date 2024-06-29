import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Button} from 'react-native';
export default function AddToDo( {submitHandler}) {
    const [text, setText] = useState('') // text sẽ track những gì user nhập vào
    //to keep track of what user input
    const changeHandler = (val) => {
        setText(val)
    }
    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder='what chu want to do??....'
            onChangeText={changeHandler}
            //onChangeText={(val) => changeHandler(val)}
            />
            <Button 
            onPress={() => submitHandler(text)}
            title='Add todo' 
            color='lightblue'
            />
        </View>
    )
}
const styles= StyleSheet.create({
   input:{
    marginBottom:10,
    paddingHorizontal:8,
    paddingVertical:6,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    borderRadius:8,
   }

})