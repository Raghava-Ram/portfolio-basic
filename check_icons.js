const Si = require('react-icons/si');
const Fa = require('react-icons/fa');
const Tb = require('react-icons/tb');

const siImports = [
    'SiPython', 'SiJava', 'SiMysql', 'SiNumpy', 'SiPandas', 'SiScikitlearn', 'SiPytorch', 'SiTensorflow', 'SiKeras',
    'SiGit', 'SiDocker', 'SiAmazonaws', 'SiFlask', 'SiStreamlit', 'SiTableau', 'SiPowerbi', 'SiPlotly',
    'SiGithubactions', 'SiDvc', 'SiMlflow', 'SiGnu', 'SiYaml', 'SiKalilinux'
];

const faImports = [
    'FaBrain', 'FaRobot', 'FaChartBar', 'FaUsers', 'FaLightbulb', 'FaCogs', 'FaProjectDiagram', 'FaSearch'
];

const tbImports = [
    'TbMathFunction'
];

console.log("Checking Si imports...");
siImports.forEach(name => {
    if (Si[name] === undefined) console.log(`ERROR: ${name} is undefined in react-icons/si`);
});

console.log("Checking Fa imports...");
faImports.forEach(name => {
    if (Fa[name] === undefined) console.log(`ERROR: ${name} is undefined in react-icons/fa`);
});

console.log("Checking Tb imports...");
tbImports.forEach(name => {
    if (Tb[name] === undefined) console.log(`ERROR: ${name} is undefined in react-icons/tb`);
});

console.log("Check complete.");
