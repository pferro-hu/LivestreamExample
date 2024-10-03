import {
  LivestreamPlayer,
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-native-sdk';

import React, {useEffect} from 'react';

import IncallManager from 'react-native-incall-manager';

const apiKey = 'apiKey';
const token = 'token';
const callId = 'callId';

const user: User = { type: 'anonymous' };
const client = new StreamVideoClient({ apiKey, user, token });

export default function App() {
  // Automatically route audio to speaker devices as relevant for watching videos.
  // Please read more about `media` options at https://github.com/react-native-webrtc/react-native-incall-manager#usage
  useEffect(() => {
    IncallManager.start({ media: 'video' });
    return () => IncallManager.stop();
  }, []);

  return (
    <StreamVideo client={client}>
      <LivestreamPlayer callType="livestream" callId={callId} />
    </StreamVideo>
  );
}
