import { JetView } from 'webix-jet'
import LayoutConfig from './layout-config'
import layoutEndPoint from '../end-point/layout-end-point'
import { Project } from '../types/layout_types/project'

export default class LayoutView extends JetView {
    private view: {}

    public init(): void {
        this.view = {}
        this.load()
        this.attachEvents()
    }

    public attachEvents(): void {}

    public config() {
        return LayoutConfig()
    }

    public destructor(): void {
        super.destructor()
    }

    private load(): void {
        layoutEndPoint.getProject(1).then((project: Project) => {
            console.log(project)
        })
    }
}
