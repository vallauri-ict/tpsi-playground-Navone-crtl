import { Component } from '@angular/core';
import { mintcream } from 'color-name';

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId:number;
    serverStatus:string;
    constructor(){
        this.serverId=this.getRandomInt(1,100)
    }

    getServerStatus(){
        this.serverStatus = this.getRandomInt(0, 1) == 0 ? 'offline' : 'online';
        return this.serverStatus;
    }
    getRandomInt(min, max){
        return Math.floor(Math.random()*(max-min+1)) + min;
    }
}