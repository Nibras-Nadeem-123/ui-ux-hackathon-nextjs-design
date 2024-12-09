import { ReactNode } from "react"

interface MenuItem {
    title: ReactNode
    name: string
    description: string
    calories: number
    price: number
    highlight?: boolean
  }
  
  export const menuItems: MenuItem[] = [
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32,
      title: undefined
    },
    {
      name: "Berries and creme tart",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: 700,
      price: 43,
      highlight: true,
      title: undefined
    },
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: 1000,
      price: 14,
      title: undefined
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: 560,
      price: 35,
      title: undefined
    }
  ]