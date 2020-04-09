//Create function to select elements
const selectElement = (element) => document.querySelector(element);
//Call the selectElement function then store values into a variable
const header = selectElement('header');
const mainContent = selectElement('main');
//Click event on hamburger menu to trigger the active state
selectElement('.hamburger').addEventListener('click', () => {
    header.classList.toggle('active');
    mainContent.classList.toggle('active');
});
//When user clicks outside the navigation remove the active state
window.onclick = (e) => {
    if (e.target.matches('.active')) {
            if (header.classList.contains('active') || mainContent.classList.contains('active')) {
                header.classList.remove('active');
                mainContent.classList.remove('active');
            }
    }
};