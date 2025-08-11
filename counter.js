/*let a = [1,2,3,4,5,6,7,8,9,10];
console.log(a);
for(let i=0;i<10,length;i++)
{
     console.log(`2*${a(i)}=`, a[i])
    }
    console.log(a);

    let b =a.map((e1,ui)=> {
        console.log(`2*$(e1)=`,el*2));

});
console.log(a);    
    let table=(param)=> {
        for (let i=0;i<a.length;i++)
        {
            console.log(`$(param)*$a(i)=`, a[i]*param);
        }
        };
    table (3);
   let marks = "70";
    if(marks>=90){
        console.log("he will get a bike");
    }else if (marks>=80){
        console.log("he will get a party");
    }else if(marks>=70)
        console.log("game");
        else {
            console.log("nothing");
        }

marks > 70 ?console.log("true") : console.log("false");
let a = [1,2,3];
let b = [1,2,3];
console.log(a == b);
console.log(a == b);*/
//let a=[1,2,3,4,5,6,7,8,9,10];
//let b=a.filter((el) >= 4).map((el) => el *7);
//console.log(b);

/*let a = [1,2,3,4,5];
let b = a.reduce((acc,cur,index)=>{
    return acc + cur;
    }, 0);
console.log(b);
let acc = 10;
acc = acc + 1;
acc = acc + 2;
acc = acc + 3;
acc = acc + 4;
acc = acc + 5;
acc = acc + 6;
const a = [1,2,3,4,5];
const evenSum = a.filter((el)=>el%2==0).reduce((a,e)=>a+e);
const oddsum = a.filter((el)=>el%2==1).reduce((a,e)=>a+e);

console.log(evenSum, oddsum);

const aa=[0,0,0,0,0,0,0,0,0,0,0,0]
const so=aa.map((el,i)=>el+i+1).filter((el)=>el%2==1).reduce((a,e)=>a+e);
const se=aa.map((el,i)=>el+i+1).filter((el)=>el%2==0).reduce((a,e)=>a+e);
console.log(so,se);*/
//tag selector
//let body = document.getElementsByTagName("h1");
//console.log(body);
//id selector
//let val = document.getElementById("val");
//console.log(val);
//queryselector
//let varr = document.querySelector(".a");
//console.log(varr);
//queryselectorAll
//let as = document.querySelectorAll("#val");
//console.log(as[0]);
//console.log(classes(0));

//1st step 1 want node
//let aaa = document.querySelector(".a");

// read operation
//let texts = node[0].innerHTML;
//console.log(texts);

//write operation
//classes.textContent = "Entering from js";



//let text1 = node[0].textContent;
//console.log(text1);

//let text2 =node1.innerHTML;
//console.log(text2);


//let sty=document.querySelectorAll("h1");
//console.log(sty);

//let=sty[0].style.color = "red";
//console.log(sty);


//sty[1].style.color = "blue";
//console.log(sty);
// to remove a class
//sty[1].classList.remove("hidden");


// to add the class 
//sty[1].classList.add("body");


// toggle class
//sty[1].classList.toggle("hidden");

//sty[1].classList.toggle("body");

// 1 create a tag
//const v= document.createElement("h3");

// 2 put content
//v.textContent="added from js"

// 3 where we have to put find it node
//const h3=document.getElementsByClassName("cnt");

// 4 
//h3[0].appendChild(v);

 /* <div>
  <h2 class="sd">fgfgfg</h2>
  </div>
    
    }*/
/*const div=document.createElement("div");
const h2=document.createElement("h2");

h2.textContent="Anything";
h2.classList.add="sd";
div.appendChild(h2);

document.body.appendChild(div);

const img=document.createElement("img");
img.setAttribute("src","https://static.vecteezy.com/system/resources/thumbnails/020/934/645/small_2x/doraemon-illustration-free-free-vector.jpg");
img.setAttribute("alt","Doraemon");
img.setAttribute("id","my doraemon");
img.setAttribute("height",100);
img.setAttribute("weight",200);

document.body.appendChild(img);*/





