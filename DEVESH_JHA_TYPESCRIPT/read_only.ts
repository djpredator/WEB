class area_rectangle{
   readonly length: number;
    width: number;


    constructor(len: number, wid:number){
    this.length= len;
    this.width= wid;

}
}


let area = new area_rectangle(25, 25);
area.length= 25; 
area.width= 25;
console.log(area);