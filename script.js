let container = document.querySelector('.container');
const clear = document.querySelector('.clear');
const newGrid = document.querySelector('.new-grid');

let rowNumber = 16;
createBoard(rowNumber);

clear.addEventListener('click', () => clearGrid());
newGrid.addEventListener('click', () => checkNum());

function changeColor(){
    this.style.backgroundColor = randomRGB();
    
};

function clearGrid(){
    let gridBoxes = document.querySelectorAll('.box')
    gridBoxes.forEach(box => box.style.backgroundColor = 'white');
    gridBoxes.forEach(box => box.addEventListener('mouseover', changeColor, {once: true}));
};

function checkNum(){
    let num = prompt("Number of Rows?");
    if(num <= 0 || isNaN(num)){
        alert("Please Enter a Positive Number");
        return;
    }

    if (num >50){
        alert("Please Enter a Number lower than 51");
         return;
    }
    deleteBoard();    
    createBoard(num);
        
    };

    function createBoard(rowNumber){
        let gridNumber = rowNumber * rowNumber;
        for (let i = 0; i < gridNumber; i++) {
            let gridBox = document.createElement('div');
            gridBox.setAttribute('class', 'box')
            gridBox.style.height = (container.clientHeight * (1/rowNumber)) + 'px';
            gridBox.style.flexBasis = (container.clientHeight * (1/rowNumber)) + 'px';
            container.appendChild(gridBox);
            }
        
        

        let gridBoxes = container.childNodes;
        gridBoxes.forEach(box => box.addEventListener('mouseover', changeColor, {once: true}));
        gridBoxes.forEach(box => box.addEventListener('mouseover', increaseShade));
        }

        function deleteBoard(){
            while (container.firstChild){
                container.removeChild(container.firstChild);
        }};

       function randomRGB() {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let a = 0.1;
            return `rgba(${r},${g},${b},${a})`;
        
        };

        function increaseShade(){
            let color = this.style.backgroundColor;
            let start = color.length - 3;
            let end = color.length - 1;
            let shade = color.slice(start,end);
            console.log(shade);
            if (shade === ".9") return;
            let increase = Number(shade) + .1;
            color = color.substring(0, start - 1) + increase + ')';
            //console.log(increase);
            console.log(color);
            this.style.backgroundColor = color;

        };


    
