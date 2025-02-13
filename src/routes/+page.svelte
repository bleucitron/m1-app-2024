<script lang="ts">
	import { getRandomNumber } from '$lib/helpers';
	import Wild from '$lib/Wild.svelte';
	import { invalidate } from '$app/navigation';

	let wildId: number | undefined = $state();
	let { data } = $props();
	const { pokedex } = $derived(data);

	const started = $derived(pokedex.length);

	async function catchPokemon(id: number) {
		await fetch('/api/pokedex', { method: 'POST', body: JSON.stringify({ id }) });
		invalidate('pokedex:all');
	}

	$effect(() => {
		const i =
			started &&
			setInterval(() => {
				wildId = getRandomNumber(1, 152);
			}, 2000);

		return () => clearInterval(i);
	});

	const wildIds = [1, 4, 7];
</script>

<h1>Pokesvelte</h1>

{#if !started}
	<div class="wilds">
		{#each wildIds as id}
			{@const { name, sprites } = data.pokemons[id - 1]}
			<Wild img={sprites.front_default} {name} catchPokemon={() => catchPokemon(id)} />
		{/each}
	</div>
{:else if wildId}
	{@const wildPokemon = data.pokemons[wildId - 1]}
	<Wild
		img={wildPokemon.sprites.front_default}
		name={wildPokemon.name}
		catchPokemon={() => catchPokemon(wildPokemon.id)}
	/>
{/if}

<style>
	.wilds {
		display: flex;
		gap: 0.5rem;
	}
</style>
