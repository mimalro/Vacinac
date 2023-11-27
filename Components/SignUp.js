import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import {Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio} from 'native-base'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function SignUp(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bgPattern.png')} style={{width: '100%', height: '100%'}}>
        <ScrollView>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Registro</Text>
      </View>

        {/*Username */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as = {<FontAwesome5 name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color:"black",
                  }}
                  _dark={{
                    color:"gray.300",
                  }}
                />
              }
              variant="rounded"
              placeholder='Nome de usuário'
              _light={{
                placeholderTextColor : "black.400",
              }}
              _dark={{
                placeholderTextColor : "black.500"
              }}
            />
          </View>
        </View>
        {/*Email Field */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as = {<MaterialCommunityIcons name='email'/>}
                  size="sm"
                  m={2}
                  _light={{
                    color:"black",
                  }}
                  _dark={{
                    color:"gray.300",
                  }}
                />
              }
              variant="rounded"
              placeholder='Email'
              _light={{
                placeholderTextColor : "black.400",
              }}
              _dark={{
                placeholderTextColor : "black.50"
              }}
            />
          </View>
        </View>
        {/*Password */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as = {<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color:"black",
                  }}
                  _dark={{
                    color:"gray.300",
                  }}
                />
              }
              variant="rounded"
              secureTextEntry={true}
              placeholder='Senha'
              _light={{
                placeholderTextColor : "black.400",
              }}
              _dark={{
                placeholderTextColor : "black.50"
              }}
            />
          </View>
        </View>
        {/*Repeat Password */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as = {<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color:"black",
                  }}
                  _dark={{
                    color:"gray.300",
                  }}
                />
              }
              variant="rounded"
              secureTextEntry={true}
              placeholder='Repetir Senha'
              _light={{
                placeholderTextColor : "black.400",
              }}
              _dark={{
                placeholderTextColor : "black.50"
              }}
            />
          </View>
        </View>
        {/*CEP */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as = {<MaterialCommunityIcons name='google-maps'/>}
                  size="sm"
                  m={2}
                  _light={{
                    color:"black",
                  }}
                  _dark={{
                    color:"gray.300",
                  }}
                />
              }
              variant="rounded"
              placeholder='CEP'
              _light={{
                placeholderTextColor : "black.400",
              }}
              _dark={{
                placeholderTextColor : "black.50"
              }}
            />
          </View>
        </View>

        {/*endereço */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as = {<MaterialCommunityIcons name='google-maps'/>}
                  size="sm"
                  m={2}
                  _light={{
                    color:"black",
                  }}
                  _dark={{
                    color:"gray.300",
                  }}
                />
              }
              variant="rounded"
              placeholder='Endereço'
              _light={{
                placeholderTextColor : "black.400",
              }}
              _dark={{
                placeholderTextColor : "black.50"
              }}
            />
          </View>
        </View>
        {/*Cidade */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as = {<MaterialCommunityIcons name='google-maps'/>}
                  size="sm"
                  m={2}
                  _light={{
                    color:"black",
                  }}
                  _dark={{
                    color:"gray.300",
                  }}
                />
              }
              variant="rounded"
              placeholder='Cidade'
              _light={{
                placeholderTextColor : "black.400",
              }}
              _dark={{
                placeholderTextColor : "black.50"
              }}
            />
          </View>
        </View>

        {/*Bairro*/}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as = {<MaterialCommunityIcons name='google-maps'/>}
                  size="sm"
                  m={2}
                  _light={{
                    color:"black",
                  }}
                  _dark={{
                    color:"gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder='Bairro'
              _light={{
                placeholderTextColor : "black.400",
              }}
              _dark={{
                placeholderTextColor : "black.50"
              }}
            />
          </View>
        </View>

        <View style={styles.text2}>
        <Text>Já possui uma conta? </Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Text style={styles.signupText}>Entre</Text>
        </TouchableOpacity>
      </View>
        {/* Button */}
        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign}>
            Registrar
          </Button>

        </View>
        {/* Line */}

        <View style={styles.lineStyle}>
              <View style={{flex:1, height: 1, backgroundColor:'black'}} />
              <View>
                  <Text style={{width:50, textAlign: 'center'}}>Ou</Text> 
              </View>
              <View style={{flex:1, height:1, backgroundColor: 'black'}} />
        </View>

        {/* Box */}

      <View style ={styles.boxStyle} >  
                <Box
                onPress ={()=> navigation.navigate ("#")}
                style={{height: 80, width:80, marginLeft: 20}}
                shadow={3}
                _light={{
                    backgroundColor:"gray.50",
                }}
                _dark={{
                    backgroundColor:"gray.700",
                }}>
                    <AspectRatio ratio={1/1}>
                        <Image
                        roundedTop={"lg"}
                        source={{
                            uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
                        }}
                        alt='image'

                        />
                    </AspectRatio>

                </Box>

            </View>
            </ScrollView>
            </ImageBackground>
      </View>
  )
}

export default ()=>{
  return(
    <NativeBaseProvider>
        <SignUp/>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  LoginText:{
    marginTop:100,
    fontSize:30,
    fontWeight:'bold',
  },
  Middle:{
    alignItems: 'center',
    justifyContent:'center'
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5,
  },
  signupText:{
    fontWeight:'bold'
  },
  emailInput:{
    marginTop:10,
    marginLeft:5,
    borderRadius:20,
    backgroundColor: '#E3E3E3',
    borderColor: '#FFFFFF'
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15,
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15,
  },
  buttonDesign:{
    backgroundColor: '#BFB2D7',
    borderRadius: 15
  },
  lineStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center'
  },
  boxStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    justifyContent:'space-around'
  }

})