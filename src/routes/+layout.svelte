<script lang="ts">
	import { page } from '$app/stores';
	const { children, data } = $props();

	const { teamSize, pokedex } = $derived(data);

	const pathname = $derived($page.url.pathname);
</script>

<nav>
	<ul>
		<li><a href="/" class:current={pathname === '/'}>Accueil</a></li>
		<li>
			<a href="/team" class:current={pathname === '/team'}>Team({teamSize})</a>
		</li>
		<li>
			<a href="/pokedex" class:current={pathname === '/pokedex'}>Pokedex({pokedex.length})</a>
		</li>
		<li><a href="/faq" class:current={pathname === '/faq'}>FAQ</a></li>
		<li><a href="/profil" class:current={pathname === '/profil'}>Profil</a></li>
	</ul>
</nav>

<main>
	{@render children()}
</main>

<style>
	nav {
		padding: 1rem;
	}

	.current {
		color: black;
	}
</style>
