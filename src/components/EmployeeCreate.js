import React, { Component } from 'react';
import { View , Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, MyButton, Spinner } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeHolder="Employee Name"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeHolder="+91 9653129388"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>

                <CardSection
                    style={{ flexDirection: 'column' }}
                >
                    <Text style={styles.pickerTextStyle} >Select a shift</Text>
                    <Picker
                        style={{ flex: 1, paddingTop: 25, paddingBottom: 25, paddingLeft: 15 }}
                        itemStyle={{ paddingLeft: 15, alignItems: 'flex-end', justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
                    >
                        <Picker.Item label="Monday" value="mon" />
                        <Picker.Item label="Tuesday" value="tue" />
                        <Picker.Item label="Wednesday" value="wed" />
                        <Picker.Item label="Thursday" value="thu" />
                        <Picker.Item label="Friday" value="fri" />
                        <Picker.Item label="Saturday" value="sat" />
                        <Picker.Item label="Sunday" value="sun" />
                    </Picker>
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

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    pickerContainerStyle: {
        flexDirection: 'column'
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);