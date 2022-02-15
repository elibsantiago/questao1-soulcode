import { LightningElement } from "lwc";

export default class App extends LightningElement {
  name = "Eli Santiago";
  phone = "9292-9292";
  cpf = "000.000.000-00";
  age = 26;

  email = "eli@gmail.com";
  instagram = "elibs";
  twitter = "elibsant";
  visible = true;

  

changeData(){
  
  this.visible = !this.visible;
  
}

changeData(){
  this.name = "Santiago";
  this.phone = "3036-1617";
  this.cpf = "000.000.000-10";
  this.age = 36;


  }

}
