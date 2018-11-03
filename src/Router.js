import React, { Component} from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import { Actions } from 'react-native-router-flux';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth" initial>
                    <Scene 
                        key="login" 
                        component={LoginForm} 
                        title="Please Login" 
                        // initial={true} // FIXME remove this
                    />    
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => { Actions.employeeCreate() }}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees"
                        initial
                    />
                    <Scene
                        key="employeeCreate" 
                        component={EmployeeCreate} 
                        title="Employee Create"
                    />  
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;
