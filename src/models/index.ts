export interface Frequency {
    times: number;
    repeatEvery: string;
}

export interface Plant {

    id: number;
    name: string;
    about: string;
    photo: string;
    waterTips: string;

    frequency: Frequency;
    environments: string[];
}