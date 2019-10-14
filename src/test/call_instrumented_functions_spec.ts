import { createObjectWithTypeAssertion } from "../with_type_assertion";
import { createObjectWithoutTypeAssertion } from "../without_type_assertion";

describe(`NYC`, (): void => {

    it(`should instrument the typescript file 
    - (test case id: 3151d595-9826-44d9-8720-22169e679626)`, (): void => {
        console.log(createObjectWithTypeAssertion(`my text`));
    });

    it(`is instrumenting the file without as declaration 
    - (test case id: 9b125ed3-e5f5-4c22-83d0-166447220687)`, (): void => {
        console.log(createObjectWithoutTypeAssertion(`my instrumented text`));
    });

});