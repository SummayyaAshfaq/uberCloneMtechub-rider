import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';

///navigation variable
import {useNavigation} from '@react-navigation/native';

//////////////////////app components///////////////
import CustomTextInput from '../TextInput/CustomTextInput';
import CustomButtonhere from '../Button/CustomButton';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

////////////redux states//////////
import {useSelector, useDispatch} from 'react-redux';
import {
  setUpdateVehicleMenu,
  setUpdateCNICMenu,
} from '../../redux/UpdateProfileSlice';

const UpdateVehicleDetail = () => {
  ////////////////redux/////////////////
  const dispatch = useDispatch();

  ////////////////navigation state////////////
  const navigation = useNavigation();

  /////////////data states/////////////
  const [vehicle_type, setVehicle_Type] = useState('John');

  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: wp(0)}]}>
      <CustomTextInput
        type={'withouticoninput'}
        term={vehicle_type}
        view_widthset={85}
        textinput_widthset={67}
        //placeholder="Password"
        onTermChange={text => setVehicle_Type(text)}
        PlaceholderText={'Type of Vehicle'}
        focus={'true'}
      />
      <View style={styles.uploadiew}>
        <View style={styles.imageview}>
          <Image
            source={require("../../assets/images/UpdateProfile/Driver's_license.png")}
            style={styles.imagestyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.changebtn}>
          <Text style={styles.changebtntext}>Change</Text>
        </View>
      </View>
      <View style={styles.textview}>
        <Text style={styles.uploadviewtext}>
          Driving license image along with your face
        </Text>
      </View>

      <CustomButtonhere
        title={'Continue'}
        widthset={80}
        topDistance={22}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          dispatch(setUpdateVehicleMenu(false)),
            dispatch(setUpdateCNICMenu(true));
        }}
      />
    </SafeAreaView>
  );
};

export default UpdateVehicleDetail;
