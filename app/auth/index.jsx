import { View, Text, StyleSheet } from "react-native";


const AuthScreen = () => {
  return (<View style={styles.container}>
    <Text>Auth</Text>
    </View> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffff",

  }
})

export default AuthScreen;  