import { Component, Input } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MaparaShoppinApp';

  emptyCart = true; 
  Shop = [
  {itemName:"allstar.jpg", Description:"Kasi Mapara Range",NumOf: 0, Quantity: 1, Prices:4000},
  {itemName:"kipkip.jpg", Description:"Jitas ke Mapara line",NumOf: 0, Quantity: 1, Prices:800},
  {itemName:"mbatata.jpg", Description:"Moisa le Maiseng Range",NumOf: 0, Quantity: 1, Prices:2500},
  {itemName:"Loxion.jpg" , Description:"Mdolana ka Range",NumOf: 0, Quantity: 1, Prices:3600},
  {itemName:"Dickies-Ema.jpg", Description:"Mdikana ka Docus",NumOf: 0, Quantity: 1, Prices:360},
  {itemName:"wish.jpg" , Description:"Kotination Mapara",NumOf: 0, Quantity: 1, Prices:2600},
  {itemName:"jonssonfootewear.jpg", Description:"Sbhathu Madzala ",NumOf: 0, Quantity: 1, Prices:1500},
  {itemName:"belt.jpg", Description:"belt Line Range",NumOf: 0, Quantity: 1, Prices:250}]

  MyCart = []

  SammaryCart = []

  Talamount: any = 0;

    //mylist
  newItem : string =""
  newDescription: string = ""
  newQuantity : number = null;
  newPrice: number = 0;
  newNumOf : number = 0;
    //mylist2
    newAddItem : string =""
     
    //adding to cart
    addToCart(buys){
      let index = this.Shop.indexOf(buys)
      
        this.MyCart.push({itemName:this.Shop[index].itemName,NumOf:this.Shop[index].NumOf, Description:this.Shop[index].Description, Quantity:this.Shop[index].Quantity,Prices:this.Shop[index].Prices });
        if(this.addToCart.length > 0){
           this.emptyCart = false
        }
                // for adding in total money
        this.Talamount = this.Talamount + buys.Prices;

     }

     // sammary
     CreateSam(sumBuys){
      let index = this.Shop.indexOf(sumBuys)
      this.SammaryCart.push({itemName:this.Shop[index].itemName, Description:this.Shop[index].Description, Quantity:this.Shop[index].Quantity,Prices:this.Shop[index].Prices });
     }

         // main array values
   add(){
    this.Shop.push({itemName:this.newItem,NumOf:this.newNumOf, Description:this.newDescription, Quantity:this.newQuantity ,Prices:this.newPrice });
    if(this.addToCart.length > 0){
       this.emptyCart = false
    }
    this.newItem = ""
    this.newDescription = ""
    this.newQuantity = null;
    this.newPrice = null;
  }
      // delete carts entries
  delete(samBuys){
    let index = this.MyCart.indexOf(samBuys)
    this.MyCart.splice(index, 1);

    this.Talamount = this.MyCart[index].Prices  -  this.MyCart[index].Prices;
  }
  
}
