<<<<<<< HEAD
import { ImageBackground, StatusBar, StyleSheet, Text, View, FlatList, Dimensions, Animated } from 'react-native';
import React, {useState, useRef} from 'react';
import { Colors } from '../constants';
import Buttons from '../components/Buttons';
import { slides } from '../data/slides';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const renderItem = ({ item }) => (
   <View style={{ width, height, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#fff', paddingTop: 50 }}>
    <ImageBackground source={item.image} style={{ width: '100%', height: height * 0.4 }} resizeMode="cover" />
    <Text style={{ fontSize: 30, fontWeight: 'bold', color: Colors.black, marginTop: 20 }}> {item.title} </Text>
    <Text style={{ fontSize: 18, color: '#777', textAlign: 'center', marginTop: 10, paddingHorizontal: 30 }}>
    {item.description} </Text>
  </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Onboarding Screens */}
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />

      {/* Nút Indicator & Get Started */}
      <View style={{ position: 'absolute', bottom: 50, width, alignItems: 'center' }}>
        {/* Dots Indicator */}
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          {slides.map((_, index) => {
            const opacity = scrollX.interpolate({
              inputRange: [ (index - 1) * width, index * width, (index + 1) * width, ],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: Colors.black,
                  marginHorizontal: 5,
                  opacity,
                }}
              />
            );
          })}
        </View>

        {/* Nút Get Started */}
        {currentIndex === slides.length - 1 && (
          <Buttons btn_text="Get Started" on_press={() => navigation.navigate('Login')} />
        )}
      </View>
    </View>
  );
};

export default OnboardingScreen;
=======
import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../constans'
import Buttons from '../components/Buttons'


const Onboarding = ({navigation}) => {

  return (
    <View style={{flex:1, backgroundColor:Colors.white}}>
      <StatusBar barStyle='dark-content' backgroundColor='#fff'/>

      {/*Welcome Image*/}
      <View style={{flex:3, flexDirection:'column', backgroundColor:'#ddd'}}>
        <ImageBackground source={require('../assets/images/demo-event-image.png')}
        style={{flex:1, width:'100%', backgroundColor:'#fff'}}/>
      </View>

      {/*Button and text*/}
      <View style={{flex:2, backgroundColor:'#fff'}}>
        {/*Text*/}
        <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start', alignItems:'center', backgroundColor:'#fff'}}>
          <Text style={{fontFamily:'OpenSans-Bold', color:Colors.black, fontSize:40}}>Welcome!</Text>
          <Text style={{maxWidth:'80%', fontFamily:'OpenSans-Medium', color:'#999', fontSize:18, textAlign:'center',
          paddingTop:10}}> Welcome to Onboarding Screen.</Text>
        </View>

        {/*Button*/}
        <View style={{flex:1, flexDirection:'column', justifyContent:'flex-end', alignItems:'center'}}>
          <Buttons btn_text={"Get Started"} on_press={()=>navigation.navigate("Login")}/>
        </View>
      </View>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({})
>>>>>>> fa0f06121e01f92ac7f3f0adc9594351ab001f13
