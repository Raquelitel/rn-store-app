import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useAuthentication } from '../store/auth/hooks/useAuthentication';

const Login = () => {

  const {logIn} = useAuthentication();
  

  const onHandlerForm = () => {
    logIn({email: 'usuario@usuario.com', password: '1234'});
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title='Login' onPress={onHandlerForm}/>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});