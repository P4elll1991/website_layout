import { JetView } from 'webix-jet'
import EditorConfig from './editor-config'

export default class EditorView extends JetView {
    private view: {}

    public init(): void {
        this.view = {}
        this.attachEvents()
    }

    public attachEvents(): void {}

    public config() {
        return EditorConfig()
    }

    public destructor(): void {
        super.destructor()
    }
}
