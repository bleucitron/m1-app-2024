<script lang="ts">
	type Props = {
		name: string;
		img: string;
		catchPokemon: () => void;
	};
	const { img, name, catchPokemon }: Props = $props();
</script>

<button class="Wild" onclick={catchPokemon}>
	<img src={img} alt={name} />
</button>

<style>
	.Wild {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 15rem;
		margin: auto;
	}
	img {
		height: 15rem;
		object-fit: cover;
		filter: contrast(0%) brightness(200%);
	}
</style>
