import React from 'react';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import {View, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';

NfcManager.start();

function App() {
  const [log,setLog] = useState('yeah')
  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
      setLog('Tag found')
    } catch (ex) {
      console.warn('Oops!', ex);
      setLog('oops')
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={readNdef}>
        <Text>Scan a Tag</Text>
        <p>{log}</p>
      </TouchableOpacity>
    </View>
  );
}

export default App;
