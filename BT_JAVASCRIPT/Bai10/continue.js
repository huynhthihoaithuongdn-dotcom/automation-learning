// continue: bo qua mot gia tri trong vong lap

// khoi tao i bat dau bang 1; den i<=10, moi lan lap tang bien i len 1. 
// Neu i=3 thi bo qua. Va in ra gia tri i. 
for (let i=1; i<=10; i++){
    if (i===3 || i===4){            // vi sao || lai hoat dong giong &&
        continue;
    }
    console.log(i); 
}


// in ra cac so le
for (let i=1; i<=10; i++){
    if (i % 2 === 0){            
        continue;
    }
    console.log(i); 
}