import React, { Component } from 'react';
import { View , Text } from 'react-native';
import { Card, CardSection, Input, MyButton, Spinner } from './common';

class EmployeeCreate extends Component {
    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeHolder="Employee Name"
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeHolder="+91 9653129388"
                    />
                </CardSection>
                <CardSection>
                    <MyButton>
                        Create
                    </MyButton>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;