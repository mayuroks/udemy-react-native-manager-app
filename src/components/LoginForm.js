import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, MyButton, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        console.log(this.props.email);
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        console.log(text);
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        console.log('button pressed');
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large'/>
        }

        return(
            <MyButton onPress={this.onButtonPress.bind(this)}>
                Login
            </MyButton>
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeHolder="user@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeHolder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    >
                    </Input>
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
}

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);

const styles = {
    errorTextStyle: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    }
}