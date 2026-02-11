let numArr = []
for (let i = 0; i < 20; i++) 
{
    numArr[i] = Math.round(Math.random() * 100 - 50);
}
console.log(`array:`, numArr )

function sorting(array) 
{
    for(let num = 0; num < array.length - 1; num++) 
    {
        for(let i = num + 1; i < array.length; i++) 
        {
            if(array[num] >= array[i]) 
            {
                let temp = array[num]
                array[num] = array[i]
                array[i] = temp
            }
        }
    }
    return array
}
console.log("sorted array:", sorting(numArr))
