//1.Sum of two numbers
function sum(a,b){
    return a+b;
}
console.log(sum(3,2))
console.log(sum(-4,-8))
console.log(sum(-3,5))

//2.Return the next number from the number passed
function nextNumber(a){
    return a+1;
}
console.log(nextNumber(1))
console.log(nextNumber(0))
console.log(nextNumber(-2))

//3.Find perimeter of a rectangle
function rectanglePerimeter(length,width){
    return 2*(length+width);
}
console.log(rectanglePerimeter(2,5))
console.log(rectanglePerimeter(3,5))
console.log(rectanglePerimeter(10,20))

//4.Return something to me
function returnSomethingToMe(name){
    return "something"+" "+ name
}
console.log(returnSomethingToMe("is better than nothing"))
console.log(returnSomethingToMe("jack daniels"))
console.log(returnSomethingToMe("pinocchio"))

//5.Bob's BMI vs Jane's BMI
function greaterBMI (BMIofBob,BMIofjane){
    if(BMIofBob>BMIofjane){
        return "Bob"
    }
    else if(BMIofjane>BMIofBob){
        return "Jane"
    }
    else if(BMIofjane==BMIofBob){
        return "Equal"
    }
}
console.log(greaterBMI(30,25))
console.log(greaterBMI(35,40))
console.log(greaterBMI(35,35))

//6.Basketball points
function basketBallPoints(no0f2poits,no0f3poits){
    return no0f2poits*2+no0f3poits*3
}
console.log(basketBallPoints(1,1))
console.log(basketBallPoints(7,5))
console.log(basketBallPoints(0,5))

//7.Less than 100
function isSumMoreThan100 (a,b){
    if(a+b<100){
        return false;
    }else if (a+b>100){
        return true;
    }
}
console.log(isSumMoreThan100(25,55))
console.log(isSumMoreThan100(72,38))

//8.Convert minutes to second
function convertToSeconds(a){
   let seconds=a*60
   if (seconds == 0) {
    return "0"
   }
   else if (seconds == 1) {
    return "1 second"
   }else if (seconds>1){
    return seconds +" "+"seconds"
   }
}
console.log(convertToSeconds(5))
console.log(convertToSeconds(0))
console.log(convertToSeconds(1))

//9.Greater among the three
function greater (a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else if(c>a && c>b){
        return c;
    }
    else if (a==b &&a==c &&b==c){
        return a;
    }

}
console.log(greater(2,35,9))
console.log(greater(23,23,23))

//10.Less among the three
function least (a,b,c){
    if(a<b && a<c){
        return a;
    }
    else if(b<a && b<c){
        return b;
    }
    else if(c<a && c<b){
        return c;
    }
    else if (a==b &&a==c &&b==c){
        return a;
    }

}
console.log(least(2,35,9))
console.log(least(23,23,23))

//11.Football points
function footballPoints (won,drawn,lost){
    return won*3 + drawn*1 + lost*0
}
console.log(footballPoints(5,0,2))
console.log(footballPoints(0,0,2))
console.log(footballPoints(5,2,1))

//12.Even numbers
function isEven (a){
    if(a%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(1))
console.log(isEven(2))
for (let i = 0; i <= 101; i++) {
    if (isEven(i)) {
      console.log(i);
    }
  }







