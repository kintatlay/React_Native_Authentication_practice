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

class LoggedOut extends Component {

    render () {
        return (
            <View>
                <Text>Out</Text>
            </View>
        )
    }
}

export default LoggedOut;