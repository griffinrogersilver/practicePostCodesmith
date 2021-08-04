const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

let maxWater = function(heights){
 let left =0
 let right = heights.length-1
  let maxL = heights[0], total=0, maxRInd = heights.length-1, sidestMin =0; 
  const sideMin = () =>{ return sidestMin = Math.min(maxL, heights[maxRInd])}

    for(let p =0; p< heights.length; p++){
        sideMin()
        //have to change the way the maxR works to decrement index since p is a for loop going in one direction
        if(maxL > heights[maxRInd]){ heights[maxRInd--]}
        
        
        if(heights[p]>maxL) maxL = heights[p];
        console.log(sidestMin)
        if(sidestMin >0 && heights[p] < sidestMin){
            total += sidestMin -heights[p]
            
        }
        console.log(total)
        //a conditional to determine if the right side and the left are bigger than 0 and if
        //if so take the lower of the two and subtract the current value of p from the lower of the two

    }
    
    return total;
}
console.log(maxWater([0,1,0,2,1,0,3,1,0,1,2]))

///\\\\\\\\\\Above is my solution(FAULTY) Below is the actual solution



const elevationArray = [0,1,0,2,1,0,3,1,0,1,2]

const getTappedRainwater = function(heights){
let left =0, right =heights.length-1, totalWater =0, maxLeft =0, maxRight =0;

while(left<right){
    if(heights[left]<=heights[right]){
        if(heights[left]>=maxLeft){
            maxLeft = heights[left]
        }else{
            totalWater += maxLeft -heights[left]
        }
        left++
    }else{
        if(heights[right]>=maxRight){
            maxRight = heights[right];
        
        }else{
            totalWater += maxRight-heights[right];
        }
        right--;
    }
}
return totalWater
}
console.log(getTappedRainwater(elevationArray))

//jeeb