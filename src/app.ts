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


        this.configure()
        this.attach() // this will insert the form into the app-div element
        

    }
    // there prob with this key word into submithander - it'sn refer to the element submited - so we have to bind it
    private submitHandler(event : Event) { 
        event.preventDefault();
        console.log(this.titleInputElement.value)
    }


    private configure() { 
        this.element.addEventListener('submit' , this.submitHandler.bind(this))
    }

    private attach() { 
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
    
}

const prjinput = new ProjectInput()