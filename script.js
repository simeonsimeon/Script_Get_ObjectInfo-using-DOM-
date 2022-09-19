

// let object={
//     ramesh:{img:"photo",name:"ramesh",age:22,number:7708979422,qua:"ME.IT"},
//     simeon:{img:"photo",name:"simeon",age:22,number:7708979422,qua:"BE.Mech"},
//     sakthi:{img:"photo",name:"sakthi",age:22,number:7708979422,qua:"BSC(collector)"},
//     mukesh:{img:"photo",name:"mukesh",age:18,number:7708979422,qua:"BE.civil"}
// }
//         let div=document.createElement("div");
//         div.className+="easy";
//     //   let clear= setInterval(() =>{
//     //         for(let key in object.mukesh){
//     //             // console.log(object[key]);
               
//     //             document.body.appendChild(div);
//     //             let li=document.createElement("li");
//     //             li.innerText=key+":"+object.mukesh[key];
//     //             div.appendChild(li);
//     //         }


//     //     },2000);
//     //     if (div<5){
//     //     clearInterval(clear);
//     //     }
//           for(let key in object.sakthi){
//                 // console.log(object[key]);
               
//                 document.body.appendChild(div);
//                 let li=document.createElement("li");
//                 li.innerText=key+":"+object.sakthi[key];
//                 div.appendChild(li);
//             }

    // for(let key in object){

    //         for(let data in key){
    //             // console.log(object[key]);
               
    //             document.body.appendChild(div);
    //             let li=document.createElement("li");
    //             li.innerText=object[key];
    //             div.appendChild(li);
    //         }
    //     }

    let studenInfo=[
        {Name:'simeon',Age:22,Qualification:"BE.Mech",img:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80/testimonials-5.jpg"},
        {Name:'Ramesh',Age:22,Qualification:"ME.(IT)",img:src="testimonials-5.jpg"},
        {Name:'Mukesh',Age:22,Qualification:"BE.civil",img:src="testimonials-5"},
        {Name:'Sakthi',Age:22,Qualification:"Bsc.(IT)",img:src="testimonials-5"}
    ]

    
            for (let key of studenInfo){
                console.log(studenInfo[key])
                console.log(key.Name);
                let div=document.createElement("div");
            div.className+="easy";
                document.body.appendChild(div);
                                let li=document.createElement("li");
                                let li1=document.createElement("li");
                                let li2=document.createElement("li");
                                let li3=document.createElement("li");
                                li.innerText=key.img;
                                li1.innerText=key.Name;
                                li2.innerText=key.Age;
                                li3.innerText=key.Qualification;
                                div.appendChild(li);
                                div.appendChild(li1);
                                div.appendChild(li2);
                                div.appendChild(li3);
                                console.log(key.Age);
            }
    



    