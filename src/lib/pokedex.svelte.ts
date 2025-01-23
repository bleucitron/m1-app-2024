class Pokedex {
    ids = $state<number[]>([])

    discover(id: number) {
        if (!this.ids.includes(id)) {
            this.ids.push(id)
        }
    }
}

export const pokedex = new Pokedex()




