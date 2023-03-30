import { Component } from "react";
import { Button, Text, View, StyleSheet} from "react-native";

export default class Counter extends Component {
  state = {
    count: 0,
    step: 1,
  };
  encrementar() {
            this.setState({
                count: this.state.count + this.state.step,
            });
     }
  decrementar() {
            this.setState({
                count: this.state.count - this.state.step,
            });
     }
  alteraStep(text) {
    this.setState ({step: parseInt(text)});
  }
  render() {
    return (
      <View style={styles.contador}>
        <Text style={{color: 'white'}}>Likes {this.state.count} </Text>
        <Button style={styles.bostao} onPress={() => this.encrementar()} title="Like" />
        <Button style={styles.bostao} onPress={() => this.decrementar()} title="desLike" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contador: {
    marginTop: 20,
    alignItems: "center",
    paddingLeft: 5,
  }
});