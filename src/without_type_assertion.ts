export const createObjectWithoutTypeAssertion = (text: string): TestingInterface => {
    const a: TestingInterface = {
        attribute1: true,
        attribute2: text
    };

    return a;
};

export class Command {

    constructor(
        thekla: any,
        args: any
    ) {
    }

    /**
     * process all options passed via command line
     * @param configFilePath
     */

    // @ts-ignore
    private loadConfigFile(configFilePath: string): Promise<any> {
    }

    /**
     * process all options passed via command line
     * @param args
     */
    // @ts-ignore
    private mergeCommandLineArgsIntoConfig(args: any, config: TheklaConfig): Promise<TheklaConfig> {
    }

    /**
     * start spec execution with jasmine
     */
    // @ts-ignore
    run(): Promise<any> {
    }
}