/*const incButton =
document.querySelector("button");

console.log(incButton);

incButton.addEventListener("click", () => {
    console.log("button clicked");
});*/




/*const btn = document.getElementsByTagName("button");
const incbtn = btn[0];
const decbtn = btn[1];
const resetbtn = btn[2];
const p = document.querySelector("#val");
let val = 0;
let inc = true;

 let pause = () => {
    if (val>= 10) {
        inc = false;
    }
 };

const handler = (vall) =>{
    if (inc) {
    vall? (val=val +1): (val= val-1);
    val>=0 ?(p.style.color = "green") : (p.style.color = "blue");
    p.textContent = val;
}
pause();
};

const init = ()=>{
    val=0;
    p.textContent=val;
    inc = true;
};
incbtn.addEventListener("click",()=>handler(true));
decbtn.addEventListener("click",()=> handler(false));
resetbtn.addEventListener("click", init);*/
/*var obj = {
    id:1,
    name: "Prakruthi",
    email:"prakruthipatkar@gmail.com",
    data :{
        address: "Delhi",
        contact: "1234567890",
        adhar: "1234-5678-9101",
        education:{
            school: "ABC High School",
            college: "XYZ University",
            degree: "Bachelor of Science"
        },
    },
};*/

/*console.log(obj);
JSON.stringify(obj);
console.log(obj.data);
let arr=[{id:1, name:"Prakruthi"},
{id:2, name:"John"},
{id:3, name:"leo"},
{id:4, name:"Jane"}
];
console.log(arr);
//arr.forEach((el)=>( el.id=el.id*el.id));
//arr.forEach((el)=>console.log(el));
/*const a=arr.map((el)=>{
    el.id = el.id * el.id;
    return el;
});
console.log(a);*/
/*const a=arr.map((el)=>{
    el.id = el.id * el.id;
    return {
        i: el.id,
        n:el.name,
    };
});*/
//console.log(a);*/
//const b=[0,0,0,0,0,0,0,0,0,0];
/*{
    id:index,
    name:index+el,
    as: id and name
}*/
//const c =b.map((el,index)=>{
   // let n= el+index;
    //const asd = index +n;
    /*return{
        id: index,
        name: index + el,
        as: index + index + el,
    };
}).filter((el) =>el.id %2==0 && el.name %2==0 && el.as%2==0);
console.log(c);

const y =b.map((el,index)=>{
       return{
        id: index,
        name: index + el,
        as: index + index + el,
    };
}).filter((el) =>el.id %2==1 && el.name %2==1 && el.as%2==1);
console.log(y);*/



/*const fetchData= async()=>{
 const response= await fetch("https://jsonplaceholder.typicode.com/users");
console.log(response);
const data= await response.json();
console.log(data);

const vall=await fetch ("https://jsonplaceholder.typicode.com/todos");
 console.log(vall.ok);
 if(vall.ok==true){
     const data= await vall.json();
        console.log(data);}
try{
    
const response= await fetch("https://jsonplaceholder.typicode.com/posts");
 if (response.ok==true){
    const data= await response.json();
    console.log(data);
 }
else{
    throw new Error("Something is wrong");
}

}
catch( err){
        console.log("#Error", err);}
};
fetchData();*/
const fetchData= async()=>{
    try{
 const response= await fetch("https://jsonplaceholder.typicode.com/users");
 const response1= await fetch("https://jsonplaceholder.typicode.com/todos");
  const response2= await fetch("https://jsonplaceholder.typicode.com/photos");
  if (response1.ok) {
    const data = await response.json();
    console.log(data);
  }
  if (response.ok==true) {
    const data = await response.json();
    console.log(data);
  }
    if (response.ok==true) {
        const data = await response2.json();
        console.log(data);
    }
    if(!response.ok|| !response1.ok|| !response2.ok) {
        throw new Error("Something went wrong");
    }
}
catch (err) {
    console.err("#Error", err);
}};
fetchData();