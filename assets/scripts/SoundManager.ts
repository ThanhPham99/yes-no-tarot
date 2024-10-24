import { _decorator, AudioSource, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SoundManager')
export class SoundManager extends Component {
    start() {

    }

    drawCardSound() {
        this.node.getChildByName('Draw Card').getComponent(AudioSource).play()
    }

    buttonClickSound(){
        this.node.getChildByName('Button Click').getComponent(AudioSource).play()
    }

    update(deltaTime: number) {

    }
}


