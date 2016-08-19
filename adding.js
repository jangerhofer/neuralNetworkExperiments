var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;


var myNetwork = new Architect.Perceptron(4, 20, 3)
var trainer = new Trainer(myNetwork)

var NumberConverter = require("number-converter").NumberConverter;
var bin = new NumberConverter(NumberConverter.DECIMAL, NumberConverter.BINARY);
var dec = new NumberConverter(NumberConverter.BINARY, NumberConverter.DECIMAL);

let testSuite = []
for (var j = 0; j <= 3; j++) {
    let binary1 = binToInputArr(bin.convert(j))
    for (var i = 0; i <= 3; i++) {
        let binary2 = binToInputArr(bin.convert(i))
        testSuite.push({
            input: binary1.concat(binary2),
            output: binToOutputArr(bin.convert(i + j))
        })
    }
}

function binToInputArr(bin) {
    let ret = bin.split('').map((int) => parseInt(int))
    while (ret.length < 2) {
        ret.unshift(0)
    }
    return ret
}

function binToOutputArr(bin) {
    let ret = bin.split('').map((int) => parseInt(int))
    while (ret.length < 3) {
        ret.unshift(0)
    }
    return ret
}

trainer.train(testSuite,{
    rate: .1,
    iterations: 20000,
    log: 1000,
});


console.log(myNetwork.activate([1,0,1,0]));
