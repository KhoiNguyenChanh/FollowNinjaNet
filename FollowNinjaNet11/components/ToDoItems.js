import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
//export default function ToDoItems( {props} ) {  //tùy, cách nào cũng dc, nhớ gọi cùng tên với bên kia
export default function ToDoItems({ item, pressHandler }) {
    {/* gọi props để có thể lấy dữ liệu từ bên chỗ khác qua*/ }
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <MaterialIcons name='delete' size={25} color='coral' />
            </TouchableOpacity>
            <Text style={styles.itemText}>{item.text}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'grey',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',

    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemText: {
        marginLeft: 10,
    }

})