import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Dimensions } from 'react-native';

function Airline(props) {
  const [onError, setOnError] = useState(false);
  const logoURI = props.res_data.hasOwnProperty("icao_code") && !props.res_data.icao_code.includes("*")
                  ? "https://content.airhex.com/content/logos/airlines_" + props.res_data.icao_code + "_200_200_s.png?proportions=keep"
                  : "https://content.airhex.com/content/logos/airlines_" + props.res_data.iata_code + "_200_200_s.png?proportions=keep";

  return (
    <TouchableHighlight
      onPress={()=>{
        props.navigation.navigate('AirlineDetail',{
          res_data: props.res_data,
          onError: onError,
        });
        console.log(onError);
      }}
      underlayColor='#BBBBBB'
      style={styles.button}
    >
      <View style={styles.buttonRow}>
        {!onError
          ? <Image style={styles.buttonImage} source={{uri: logoURI}} onError={() => {setOnError(true)}} />
          : <Image style={styles.buttonImage} source={require("../images/image_not_found_logo.png")} />
        }
        <Text style={styles.buttonTitle}>{props.res_data.name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  // Title
  button: {
    width: Dimensions.get("window").width - 30,
    height: 60,
    marginVertical: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  buttonRow : {
    flexDirection: 'row',
    height: 50,
    flex: 1
  },
  buttonImage: {
    height: 60,
    width: 60,
    resizeMode: "stretch",
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 18,
    marginHorizontal: 10,
    textAlign: 'left',
    flexShrink: 1,
  },
});

export default Airline;