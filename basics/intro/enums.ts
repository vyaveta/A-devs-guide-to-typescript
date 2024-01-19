enum seatChoice{
    AISLE = 10,
    MIDDLE = "helo",
    WINDOW = "sja;f",
    END = "sjf",
}

let choice = seatChoice.WINDOW
console.log(seatChoice.AISLE, seatChoice.MIDDLE, seatChoice.WINDOW, seatChoice.END)

interface Hello{
    name: string,
    age?: number, // optional parameter
    create(): boolean
}

let obj1: Hello = {
    name: "slj",
    create: () => false
}

