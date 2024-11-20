import React,{useState} from 'react';
import {Button, StatusBar, View, Text, TextInput} from "react-native";
import {datasource} from "./Data.js";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [letter, setLetter] = useState('');
    const [letterType, setLetterType] = useState('Vowels');

    return (
        <View>
            <StatusBar/>
            <Text>Letter:</Text>
            <TextInput maxLength={1} style={{borderWidth: 1}} onChangeText={(text) => setLetter(text)} />
            <RNPickerSelect
                onValueChange={(value) => setLetterType(value)}
                items={[
                    {label:'Vowels', value:'Vowels'},
                    {label:'Consonants', value:'Consonants'},
                ]}
            />

            <Button
                title="Submit"
                onPress={() => {
                    let item = { key: letter };
                    let indexnum = 1;
                    if(letterType == 'Vowels'){
                        indexnum = 0;
                    }
                    datasource[indexnum].data.push(item);
                    navigation.navigate("Home");
                }}
            />
        </View>
    )
}

export default Add;
