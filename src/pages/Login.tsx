import React, { useEffect } from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../store'
import { AuthActionTypes } from '../enums'
import { login } from '../store/actions/auth'
import { AuthState } from '../types'

const Login = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector<AuthState>(state => state.auth);

  useEffect(() => {
    if(auth.isError) {
      Alert.alert('Error', 'Something went wrong')
    }
  }, [auth.isError])

  const handleSubmit = () => {
    dispatch(login({email: 'blabla@gmail.com', password: '23442323'}))
  }
  return (
    <View style={styles.container}>
      <Button color='#1F7A8C' title='Click to Login' onPress={handleSubmit}/>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});