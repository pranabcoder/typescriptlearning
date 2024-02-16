type MyCat = {
    name: string;
    purrs: boolean;
    color: string;
};

type MyDog = {
    name: string;
    barks: boolean;
    color: string;
};

type HybridAnimal = MyCat & MyDog;

const hybridAnimal: HybridAnimal = {
    name: 'MAX',
    color: 'White',
    purrs: true,
    barks: true,
};