import { JetView } from 'webix-jet'
import ResultConfig from './result-config'

export default class ResultView extends JetView {
    private view: {}

    public init(): void {
        this.view = {}
        this.attachEvents()
    }

    public attachEvents(): void {}

    public config() {
        return ResultConfig()
    }

    public destructor(): void {
        super.destructor()
    }
}
