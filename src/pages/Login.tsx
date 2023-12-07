import { Box, Button, ButtonText, Center, FormControl, Input, InputField, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'
import { Dimensions } from 'react-native'

const Login = () => {

    const {height, width } = Dimensions.get("screen");

  return (
    
    <Center bg='$blueGray900' h={height} w={width}>
      
    <FormControl p='$16'>
        <VStack space='xl'>
            <Input width={width - 50}>
                <InputField 
                type='text' 
                placeholderTextColor='$white' 
                color='$white'
                placeholder='E-mail'/>
            </Input>
            <Input width={width - 50}>
                <InputField 
                type='password' 
                placeholderTextColor='$white' 
                color='$white'
                placeholder='Password'/>
            </Input>
            <Center>
                <Button width={width -50}>
                    <ButtonText color="$white">Save</ButtonText>
                </Button>
            </Center>
         </VStack>
    </FormControl>
     


    </Center>
  )
}

export default Login