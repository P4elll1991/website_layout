import BaseModel from '@modules/base-model/base-model'
import { Project } from '../types/layout_types/project'

class LayoutEndPoint extends BaseModel {
    public getProject(id: number): Promise<Project> {
        return this.get(`/project/${id}`)
    }
}

const layoutEndPoint = new LayoutEndPoint()
export default layoutEndPoint
