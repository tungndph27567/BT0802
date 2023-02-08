import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
const Home = (props) => {
  const [name, setname] = useState("Nguyễn Đức Tùng");
  const [age, setage] = useState("20");
  const [Address, setAddress] = useState("Hà Nội ");
  const [sdt, setsdt] = useState("0966634099");
  const [Email, setEmail] = useState("ntung6904@gmail.com");
  const Update = (name, age, Address, sdt, Email) => {
    setname(name);
    setage(age);
    setAddress(Address);
    setsdt(sdt);
    setEmail(Email);
  };

  const nav = props.navigation;
  return (
    <View style={styles.container}>
      <Button
        title="Thông tin cá nhân "
        onPress={() => nav.navigate("Profile", {
          name: name,
          age: age,
          Address: Address,
          sdt: sdt,
          Email: Email,
          Update: Update,
         })}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
  },
});
