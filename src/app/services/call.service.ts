import { Injectable } from '@angular/core';
import { CallData, CallKeep, CallToken } from 'callkeep';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor() {
    // Voip Token has been generated
    CallKeep.addListener("registration", (token: CallToken) =>
      console.log(`VOIP token has been received ${token.value}`)
    );

    // Notify Incoming Call Accepted
    CallKeep.addListener("callAnswered", (data: CallData) =>
      console.log(`Call has been received from ${data.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
    );

    // Notify Call Ended
    CallKeep.addListener("callEnded", (data: CallData) =>
      console.log(`Call has been ended ${data.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
    );

    // Notify Call Started
    CallKeep.addListener("callStarted", (data: CallData) =>
      console.log(`Call has been started with ${data.name} (call ID: ${data.id}) (call Type: ${data.media}) (call duration: ${data.duration})`)
    );
  }

  async regiserCallKit() {
    await CallKeep.register().then(() => {
      console.log("Push notification has been registered");
    });
  }
}
