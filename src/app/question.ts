export interface Question {
    id: number,
    name: string,
    type: "Multiple" | "Single"| "Input",
    person_type: string,
    question: string,
    answer: string 
}
