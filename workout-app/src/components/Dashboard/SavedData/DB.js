const exerciseTemplates = [
  {
    id: Math.random,
    name: "Treadmill",
    dataTypes: [
      ["time", "min"],
      ["distance", "km"],
    ],
  },
  { id: Math.random, name: "Pullups", dataTypes: [["reps", ""]] },
  {
    id: Math.random,
    name: "Bench press",
    dataTypes: [
      ["weight", "kg"],
      ["reps", ""],
    ],
  },
  {
    id: Math.random,
    name: "Barebells",
    dataTypes: [
      ["weight", "kg"],
      ["reps", ""],
    ],
  },
  { id: Math.random, name: "Plank", dataTypes: [["time", "min"]] },
];

const workoutTemplates = [
  {
    id: Math.random,
    type: "Trening 1",
    exercises: [
      exerciseTemplates[0],
      exerciseTemplates[3],
      exerciseTemplates[4],
    ],
  },
  {
    id: Math.random,
    type: "Trening 2",
    exercises: [
      exerciseTemplates[1],
      exerciseTemplates[2],
      exerciseTemplates[3],
      exerciseTemplates[4],
      exerciseTemplates[0],
      exerciseTemplates[1],
    ],
  },
];

const archiveTemplate = [
  {
    id: Math.random,
    name: "My workout 1",
    date: new Date(2022, 7, 7),
    notes: "my note about workout",
    exercises: [
      {
        type: exerciseTemplates[2],
        units: exerciseTemplates[2].dataTypes,
        series: [
          [
            [42.5, 10],
            [40, 7],
            [40, 8],
            [40, 6],
          ],
        ],
      },
      {
        type: exerciseTemplates[1],
        units: exerciseTemplates[1].dataTypes,
        series: [
          [[10], [9], [8], [8]],
          [[7], [7], [7], [5]],
          [[5], [6], [5], [5]],
          [[4], [3], [4], [4]],
          [[3], [3], [3], [2]],
        ],
      },
      {
        type: exerciseTemplates[4],
        units: exerciseTemplates[4].dataTypes,
        series: [[[1], [1], [1]]],
      },
    ],
  },
  {
    id: Math.random,
    name: "Some other workout",
    date: new Date(2021, 11, 12),
    notes: "my note about workout",
    exercises: [
      {
        type: exerciseTemplates[2],
        units: exerciseTemplates[2].dataTypes,
        series: [
          [
            [45, 6],
            [42.5, 7],
            [41, 7],
            [40, 6],
          ],
          [
            [49, 10],
            [40, 6],
            [40, 5],
            [40, 7],
          ],
        ],
      },
      {
        type: exerciseTemplates[1],
        units: exerciseTemplates[1].dataTypes,
        series: [[[10], [7], [8], [7]]],
      },
      {
        type: exerciseTemplates[4],
        units: exerciseTemplates[4].dataTypes,
        series: [[[1.5], [1], [1]]],
      },
    ],
  },
];

export { exerciseTemplates, workoutTemplates, archiveTemplate };
