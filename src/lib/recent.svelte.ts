class Recent {
	ids = $state<number[]>([]);

	add(id: number) {
		if (!this.ids.includes(id)) {
			this.ids.push(id);
		}
	}
}

export const recent = new Recent();
