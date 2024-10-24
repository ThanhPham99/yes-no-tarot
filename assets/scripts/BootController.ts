import { _decorator, Component, director, ProgressBar, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BootController')
export class BootController extends Component {

    @property(ProgressBar)
    progressBar: ProgressBar

    protected onLoad(): void {
        director.preloadScene('main', (finished: number, total: number, item: any) => {
            this.progressBar.progress = finished / total / 2
        }, () => {
            resources.loadDir('cards', (finished: number, total: number, item: any) => {
                this.progressBar.progress = 0.5 + finished / total / 2
            }, () => {
                director.loadScene('main')
            })
        })
    }

    start() {

    }

    update(deltaTime: number) {

    }
}


