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

    addListener(listenerFn : Function){
        this.listeners.push(listenerFn)
    }
    addProject(title: string , description : string , numOfPeople : number) { 
        const newProject =  new Project(
            Math.random().toString(), 
            title,
            description , 
            numOfPeople  , 
            ProjectStatus.Active
        )
        this.projects.push(newProject); 
        for (const listenerFn of this.listeners) { 
            listenerFn(this.projects.slice());
        }
    }
} 

const projectState = ProjectState.getInstance();

// Validation