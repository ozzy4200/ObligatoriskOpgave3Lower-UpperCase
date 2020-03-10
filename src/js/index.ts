interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);


let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Doit")
buttonElement.addEventListener("click", textChanger);

function textChanger(): void {
let inPutElement: HTMLInputElement = <HTMLInputElement>document.getElementById("inputText");
let inputString: string = inPutElement.value;


let selectElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("Selector");
let Selector: string = selectElement.value;

let resultElement: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("output");

if(Selector == "Uppercase"){
    let result = inputString.toUpperCase();
    resultElement.innerHTML = result;
}
else if(Selector == "Lowercase"){
    let result = inputString.toLowerCase();
resultElement.innerHTML = result;
}
}