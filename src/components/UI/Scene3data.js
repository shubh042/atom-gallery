import Molecule from "../three/Molecule"
import * as THREE from "three"
const mol = new Molecule()

export default [
  {
    name: "Dioxygen O²",
    descriptions: [
      "Dioxygen or molecular oxygen is the form of oxygen found in air. It is a molecule formed by the assembly of two oxygen atoms and therefore has the formula O2.",

      "Oxygen is simply called oxygen in everyday life. It is brought to red blood cells by the lungs during respiration (inspiration). The hemoglobin contained in red blood cells is the protein that allows this. When we lack hemoglobin, we are anemic, we suffer from anemia.",

      "During cellular respiration, the oxygen molecule serves to burn nutrients, and transforms them into carbon dioxide and water molecules during the last step of the process. Many living beings are unable to live without oxygen gas. Only plants are capable of producing it: this is the phenomenon of photosynthesis. It is the obligatory oxidizer during combustion because it is the only gas in the air that allows combustion."
    ],
    molecule: mol.getMolecule(
      [
        { size: 3, position: new THREE.Vector3(3, 0, 0) },
        { size: 3, position: new THREE.Vector3(-4, 1, -3) }
      ],
      [{ origin: 0, end: 1 }]
    )
  },
  {
    name: "Carbon Dioxide CO2",
    descriptions: [
      "Carbon dioxide, sometimes called carbon dioxide, is a gas whose molecule is made up of one carbon atom and two oxygen atoms. Its formula is CO2.",

      "It is created during the combustion of products containing carbon, i.e. for example wood, coal, sugar (source of energy in living beings), but also oil (for vehicles) . Carbon dioxide is also produced by the grapes during the fermentation which will give the wine. This gas plays an important role in the greenhouse effect which keeps the Earth warm but its increase causes global warming.",

      "From carbon dioxide and water, plants and algae that contain chlorophyll are able to produce sugars or carbohydrates. Animals, on the contrary, eat sugar and turn it into carbon dioxide and water. These two steps are part of the carbon cycle and the water cycle."
    ],
    molecule: mol.getMolecule(
      [
        { size: 2.6, position: new THREE.Vector3(5, -2, 2) },
        { size: 2, position: new THREE.Vector3(-6, 1, -3) },
        { size: 2, position: new THREE.Vector3(-1, -3, 6) }
      ],
      [
        { origin: 0, end: 1 },
        { origin: 0, end: 2 }
      ]
    )
  },
  {
    name: "Water H20",
    descriptions: [
      "The water molecule has the formula H2O, that is, it is made up of one oxygen atom and two hydrogen atoms. If we want to talk about two molecules of water, then we write 2H2O.",

      "Water is the most common liquid element on the Earth's surface. It is essential to all forms of life on the planet. Man is made up of 65% water, plants more than 85%. The man must drink at least 1.5 liters of water per day, the rest is contained in food.",

      "Water exists in three physical states: Solid, it is called ice. This transformation takes place when liquid water drops below 0°C. Liquid, it is simply called water. And gaseous, it is called steam. When water reaches a temperature of 100°C, it begins to boil and turns into water vapour."
    ],
    molecule: mol.getMolecule(
      [
        { size: 3, position: new THREE.Vector3(-7, 4, -1) },
        { size: 2.1, position: new THREE.Vector3(5, -3, -2) },
        { size: 2.1, position: new THREE.Vector3(-1, -3, 6) }
      ],
      [
        { origin: 0, end: 1 },
        { origin: 0, end: 2 }
      ]
    )
  },
  {
    name: "Methane CH4",
    descriptions: [
      "Methane is a molecule made up of one carbon atom and four hydrogen atoms: its chemical formula is therefore CH4.",

      "It is an organic compound, produced by living things and the fermentation process. Under normal conditions, it is a gas. It can be put in liquid form at very low temperature or under high pressure to be stored or transported.",

      "Methane is a greenhouse gas with an impact twenty times more powerful than that of carbon dioxide on the planet. It is the very majority component of firedamp, feared for its explosions in mines. Methane present in rocks deep (field) is exploited as energy called natural gas. It is then a fossil energy. Methane can also be produced by the fermentation of waste in digesters: methanisation. In this case, it is renewable energy."
    ],
    molecule: mol.getMolecule(
      [
        { size: 2.5, position: new THREE.Vector3(0, 0, 0) },
        { size: 1.3, position: new THREE.Vector3(-6, 1, -1) },
        { size: 1.3, position: new THREE.Vector3(7, -2, 1) },
        { size: 1.3, position: new THREE.Vector3(-3, -7, 1) },
        { size: 1.3, position: new THREE.Vector3(2, 5, -1) }
      ],
      [
        { origin: 0, end: 1 },
        { origin: 0, end: 2 },
        { origin: 0, end: 3 },
        { origin: 0, end: 4 }
      ]
    )
  },
  {
    name: "Ethanol",
    descriptions: [
      "Ethanol, or ethyl alcohol (or more simply alcohol), is an alcohol with the condensed structural formula CH3-CH2-OH",

      "It is a psychotropic, and one of the oldest recreational drugs, in the form of an alcoholic drink.",

      "Ethanol is used by the food industry (for the production of spirits in particular), perfumery and galenic pharmaceuticals (as a solvent) as well as in biofuel (bioethanol). It is further used in alcohol thermometers."
    ],
    molecule: mol.getMolecule(
      [
        { size: 2.5, position: new THREE.Vector3(4, 0, 0)}, // atome centrale
        { size: 2.5, position:new THREE.Vector3(-2, 1, -1)}, // atome a droite
        { size: 1.5, position:new THREE.Vector3(11, 5, 3)}, // atoem gauche
        { size: 1.5, position:new THREE.Vector3(8, -5, -3)},
        { size: 1.5, position:new THREE.Vector3(6, 2, -7)}, // atome 2
        { size: 2.5, position:new THREE.Vector3(-8, 7, 1)},
        { size: 1.5, position:new THREE.Vector3( -7, -3, 2)}, // fond droit
        { size: 1.5, position:new THREE.Vector3( -7, -1, -6)},// proche droit
        { size: 1.5, position:new THREE.Vector3( -13, 8, 1)}


      ],
      [
        {origin: 0, end:1},
        {origin: 0,end: 2},
        {origin: 0,end: 3},
        {origin: 0,end: 4},
        {origin: 1,end: 5},
        {origin: 1,end: 6},
        {origin: 1,end: 7},
        {origin: 5,end: 8},
      ]
    )
  },
]
