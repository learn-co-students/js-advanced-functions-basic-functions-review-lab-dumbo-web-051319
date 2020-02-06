const saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (string = "*") => {
    return (adj = "special") => {
        return `You are ${string}${adj}${string}!`
    }
}

const Calculator = {
    add: (a, b) => {
        return (a + b)
    },

    subtract: (a, b) => {
        return (a - b)
    },

    multiply: (a, b) => {
        return(a * b)
    },

    divide: (a, b) => {
        return (a / b)
    }
}

const actionApplyer = (start, array) => {
   let result = start
   for (let i = 0; i < array.length; i++) {
       result = array[i](result)
   }
   return result
}