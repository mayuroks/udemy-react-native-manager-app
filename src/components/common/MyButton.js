import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CardSection } from './CardSection';

const MyButton = (props) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
                <Text style={textStyle}>
                    {props.children}
                </Text>
        </TouchableOpacity>
    );
};


const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export { MyButton };
