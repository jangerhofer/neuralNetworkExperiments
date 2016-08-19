var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;


    var myNetwork = new Architect.Perceptron(2, 2, 1)
    var trainer = new Trainer(myNetwork)

    var trainingSet = [
      {
        input: [0,0],
        output: [0]
      },
      {
        input: [0,1],
        output: [1]
      },
      {
        input: [1,0],
        output: [1]
      },
      {
        input: [1,1],
        output: [0]
      },
      {
        input: [1,1],
        output: [0]
      },
      {
        input: [1,1],
        output: [0]
      },
      {
        input: [1,1],
        output: [0]
      },
    ]

    trainer.train(trainingSet,
      {
      rate: 1,
      iterations: 100000,
      shuffle: true,
      log: 1000
  });
    console.log(myNetwork.activate([1,0]));
