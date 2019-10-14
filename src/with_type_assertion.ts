export const createObjectWithTypeAssertion = (text: string): TestingInterface => {
    const a = {
        attribute1: true,
        attribute2: text
    };

    return a as TestingInterface;
};