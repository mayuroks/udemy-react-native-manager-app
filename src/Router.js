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
                <Scene key="auth">
                    <Scene 
                        key="login" 
                        component={LoginForm} 
                        title="Please Login" 
                        // initial={true} // FIXME remove this
                    />    
                </Scene>
                <Scene key="main" initial>
                    <Scene
                        rightTitle="Add"
                        onRight={() => { Actions.employeeCreate() }}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees"
                        
                    />
                    <Scene
                        key="employeeCreate" 
                        component={EmployeeCreate} 
                        title="Employee Create"
                        initial
                    />  
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;
