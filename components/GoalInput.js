import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText)=>{
        setEnteredGoal(enteredText)
      };

      const addGoalhandler = () =>{
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
      }
    return (
      <Modal visible ={props.visible} animationType ='slide'>
          <View style={styles.inputContainer}> 
          <TextInput  placeholder='Enter course goals' 
          style = {styles.input} 
          onChangeText = {goalInputHandler}
          value = {enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}> 
            <Button title='ADD' onPress = {addGoalhandler} /> 
            </View>
            <View style={styles.buttons}> 
            <Button title ='Cancel'  onPress = {props.onCancel} color ='red' />
            </View>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer :{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      input :{
        width:'80%' ,
        borderColor:'black', 
        borderWidth: 1,
        padding: 10,
        marginBottom : 10 
      },
      buttonContainer :{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        // for justifyContent to work a width has to be defined
        width : '60%'
      },
      buttons:{
        width: '40%'
      }    
})

export default GoalInput;
