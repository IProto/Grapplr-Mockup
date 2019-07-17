import { Component } from '@angular/core';
import { Plugins, Capacitor } from '@capacitor/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  async testNativeYoutubePlayerPlugin() {

    const { YoutubePlayer } = Plugins;

    const options = {width: 640, height: 360, videoId: 'tDW2C6rcH6M'};
    const playerReady = await YoutubePlayer.initialize(options);
  }

  async testWebYoutubePlayerPlugin() {
      const options = {playerId: 'youtube-player', playerSize: {width: 640, height: 360}, videoId: 'tDW2C6rcH6M'};
      const result = await YoutubePlayerWeb.initialize(options);
  }
}
