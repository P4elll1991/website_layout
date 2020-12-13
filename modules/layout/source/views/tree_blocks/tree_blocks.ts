import { JetView } from 'webix-jet'
import TreeBlocksConfig from './tree_blocks-config'

export default class TreeBlocksView extends JetView {
    private view: {}

    public init(): void {
        this.view = {}
        this.attachEvents()
    }

    public attachEvents(): void {}

    public config() {
        return TreeBlocksConfig()
    }

    public destructor(): void {
        super.destructor()
    }
}
