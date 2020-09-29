import statemod from './statemod.mjs';


console.log(statemod.getState());
statemod.setState(1);
console.log(statemod.getState());
statemod.setState(2);
statemod.reset();
console.log(statemod.getState());