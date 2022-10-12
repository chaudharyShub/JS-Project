// ARRAYS
const leftContainerArray = ['Mobile', 'Web', 'Design', 'QA'];
const MobileItemsArray = ['Android', 'iOS', 'Flutter', 'React-Native'];
const WebItemsArray = ['HTML', 'React.Js', 'Angular', 'JavaScript', 'PHP', 'CSS', 'Node.Js', 'MongoDB', 'MySQL'];
const DesignItemsArray = ['UI-UX-Design', 'Motion-Design', 'Graphic-Design'];
const QAItemsArray = ['Manual-testing', 'API-Testing', 'Automation-Testing', 'Appium', 'Selenium'];

// CONTAINERS
const leftContainer = document.querySelector('.leftContainer');
const rightContainer = document.querySelector('.rightContainer');
const lowerContainer = document.querySelector('.lowerContainer');


const rightElement = (container, array) => {
    container.innerHTML = '';
    array.map(rightElement => {
        container.innerHTML += `<button id=${rightElement} >+ ${rightElement}</button>`;
    });
    const btnTagCollection = container.getElementsByTagName('button');
    btnArray = [...btnTagCollection];
    btnArray.forEach(element => {
        let btn = document.getElementById(element.id);
        btn.addEventListener('click', () => {
            lowerElement(lowerContainer, element.id);
        });
    });
}


const lowerElement = (container, element) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', element)
    btn.innerHTML = `${element}<button class='innerButton' id='${element}_'>X</button>`;
    const isAlready = container.querySelector(`#${element}`);
    let disableEnableButton;

    if (!isAlready) {
        container.appendChild(btn);
        const btnInner = document.getElementById(`${element}_`);
        btnInner.addEventListener('click', () => {
            container.removeChild(btn);
            disableEnableButton.disabled = false;
            disableEnableButton.style.cursor = 'pointer';
        });

        // DISABLE BUTTON
        document.querySelector('.rightContainer').childNodes.forEach(item => {
            if (item.id === element) {
                const button = document.getElementById(element);
                disableEnableButton = button;
                disableEnableButton.disabled = true;
                disableEnableButton.style.cursor = 'not-allowed';
            };
        });
    };
}


const leftElement = (container, array) => {
    array.map(element => {
        const btn = document.createElement('button');
        btn.innerText = element;
        btn.setAttribute('id', element);
        container.appendChild(btn);

        btn.addEventListener('click', (e) => {
            let { id } = e.target;
            let a = [];
            switch (id) {
                case 'Mobile':
                    a = MobileItemsArray;
                    break;
                case 'Web':
                    a = WebItemsArray;
                    break;
                case 'Design':
                    a = DesignItemsArray;
                    break;
                case 'QA':
                    a = QAItemsArray;
                    break;
                default:
                    a = MobileItemsArray;
                    break;
            };
            rightElement(rightContainer, a);
        });
    });
}

leftElement(leftContainer, leftContainerArray);
