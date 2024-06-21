let r = 3; 

for(let i = 0; i<3;i++){ 
    console.log(i); 
    r-- 
    if(i==r){ 
        break; 
    } 
    r = (r==i ? i++ : r--)
}