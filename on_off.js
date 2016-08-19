var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;


    var A = new Neuron(); // Create Node "A"
    var B = new Neuron(); // Create Node "B"

    A.project(B); // Connect A to B

    var learningRate = .4; // Tell the "meta" training program how aggressively to change the weight of inputs every time we train the nodes

    // Run the training program 1 mil. times.
    for(var i = 0; i < 1000000; i++)
    {
        // Start the test by telling Node A to output a value of 1
        A.activate(1);

        // Tell B to gather input from all its connected nodes (just A) and decide what value to output for itself
        B.activate();

        // Assign new weights to B's input; Make it more likely to output "0", the "correct" value for the input from Node A of 1.
        B.propagate(learningRate, 0);
    }

    // Now that the two nodes are 'trained', output 1 from Node A once more
    A.activate(1)

    // Test what B outputs after receiving 1 from A
    console.log(B.activate())

    // It outputs something close to 0...
    // 0.000001250010003136497 to be more precise.
