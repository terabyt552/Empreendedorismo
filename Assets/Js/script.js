const navMenu = document.querySelector(".NavMenu");
const navBar = document.querySelector('.navbar i');
const sectionSlider = document.querySelector('.SectionSlider');

const NavFlapExtraMotivação = document.querySelector("#NavFlapExtraMotivação");
const NavFlapExtraPlanejamento = document.querySelector("#NavFlapExtraPlanejamento");
const NavFlapExtraPoder = document.querySelector("#NavFlapExtraPoder");
const NavFlapExtraProblemasMotivação = document.querySelector("#NavFlapExtraProblemasMotivação");
const NavFlapExtraProblemasPlanejamento = document.querySelector("#NavFlapExtraProblemasPlanejamento");
const NavFlapExtraProblemasPoder = document.querySelector("#NavFlapExtraProblemasPoder");

const hellipsisbar1 = document.querySelector('#controlhellipsisbar1 i');
const anglebarDown1 = document.querySelector('#controlanglebarDown1 i');

const hellipsisbar2 = document.querySelector('#controlhellipsisbar2 i');
const anglebarDown2 = document.querySelector('#controlanglebarDown2 i');

const hellipsisbar3 = document.querySelector('#controlhellipsisbar3 i');
const anglebarDown3 = document.querySelector('#controlanglebarDown3 i');

const hellipsisbar4 = document.querySelector('#controlhellipsisbar4 i');
const anglebarDown4 = document.querySelector('#controlanglebarDown4 i');

const hellipsisbar5 = document.querySelector('#controlhellipsisbar5 i');
const anglebarDown5 = document.querySelector('#controlanglebarDown5 i');

const hellipsisbar6 = document.querySelector('#controlhellipsisbar6 i');
const anglebarDown6 = document.querySelector('#controlanglebarDown6 i');

var controlAnglebar;

navBar.addEventListener('click', () => {
    navMenu.classList.toggle('mostrar');
 })

sectionSlider.addEventListener('click', () => {
 navMenu.classList.remove('mostrar');
})



hellipsisbar1.addEventListener('click', () => {
    NavFlapExtraMotivação.classList.toggle('MostrarFlapExtra');
 })

anglebarDown1.addEventListener('click', () => {
    NavFlapExtraMotivação.classList.remove('MostrarFlapExtra');
 })




 hellipsisbar2.addEventListener('click', () => {
    NavFlapExtraPlanejamento.classList.toggle('MostrarFlapExtra');
 })

anglebarDown2.addEventListener('click', () => {
    NavFlapExtraPlanejamento.classList.remove('MostrarFlapExtra');
 })



 hellipsisbar3.addEventListener('click', () => {
   NavFlapExtraPoder.classList.toggle('MostrarFlapExtra');
})

anglebarDown3.addEventListener('click', () => {
   NavFlapExtraPoder.classList.remove('MostrarFlapExtra');
})

hellipsisbar4.addEventListener('click', () => {
   NavFlapExtraProblemasMotivação.classList.toggle('MostrarFlapExtra');
})

anglebarDown4.addEventListener('click', () => {
   NavFlapExtraProblemasMotivação.classList.remove('MostrarFlapExtra');
})

hellipsisbar5.addEventListener('click', () => {
   NavFlapExtraProblemasPlanejamento.classList.toggle('MostrarFlapExtra');
})

anglebarDown5.addEventListener('click', () => {
   NavFlapExtraProblemasPlanejamento.classList.remove('MostrarFlapExtra');
})

hellipsisbar6.addEventListener('click', () => {
   NavFlapExtraProblemasPoder.classList.toggle('MostrarFlapExtra');
})

anglebarDown6.addEventListener('click', () => {
   NavFlapExtraProblemasPoder.classList.remove('MostrarFlapExtra');
})