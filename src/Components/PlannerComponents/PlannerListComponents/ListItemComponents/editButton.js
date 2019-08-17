import React from 'react'
import { TouchableOpacity, Platform, StyleSheet, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// props = {
// setIsEditing(),
// type ,
// id
// }
const data = "check 3"

const EditButton = props => {
  return (
    <View style={styles.EditSpace}>
      <TouchableOpacity
        style={styles.EditButton}
        activeOpacity={0.7}
        onPress={()=> { props.id ? props.setIsEditing(true): ( console.log("submiting"), console.log("null null") ) }}
      >
        <Ionicons
        name={ props.id ?
          (Platform.OS === 'ios'
            ? `ios-create`
            : 'md-create')
            :
            (Platform.OS === 'ios'
              ? `ios-checkmark`
              : 'md-checkmark')
        }
        size={20}
        color={props.id ? 'dodgerblue' : 'gray'}
        />
      </TouchableOpacity>
    </View>
  )

}

const styles= StyleSheet.create({
  EditButton: {
    // backgroundColor: 'blue',
    width:20,

    alignItems: 'center',
    // padding: 2,
    margin: 4,
    marginTop: 0,
    justifyContent: 'flex-start',
  },
  EditSpace: {
    height: '100%'
  }

})

export default EditButton;