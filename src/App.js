import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import {View, Text, TouchableOpacity} from 'react-native';

NfcManager.start();

function App() {
  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={readNdef}>
        <Text>Scan a Tag</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
