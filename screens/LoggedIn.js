import React, { Component } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Button,
  TextInput
} from 'react-native'
import firebase from 'react-native-firebase'
import LoggedOut from './LoggedOut'

class LoggedIn extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        console.log(this.props.phone);
        if (!this.props.loggedIn) {
            return <LoggedOut />
        }
        return (
            <View>
            <Text>Hello</Text>
                <Button title="logout" onPress={() => firebase.auth().signOut()}>
                    Log Out
                </Button>
            </View>
        )
    }
}

export default LoggedIn;