const leftContainerArray = ['Mobile', 'Web', 'Design', 'QA'];
const MobileItemsArray = ['Android', 'iOS', 'Flutter', 'React-Native'];
const WebItemsArray = ['HTML', 'React.Js', 'Angular', 'JavaScript', 'PHP', 'CSS', 'Node.Js', 'MongoDB', 'MySQL'];
const DesignItemsArray = ['UI-UX-Design', 'Motion-Design', 'Graphic-Design'];
const QAItemsArray = ['Manual-testing', 'API-Testing', 'Automation-Testing', 'Appium', 'Selenium'];

const leftContainer = document.querySelector('.leftContainer');
const rightContainer = document.querySelector('.rightContainer');
const lowerContainer = document.querySelector('.lowerContainer');

const rightComponent = (parent, child, array) => {
    const childComp = document.createElement('div');
    childComp.setAttribute('class', child);
    array.map(rightElement => {
        const childElem = document.createElement('button');
        childElem.setAttribute('id', rightElement);
        childElem.innerText = '+ ' + rightElement;
        childComp.appendChild(childElem);
    });
    parent.appendChild(childComp);
};

(leftComponent = (array) => {
    array.map(leftElement => {
        const leftButton = document.createElement('button');
        leftButton.setAttribute('id', leftElement);
        leftButton.innerText = leftElement;
        leftContainer.appendChild(leftButton);

        leftButton.addEventListener('click', (e) => {
            const id = e.target.id;
            console.log(id);
        });
    });
})(leftContainerArray);

rightComponent(rightContainer, 'MobileContainer', MobileItemsArray);
rightComponent(rightContainer, 'WebContainer', WebItemsArray);
rightComponent(rightContainer, 'DesignContainer', DesignItemsArray);
rightComponent(rightContainer, 'QAContainer', QAItemsArray);
