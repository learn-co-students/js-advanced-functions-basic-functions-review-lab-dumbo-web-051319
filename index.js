// Your code here



const saturdayFun = (activity="roller-skate") => {
    return `This Saturday, I want to ${activity}!`
    }
    

const mondayWork = (activity="go to the office") => { 
    return `This Monday, I will ${activity}.`
} 



const wrapAdjective = (style="*") => {
    return (adjective="special") => {
      return `You are ${style}${adjective}${style}!`
    }
  }


  const Calculator = {
      add: (c, d) => {
        return c + d
      }, 
      subtract: (a, b) => {
        return a - b 
      },
      multiply: (e, f) => {
        return e * f 
      },
      divide: (g, h) => {
          return g / h
      },
       
  }  




const actionApplyer = (begin, arr) => {
    let a = begin
  
    for (let i = 0; i < arr.length; i++ ){
      a = arr[i](a)
    }
  
    return a
  }









