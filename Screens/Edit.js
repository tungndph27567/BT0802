import { Button, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { useState } from "react";

const Edit = (props) => {
  const nav = props.navigation;
  const route = props.route;
  const { Update } = route.params;
  const Save = () => {
    Update(name, age, address, sdt, email);
    nav.navigate("Profile", {
      name: name,
      age: age,
      Address: address,
      sdt: sdt,
      Email: email,
      Update: Update,
    });
  };
  const [name, setname] = useState(route.params.name);
  const [age, setage] = useState(route.params.age);
  const [address, setaddress] = useState(route.params.Address);
  const [sdt, setsdt] = useState(route.params.sdt);
  const [email, setemail] = useState(route.params.Email);
  return (
    <>
      <View style={styles.inputs}>
        <TextInput
          value={name}
          onChangeText={(text) => setname(text)}
          style={styles.input}
          placeholder="Nhập tên mới"
        />
        <TextInput
          value={age}
          onChangeText={(text) => setage(text)}
          style={styles.input}
          placeholder="Nhập tuổi mới"
        />
        <TextInput
          value={address}
          onChangeText={(text) => setaddress(text)}
          style={styles.input}
          placeholder="Nhập địa chỉ mới"
        />
        <TextInput
          value={sdt}
          onChangeText={(text) => setsdt(text)}
          style={styles.input}
          placeholder="Nhập SDT mới"
        />
        <TextInput
          value={email}
          onChangeText={(text) => setemail(text)}
          style={styles.input}
          placeholder="Nhập Email mới"
        />
        <View style={styles.btn}>
          <Button title="Hủy" onPress={() => nav.navigate("Home")} />
          <Button title="Lưu" onPress={Save} />
        </View>
      </View>
    </>
  );
};
export default Edit;
const styles = StyleSheet.create({
  inputs: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 30,
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 20,
  },
  btn: {
    flexDirection: "row",
  },
});
