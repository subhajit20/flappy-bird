const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;
const imageContainer = document.getElementById("imageContainer") as HTMLElement;
const bars = document.getElementById("bars") as HTMLElement;
const bird = document.getElementById("flappyBird") as HTMLElement;


class BirdRect{
    birdName:string = '';
    birdElement = '' as unknown as HTMLElement;
    top:number = 100;
    left:number = 130;

    constructor(birdName:string,birdElement:HTMLElement){
        this.birdName = birdName;
        this.birdElement = birdElement;
    }

    goUp(value:number){
        this.top -= value;
        this.birdElement.style.top = `${this.top}px`;
    }

    goDown(value:number){
        this.top += value;
        this.birdElement.style.top = `${this.top}px`;
    }

    goRight(value:number){
        this.left += value;
        this.birdElement.style.left = `${this.left}px`;
    }

    toString():any{
        return this;
    }
}

class PipeRect{
    imageName = '';
    constructor(imageName:string){
        this.imageName = imageName;
    }

    createNewPipe(width:string,height:string){
        let pipe:any;
        let pipeFrame;
        let pipeConfig =
            [{
                name:'img',
                width:"30px",
                height:"180px",
                paceSelf:'start',
                imgPath:`./imgs/${this.imageName}`
            },{
                name:'img',
                width:"30px",
                height:"180px",
                paceSelf:'end',
                imgPath:`./imgs/${this.imageName}`
            }]

        for(let i=0; i <= new Array(21).length - 1 ; i++){
            pipeFrame = document.createElement('div');
            pipeFrame.style.display = 'grid'
            
            for(let p=0; p <= pipeConfig.length-1; p++){
                pipe = document.createElement(pipeConfig[p].name);
                pipe.src = pipeConfig[p].imgPath;
                pipe.style.width = pipeConfig[p].width;
                pipe.style.height = pipeConfig[p].height;
                pipe.style.placeSelf = pipeConfig[p].paceSelf;
                pipeFrame.append(pipe);
            }

            // console.log("Appending")
            imageContainer.appendChild(pipeFrame);
            pipeFrame = '';
        }
    }
}

const newBird = new BirdRect(
    'Subhajit',bird
)

startBtn.addEventListener('click',(e)=>{
    console.log(newBird.toString())
    
})

resetBtn.addEventListener('click',(e)=>{
    window.location.reload();
})

window.onload = ()=>{
        const p = new PipeRect('pipe.png');
        p.createNewPipe("30px","180px");
}

window.onkeyup = (e)=>{
    if(e.key === "ArrowUp"){
        newBird.goUp(10);
        console.log(newBird.top)
    }else if(e.key === "ArrowDown"){
        newBird.goDown(10);
        console.log(newBird.top)
    }else if(e.key === "ArrowRight"){
        newBird.goRight(10);
        console.log(newBird.left)
    }
}