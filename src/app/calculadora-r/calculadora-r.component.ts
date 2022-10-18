import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-r',
  templateUrl: './calculadora-r.component.html',
  styleUrls: ['./calculadora-r.component.css']
})
export class CalculadoraRComponent implements OnInit {

  constructor() { }
  banda1:string = "";
  banda2:string = "";
  banda3:string = "";
  
  homs:number = 0;
  tolMax:number = 0;
  tolMin:number = 0;
  tolerancia: string = "";
  aviso1:string = "";
  preca: string = "La resistencia negro, negro, negro es 0 ";
  
  valorhom: boolean = false;
  valorMin: boolean = false;
  valorMax: boolean = false;

  color:string = "";
  color1:string = "";
  color2:string = "";
  color3:string = "";
  colorl:string = "";
  colorl1:string = "";
  colorl2:string = "";
  colorl3:string = "";  
  
  calculadoraR(): void {

    switch(this.banda1){
      case "0" :
        this.color = "black";
        this.colorl = "black";
      break;
      case "10" :
        this.color = "brown";
        this.colorl = "brown";
      break;
      case "20" :
          this.color = "red";
          this.colorl = "red";
          break;
      case "30" :
         this.color = "orange";
          this.colorl = "orange";
      break;
      case "40" :
          this.color = "yellow";
          this.colorl = "yellow";
      break;
      case "50" :
        this.color = "green";
        this.colorl = "green";
      break;
      case "60" :
        this.color = "blue";
        this.colorl = "blue";
      break;
      case "70" :
          this.color = "violet";
          this.colorl = "violet";
          break;
      case "80" :
         this.color = "gray";
          this.colorl = "gray";
      break;
      case "90" :
          this.color = "";
          this.colorl = "white";
      break;
    }

    switch(this.banda2){
      case "0" :
        this.color1 = "black";
        this.colorl1 = "black";
      break;
      case "1" :
        this.color1 = "brown";
        this.colorl1 = "brown";
      break;
      case "2" :
          this.color1 = "red";
          this.colorl1 = "red";
          break;
      case "3" :
         this.color1 = "orange";
          this.colorl1 = "orange";
      break;
      case "4" :
          this.color1 = "yellow";
          this.colorl1 = "yellow";
      break;
      case "5" :
        this.color1 = "green";
        this.colorl1 = "green";
      break;
      case "6" :
        this.color1 = "blue";
        this.colorl1 = "blue";
      break;
      case "7" :
          this.color1 = "violet";
          this.colorl1 = "violet";
          break;
      case "8" :
         this.color1 = "gray";
          this.colorl1 = "gray";
      break;
      case "9" :
          this.color1 = "";
          this.colorl1 = "white";
      break;
    }

    switch(this.banda3){
      case "1" :
        this.color2 = "black";
        this.colorl2 = "black";
      break;
      case "10" :
        this.color2 = "brown";
        this.colorl2 = "brown";
      break;
      case "100" :
          this.color2 = "red";
          this.colorl2 = "red";
          break;
      case "1000" :
         this.color2 = "orange";
          this.colorl2 = "orange";
      break;
      case "10000" :
          this.color2 = "yellow";
          this.colorl2 = "yellow";
      break;
      case "100000" :
        this.color2 = "green";
        this.colorl2 = "green";
      break;
      case "1000000" :
        this.color2 = "blue";
        this.colorl2 = "blue";
      break;
      case "10000000" :
          this.color2 = "violet";
          this.colorl2 = "violet";
          break;
      case "100000000" :
         this.color2 = "gray";
          this.colorl1 = "gray";
      break;
      case "1000000000" :
          this.color2 = "white";
          this.colorl1 = "white";
      break;
    }



    switch(this.tolerancia){
      case "0" :
        this.color3 = "gold";
        this.colorl3 = "gold";
      break;
      case "1" :
        this.color3 = "silver";
        this.colorl3 = "silver";
      break;
    }

  
  if (this.tolerancia == "0"){
  
    if(this.banda1 == "negro" && this.banda2 == "negro" && this.banda3 == "negro"){
  
      this.aviso1 = this.preca;
      }
      else{
      
      this.homs = (parseInt(this.banda1) + parseInt(this.banda2))*parseInt(this.banda3);
      this.tolMax = this.homs * 1.05;
      this.tolMin = this.homs * 0.95;
      this.valorhom = true;
      this.valorMax = true;
      this.valorMin = true;
      
      }
  }
  else{
  
    if(this.banda1 == "negro" && this.banda2 == "negro" && this.banda3 == "negro"){
  
      this.aviso1 = this.preca;
      }
      else{
      
      this.homs = (parseInt(this.banda1) + parseInt(this.banda2))*parseInt(this.banda3);
      this.tolMax = this.homs * 1.10;
      this.tolMin = this.homs * 0.90;
      this.valorhom = true;
      this.valorMax = true;
      this.valorMin = true;
      
      }
  
  }
  
  }

  ngOnInit(): void {
  }

}
