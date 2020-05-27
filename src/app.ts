class ProjectInput { 
    public templateElement : HTMLTemplateElement; // template element to get project input
    public hostElement : HTMLDivElement; // div element to host the app 
    public element: HTMLFormElement; // form element 
    public titleInputElement : HTMLInputElement
    public descriptionInputElement : HTMLInputElement
    public peopleInputElement : HTMLInputElement

    constructor() {
        this.templateElement =  document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement; 

        const importedNode = document.importNode(this.templateElement.content , true ); // get template content
        this.element = importedNode.firstElementChild as HTMLFormElement // set form element to equal to first form in template
        this.element.id = 'user-input'

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement

        this.attach() // this will insert the form into the app-div element

    }
    private attach() { 
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
}

const prjinput = new ProjectInput()