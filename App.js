import React, { Component } from "react";

import { SafeAreaView } from "react-native";

import { WebView } from "react-native-webview";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: "https://piuomeno.netlify.com" }} />
      </SafeAreaView>
    );
  }
}
