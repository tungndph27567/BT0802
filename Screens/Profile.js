import { Button, StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useState } from "react";

const Profile = (props) => {
  const nav = props.navigation;
  const route = props.route;
 

  return (
    <>
        
      <View style={styles.btn}>
        <Button title="edit" onPress={() => nav.navigate("Edit",{...route.params})} />
      </View>

      <View style={styles.anh}>
        <Image
          style={styles.avt}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/1200px-Manchester_City_FC_logo.svg.png",
          }}
        />
      </View>
      <View style={styles.texts}>
        {/* <FlatList
          data={list}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.text}>Họ tên: {item.name}</Text>
              <Text style={styles.text}>Tuổi :{item.age}</Text>
              <Text style={styles.text}>Địa chỉ :{item.address}</Text>
              <Text style={styles.text}>SDT :{item.phoneNumber}</Text>
              <Text style={styles.text}>Tuổi :{item.email}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        /> */}
        <Text>Họ tên: {route.params.name}</Text>
        <Text>Tuổi: {route.params.age}</Text>
        <Text>Địa chỉ: {route.params.Address}</Text>
        <Text>SDT: {route.params.sdt}</Text>
        <Text>email: {route.params.Email}</Text>
      </View>
    </>
  );
};
export default Profile;
const styles = StyleSheet.create({
  anh: { alignItems: "center", justifyContent: "center" },
  avt: {
    width: 180,
    height: 180,
  },

  texts: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  btn: {
    alignItems: "flex-end",
    marginRight: 20,
  },
});
