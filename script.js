let container = document.querySelector('.container');
const clear = document.querySelector('.clear');
const newGrid = document.querySelector('.new-grid');

let gridNumber = 16;
createBoard(gridCalc(gridNumber));

clear.addEventListener('click', () => clearGrid());
newGrid.addEventListener('click', () => {
    deleteBoard(); 
    createBoard(gridCalc(prompt('Number of Rows?')))});

function changeColor(box){
    box.setAttribute('style', 'background-color: black')
};

function clearGrid(){
    let gridBoxes = document.querySelectorAll('.box')
    gridBoxes.forEach(box => box.setAttribute('style', 'background-color: white'))
};

function gridCalc(num){
    if(num <= 0 || isNaN(num)){
        alert("Please Enter a Positive Number");
        return;
    }
        num = num*num;
        return num;
        
    };

    function createBoard(gridNumber){
        for (let i = 0; i < gridNumber; i++) {
            let gridBox = document.createElement('div');
            gridBox.setAttribute('class', 'box')
            gridBox.style.height = container.clientHeight * (1/gridNumber);
            gridBox.style.flexBasis = container.clientHeight * (1/gridNumber);
            console.log(gridBox.style.flexBasis)
            container.appendChild(gridBox);
            }
        let gridBoxes = container.childNodes;
        gridBoxes.forEach(box => box.addEventListener('mouseover', () => changeColor(box)));
        }

        function deleteBoard(){
            while (container.firstChild){
                container.removeChild(container.firstChild);
            }
        }



    
