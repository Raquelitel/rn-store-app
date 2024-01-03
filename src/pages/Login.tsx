import React, { useEffect } from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../store-toolkit'
// import { useAppDispatch, useAppSelector } from '../store-redux'
import { AuthState } from '../types'
import { logIn } from '../store-toolkit/features/auth/auth.slice'

const Login = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector<AuthState>(state => state.auth);

  useEffect(() => {
    if(auth.isError) {
      Alert.alert('Error', 'Something was wrong')
    }
  }, [auth.isError])

  const handleSubmit = () => {
    dispatch(logIn({email: 'blabla@gmail.com', password: '23442323'}))
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