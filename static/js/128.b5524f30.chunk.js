"use strict";(self.webpackChunkcars_for_rent=self.webpackChunkcars_for_rent||[]).push([[128,412],{928:(e,s,l)=>{l.d(s,{c:()=>d});l(60),l(280);var a=l(88),i=l(840),t=l(624),c=l(688),n=l(572),r=l(496);const d=e=>{let{car:s,handleClick:l}=e;const d=(0,t.OY)(),m=(0,t.w1)(c.Q9);return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("img",{className:"image-car",src:s.img?s.img:s.photoLink,alt:s.make}),(0,r.jsxs)("div",{className:"first-box-aboutCar",children:[(0,r.jsxs)("div",{className:"item-box1",children:[(0,r.jsx)("p",{className:"text-Make",children:s.make}),(0,r.jsx)("p",{className:"text-model",children:s.model}),(0,r.jsx)("p",{className:"text-year",children:s.year})]}),(0,r.jsx)("div",{className:"item-box",children:(0,r.jsx)("p",{className:"text-rentalPrice",children:s.rentalPrice})})]}),(0,r.jsxs)("div",{className:"second-box-aboutCar",children:[(0,r.jsxs)("div",{className:"item-box2",children:[(0,r.jsxs)("p",{children:[s.address.split(",")[1]," |"]}),(0,r.jsxs)("p",{children:[s.address.split(",")[2]," |"]}),(0,r.jsxs)("p",{children:[s.rentalCompany," |"]}),s.accessories.some((e=>e.toLocaleLowerCase().indexOf("premium")>=0))&&(0,r.jsx)("p",{children:"Premium"})]}),(0,r.jsxs)("div",{className:"item-box2",children:[(0,r.jsx)("p",{children:s.type}),(0,r.jsx)("p",{children:s.model}),(0,r.jsx)("p",{children:s.year}),(0,r.jsx)("p",{children:s.type})]})]}),(0,r.jsxs)("button",{name:s.id,className:"button-favorite",onClick:e=>{e.preventDefault();const l=Number(e.currentTarget.name);let a=m.some((e=>e.id===l)),i=[];a?(i=m.filter((e=>e.id!==l)),d((0,n.M7)(i))):(i=[...m,s],d((0,n.M7)(i)))},children:[(0,r.jsx)(a._Mc,{className:"iconWhite"}),m.some((e=>e.id===s.id))&&(0,r.jsx)(i.EBe,{className:"iconRed"})]}),(0,r.jsx)("button",{className:"button-learn-more",type:"button",onClick:()=>l(s),children:"Learn more"})]})}},410:(e,s,l)=>{l.d(s,{c:()=>t});var a=l(60),i=(l(928),l(496));const t=e=>{let{onClose:s,car:l}=e;return(0,a.useEffect)((()=>{return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)};function e(e){"Escape"===e.code&&s()}}),[s]),(0,i.jsx)("div",{className:"overlay",onClick:s,children:(0,i.jsxs)("div",{className:"modal",children:[(0,i.jsx)("img",{className:"modal-image-car",src:l.img?l.img:l.photoLink,alt:l.make}),(0,i.jsxs)("ul",{className:"info-car-box",children:[(0,i.jsxs)("li",{className:"list-item info1",children:[(0,i.jsxs)("p",{className:"style-text1",children:[l.make," \xa0"]}),(0,i.jsxs)("p",{className:"style-text1 blue",children:[l.model," \xa0"]}),(0,i.jsx)("p",{className:"style-text1",children:l.year})]}),(0,i.jsxs)("li",{className:"list-item info2",children:[(0,i.jsxs)("p",{className:"style-text2",children:[l.address.split(",")[1]," |"]}),(0,i.jsxs)("p",{className:"style-text2",children:[l.address.split(",")[2]," |"]}),(0,i.jsxs)("p",{className:"style-text2",children:["id: ",l.id," |"]}),(0,i.jsxs)("p",{className:"style-text2",children:["year: ",l.year," |"]}),(0,i.jsxs)("p",{className:"style-text2",children:["type: ",l.type," "]})]}),(0,i.jsxs)("li",{className:"list-item info3",children:[(0,i.jsxs)("p",{className:"style-text2",children:["Fuel Consumption: ",l.fuelConsumption," |"]}),(0,i.jsxs)("p",{className:"style-text2",children:["Engine Size: ",l.engineSize]})]}),(0,i.jsx)("li",{className:"list-item info4",children:(0,i.jsx)("p",{className:"style-text3",children:l.description})}),(0,i.jsx)("li",{className:"list-item info5",children:(0,i.jsx)("p",{className:"style-text5",children:"Accesories and functionalities:"})}),(0,i.jsx)("li",{className:"list-item info6",children:l.accessories.map((e=>(0,i.jsxs)("p",{className:"style-text2",children:[e,"\xa0 |\xa0"]})))}),(0,i.jsx)("li",{className:"list-item info7",children:l.functionalities.map((e=>(0,i.jsxs)("p",{className:"style-text2",children:[e," \xa0|\xa0"]})))}),(0,i.jsx)("li",{className:"list-item info8",children:(0,i.jsx)("p",{className:"style-text5",children:"Rental Conditions:"})}),(0,i.jsxs)("li",{className:"list-item ",children:[(0,i.jsx)("p",{className:"style-text4 Minimum-age",children:"Minimum age: "}),(0,i.jsx)("p",{className:"style-text4 blue num-minimum-age",children:l.rentalConditions.slice(12,15)}),(0,i.jsx)("p",{className:"style-text4 rental-condition",children:l.rentalConditions.slice(16,38)})]}),(0,i.jsxs)("li",{className:"list-item info9",children:[(0,i.jsx)("p",{className:"style-text4 rental-condition",children:l.rentalConditions.slice(39)}),(0,i.jsx)("p",{className:"style-text4 mileage",children:"Mileage: "}),(0,i.jsx)("p",{className:"style-text4 blue num-mileage",children:l.mileage}),(0,i.jsx)("p",{className:"style-text4 price",children:"Price: "}),(0,i.jsxs)("p",{className:"style-text4 blue rentalPrice",children:[l.rentalPrice.slice(1),"$"]})]})]}),(0,i.jsx)("button",{className:"btn-rental-car",children:"Rental car"})]})})}},128:(e,s,l)=>{l.r(s),l.d(s,{default:()=>r});var a=l(688),i=l(624),t=(l(280),l(60));l(412);var c=l(410),n=l(496);const r=()=>{const e=(0,i.w1)(a.Q9),[s,l]=(0,t.useState)(null),r=()=>{l(null),document.body.style.overflowY="scroll"},d=e=>{l(e),document.body.style.overflowY="hidden"};return(0,n.jsx)("div",{className:"favorites-box",children:(0,n.jsx)("ul",{className:"favorites-catalog",children:e&&e.map((e=>(0,n.jsx)("li",{children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("img",{className:"image-car",src:e.img?e.img:e.photoLink,alt:e.make}),(0,n.jsxs)("div",{className:"first-box-aboutCar",children:[(0,n.jsxs)("div",{className:"item-box1",children:[(0,n.jsx)("p",{className:"text-Make",children:e.make}),(0,n.jsx)("p",{className:"text-model",children:e.model}),(0,n.jsx)("p",{className:"text-year",children:e.year})]}),(0,n.jsx)("div",{className:"item-box",children:(0,n.jsx)("p",{className:"text-rentalPrice",children:e.rentalPrice})})]}),(0,n.jsxs)("div",{className:"second-box-aboutCar",children:[(0,n.jsxs)("div",{className:"item-box2",children:[(0,n.jsxs)("p",{children:[e.address.split(",")[1]," |"]}),(0,n.jsxs)("p",{children:[e.address.split(",")[2]," |"]}),(0,n.jsxs)("p",{children:[e.rentalCompany," |"]}),e.accessories.some((e=>e.toLocaleLowerCase().indexOf("premium")>=0))&&(0,n.jsx)("p",{children:"Premium"})]}),(0,n.jsxs)("div",{className:"item-box2",children:[(0,n.jsx)("p",{children:e.type}),(0,n.jsx)("p",{children:e.model}),(0,n.jsx)("p",{children:e.year}),(0,n.jsx)("p",{children:e.type})]})]}),(0,n.jsx)("button",{className:"button-learn-more",onClick:d,children:"Learn more"}),s&&(0,n.jsx)(c.c,{onClose:r,car:e})]})},function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce(((e,s)=>e+((s&=63)<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s>62?"-":"_")),"")}())))})})}},412:(e,s,l)=>{l.r(s),l.d(s,{default:()=>i});l(60);var a=l(496);const i=()=>(0,a.jsxs)("div",{className:"box-text",children:[(0,a.jsx)("p",{className:"title-text",children:"Fast & Easy way to rent a car"}),(0,a.jsx)("p",{className:"description-text",children:"A fleet of more than 200 car classes and for every pocket allows us to provide website clients with the best and most profitable offers for car booking and rental."})]})},280:()=>{}}]);
//# sourceMappingURL=128.b5524f30.chunk.js.map