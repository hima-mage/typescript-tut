// Project Class
enum ProjectStatus { Active , Finished}
class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number, 
    public status : ProjectStatus
 ) {}
}

class ProjectState { 
    private listeners : any[] = [];
    private projects : Project[] = [];
    private static instance : ProjectState

    private constructor() {}

    static getInstance() { 
        if(this.instance) {
            return this.instance
        }
        this.instance = new ProjectState() ;
        return this.instance
    }
}
