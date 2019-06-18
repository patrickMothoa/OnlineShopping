import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MaparaShoppinApp';

  emptyCart = true; 
  Shop = [
  {itemName:"allstar.jpg", Description:"Kasi Mapara Range",NumOf: 5, Quantity: 0, Prices:950},
  {itemName:"kipkip.jpg", Description:"Jitas ke Mapara line",NumOf: 4, Quantity: 0, Prices:800},
  {itemName:"mbatata.jpg", Description:"Moisa le Maiseng Range",NumOf: 4, Quantity: 0, Prices:1500},
  {itemName:"Loxion.jpg" , Description:"Mdolana ka Range",NumOf: 4, Quantity: 0, Prices:650},
  {itemName:"Dickies-Ema.jpg", Description:"Mdikana ka Docus",NumOf: 4, Quantity: 0, Prices:3600},
  {itemName:"wish.jpg" , Description:"Kotination Mapara",NumOf: 5, Quantity: 0, Prices:2500},
  {itemName:"jonssonfootewear.jpg", Description:"Sbhathu Madzala ",NumOf: 5, Quantity: 0, Prices:1500},
  {itemName:"belt.jpg", Description:"belt Line Range",NumOf: 5, Quantity: 0, Prices:250}]

  MyCart = []

  SammaryCart = []

  Talamount: any = 0;

    //mylist
  newItem : string =""
  newDescription: string = ""
  newQuantity : number = null;
  newPrice: any = 0;
  newNumOf : number = 0;
  Quantity : number = 0;
    //mylist2
    newAddItem : string =""
     
    //adding to cart
    addToCart(buys){
      let index = this.Shop.indexOf(buys)

      
             // using find to check for existing values
        var myitems = this.MyCart.find (x => x.itemName === buys.itemName);
        if(myitems){
          myitems.Quantity +1
        }
        else{
          this.MyCart.push({itemName:this.Shop[index].itemName,NumOf:this.Shop[index].NumOf, Description:this.Shop[index].Description, Quantity:this.Shop[index].Quantity,Prices:this.Shop[index].Prices })
        }

    // Using for and ifs to find existing added values  
    //      if(this.MyCart.length == 0){
    //            this.MyCart.push({itemName:this.Shop[index].itemName,NumOf:this.Shop[index].NumOf, Description:this.Shop[index].Description, Quantity:this.Shop[index].Quantity+1,Prices:this.Shop[index].Prices })
    //      }else{
    //        for(var i=0; i< this.MyCart.length; i++){
    //          if(this.MyCart[i].Prices == buys.Prices ){
    //               this.MyCart[i].Quantity = this.MyCart[i].Quantity +1
    //          }
    //          else{
    //            this.MyCart[i].push({itemName:this.Shop[index].itemName,NumOf:this.Shop[index].NumOf, Description:this.Shop[index].Description, Quantity:this.Shop[index].Quantity+1,Prices:this.Shop[index].Prices })
    //          }
    //        }
    //  }
    this.newQuantity = this.MyCart.length;      
    if(this.addToCart.length > 0){
      this.emptyCart = false
   }
    
     }


         // main array values
   add(){
    this.Shop.push({itemName:this.newItem,NumOf:this.newNumOf, Description:this.newDescription, Quantity:this.newQuantity ,Prices:this.newPrice });
    if(this.addToCart.length > 0){
       this.emptyCart = false
    }

    this.newItem = ""
    this.newDescription = ""
    this.newQuantity = 0;
    this.newPrice = 0;
  }
      // delete carts entries
  delete(samBuys){
    let index = this.MyCart.indexOf(samBuys)
    this.MyCart.splice(index, 1);
     
    this.newPrice -= samBuys.Prices
    this.newQuantity = this.MyCart.length;
   /* this.Talamount = samBuys.Prices  -  samBuys.Prices; */
  }


    // increasing quantity
  incQua(emStaff){
    if(emStaff.NumOf == emStaff.Quantity){
      return alert("Can't add more")
    }else{
      emStaff.Quantity++
      this.newPrice += emStaff.Prices

      this.newQuantity == emStaff.Quantity
    }
  }

   // decreasing quantity
  DecQua(emStaff){
    if(emStaff.Quantity == 0){
      return alert("Can't be in minus")
    }else{
      emStaff.Quantity--
      this.newPrice -= emStaff.Prices
    }
  }
   // for total price
  countPrice(){
    this.newPrice = 0;
     for(let p of this.Shop){
       this.newPrice += p.Prices*p.Quantity
       
     }
    }
}
