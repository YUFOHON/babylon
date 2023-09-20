import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Voice from '@react-native-voice/voice';

// interface VoiceInputProps {
//   onResult: (result: string) => void;
// }

const VoiceInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = React.useState('');
  const [error, setError] = useState('');

  Voice.onSpeechStart = e => {
    console.log('Started recording');
    console.log('onSpeechStart: ', e);
    setIsRecording(true);
  };

  Voice.onSpeechEnd = () => {
    console.log('Stopped recording');
    setIsRecording(false);
  };

  Voice.onSpeechError = e => {
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  Voice.onSpeechResults = e => {
    if (e.value && e.value.length > 0) {
      console.log('onSpeechResults: ', e.value[0]);
      setResult(e.value[0]);
      setIsRecording(false);
    }
  };

  const startRecording = async () => {
    try {
      await Voice.start('en-US');
    } catch (error) {
      console.log(error);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View>
        <Text>Voice Input</Text>
        <Text>{result}</Text>
        <Text>{error}</Text>
        <TouchableOpacity
          style={{marginTop: 30, alignItems: 'center'}}
          onPress={isRecording ? stopRecording : startRecording}>
          <Text>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default VoiceInput;
